import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

export const config = {
  api: { bodyParser: false },
};

async function getRawBody(req: VercelRequest): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

function verifyStripeSignature(payload: Buffer, sig: string, secret: string): boolean {
  try {
    const elements = sig.split(',');
    const timestamp = elements.find(e => e.startsWith('t='))?.split('=')[1];
    const signatures = elements
      .filter(e => e.startsWith('v1='))
      .map(e => e.split('=')[1]);

    if (!timestamp || signatures.length === 0) {
      console.error('Webhook sig parse failed: missing timestamp or v1 signature');
      return false;
    }

    const signedPayload = `${timestamp}.${payload.toString('utf8')}`;
    const expectedHex = crypto
      .createHmac('sha256', secret)
      .update(signedPayload)
      .digest('hex');

    // Check against all v1 signatures (Stripe may send multiple)
    for (const signature of signatures) {
      if (!signature) continue;
      const expectedBuf = Buffer.from(expectedHex, 'utf8');
      const signatureBuf = Buffer.from(signature, 'utf8');
      if (expectedBuf.length === signatureBuf.length &&
          crypto.timingSafeEqual(expectedBuf, signatureBuf)) {
        return true;
      }
    }

    console.error('Webhook sig mismatch: none of the v1 signatures matched');
    return false;
  } catch (err) {
    console.error('Webhook sig verification error:', err instanceof Error ? err.message : err);
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Log every incoming request for debugging
  console.log(`Stripe webhook: ${req.method} from ${req.headers['user-agent']?.substring(0, 50)}`);

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check webhook secret is configured
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set in environment variables!');
    return res.status(500).json({ error: 'Webhook secret not configured' });
  }

  const sig = req.headers['stripe-signature'] as string;
  if (!sig) {
    console.error('Missing stripe-signature header');
    return res.status(400).json({ error: 'Missing stripe-signature' });
  }

  let rawBody: Buffer;
  try {
    rawBody = await getRawBody(req);
    console.log(`Webhook body received: ${rawBody.length} bytes`);
  } catch (err) {
    console.error('Failed to read request body:', err instanceof Error ? err.message : err);
    return res.status(400).json({ error: 'Failed to read body' });
  }

  if (!verifyStripeSignature(rawBody, sig, webhookSecret)) {
    console.error('Webhook signature verification failed');
    console.error('Sig header (first 50 chars):', sig.substring(0, 50));
    console.error('Secret starts with:', webhookSecret.substring(0, 8) + '...');
    return res.status(400).json({ error: 'Invalid signature' });
  }

  let event: { type: string; data: { object: Record<string, unknown> } };
  try {
    event = JSON.parse(rawBody.toString('utf8'));
  } catch (err) {
    console.error('Failed to parse webhook JSON:', err instanceof Error ? err.message : err);
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  console.log(`Stripe event: ${event.type}`);

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Record<string, unknown>;
        const customerDetails = session.customer_details as Record<string, unknown> | undefined;
        const shippingDetails = session.shipping_details as Record<string, unknown> | undefined;
        const orderInfo = {
          sessionId: session.id as string,
          email: customerDetails?.email as string | undefined,
          name: customerDetails?.name as string | undefined,
          phone: customerDetails?.phone as string | undefined,
          amount: session.amount_total as number | undefined,
          currency: session.currency as string | undefined,
          shippingName: (shippingDetails?.name as string) || undefined,
          shippingAddress: shippingDetails?.address as {
            line1?: string;
            line2?: string;
            city?: string;
            postal_code?: string;
            country?: string;
          } | undefined,
        };
        console.log('PLANNER ORDER:', JSON.stringify(orderInfo));
        await sendOrderNotification(orderInfo);
        break;
      }

      case 'payment_intent.succeeded': {
        const pi = event.data.object as Record<string, unknown>;
        console.log('Payment succeeded:', pi.id, pi.amount, pi.currency);
        break;
      }

      case 'payment_intent.payment_failed': {
        const pi = event.data.object as Record<string, unknown>;
        const lastError = pi.last_payment_error as Record<string, unknown> | undefined;
        console.log('Payment failed:', pi.id, lastError?.message);
        break;
      }

      case 'checkout.session.expired': {
        console.log('Session expired:', (event.data.object as Record<string, unknown>).id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (err) {
    // Log but still return 200 to prevent Stripe from retrying
    console.error('Error processing event:', err instanceof Error ? err.message : err);
  }

  // Always return 200 to acknowledge receipt
  return res.status(200).json({ received: true });
}

async function sendOrderNotification(order: {
  sessionId: string;
  email?: string;
  name?: string;
  phone?: string;
  amount?: number;
  currency?: string;
  shippingName?: string;
  shippingAddress?: {
    line1?: string;
    line2?: string;
    city?: string;
    postal_code?: string;
    country?: string;
  };
}) {
  const addr = order.shippingAddress;
  const addressStr = addr
    ? [addr.line1, addr.line2, addr.postal_code, addr.city, addr.country].filter(Boolean).join(', ')
    : 'N/A';

  const amountFormatted = order.amount
    ? `${(order.amount / 100).toFixed(2)} EUR`
    : 'N/A';

  // 1. Send email notification via FormSubmit.co
  await sendEmailNotification(order, addressStr, amountFormatted);

  // 2. Save order to Supabase
  await saveOrderToSupabase(order, addressStr);
}

async function sendEmailNotification(
  order: {
    sessionId: string;
    email?: string;
    name?: string;
    phone?: string;
    amount?: number;
    currency?: string;
    shippingName?: string;
  },
  addressStr: string,
  amountFormatted: string
) {
  try {
    const response = await fetch('https://formsubmit.co/ajax/Yulachip@icloud.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `Neue Bestellung Planner YC - ${amountFormatted}`,
        _template: 'table',
        Bestellung: 'Planner YC by Yuliia Cheporska',
        Betrag: amountFormatted,
        Kundenname: order.name || order.shippingName || 'N/A',
        Email: order.email || 'N/A',
        Telefon: order.phone || 'N/A',
        Lieferadresse: addressStr,
        'Stripe Session': order.sessionId,
        Status: 'Bezahlt',
      }),
    });

    if (response.ok) {
      console.log('Email notification sent to Yulachip@icloud.com');
    } else {
      const errText = await response.text();
      console.log('Email send failed:', errText);
    }
  } catch (err) {
    console.log('Email send error:', err instanceof Error ? err.message : err);
  }
}

async function saveOrderToSupabase(
  order: {
    sessionId: string;
    email?: string;
    name?: string;
    phone?: string;
    amount?: number;
    currency?: string;
    shippingName?: string;
  },
  addressStr: string
) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.log('Supabase not configured, skipping DB save');
    return;
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/planner_orders`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        stripe_session_id: order.sessionId,
        customer_email: order.email || null,
        customer_name: order.name || order.shippingName || null,
        customer_phone: order.phone || null,
        shipping_address: addressStr,
        amount_cents: order.amount || 0,
        currency: order.currency || 'eur',
        status: 'paid',
      }),
    });

    if (response.ok) {
      console.log('Order saved to Supabase');
    } else {
      const errText = await response.text();
      console.log('Supabase save failed:', errText);
    }
  } catch (err) {
    console.log('Supabase save error:', err instanceof Error ? err.message : err);
  }
}
