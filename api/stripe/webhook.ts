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
  const elements = sig.split(',');
  const timestamp = elements.find(e => e.startsWith('t='))?.split('=')[1];
  const signature = elements.find(e => e.startsWith('v1='))?.split('=')[1];
  if (!timestamp || !signature) return false;

  const signedPayload = `${timestamp}.${payload.toString('utf8')}`;
  const expected = crypto.createHmac('sha256', secret).update(signedPayload).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'] as string;
  if (!sig) return res.status(400).json({ error: 'Missing stripe-signature' });

  const rawBody = await getRawBody(req);

  if (!verifyStripeSignature(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!)) {
    console.error('Webhook signature verification failed');
    return res.status(400).json({ error: 'Invalid signature' });
  }

  const event = JSON.parse(rawBody.toString('utf8'));

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const orderInfo = {
        sessionId: session.id,
        email: session.customer_details?.email,
        name: session.customer_details?.name,
        phone: session.customer_details?.phone,
        amount: session.amount_total,
        currency: session.currency,
        shippingName: session.shipping_details?.name,
        shippingAddress: session.shipping_details?.address,
      };
      console.log('✅ PLANNER ORDER:', JSON.stringify(orderInfo));

      // Send email notification to owner
      await sendOrderNotification(orderInfo);
      break;
    }

    case 'payment_intent.succeeded': {
      const pi = event.data.object;
      console.log('💰 Payment succeeded:', pi.id, pi.amount, pi.currency);
      break;
    }

    case 'payment_intent.payment_failed': {
      const pi = event.data.object;
      console.log('❌ Payment failed:', pi.id, pi.last_payment_error?.message);
      break;
    }

    case 'checkout.session.expired': {
      console.log('⏰ Session expired:', event.data.object.id);
      break;
    }

    default:
      console.log(`ℹ️ Unhandled: ${event.type}`);
  }

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
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.log('⚠️ Supabase not configured, skipping DB save');
    return;
  }

  const addr = order.shippingAddress;
  const addressStr = addr
    ? [addr.line1, addr.line2, addr.postal_code, addr.city, addr.country].filter(Boolean).join(', ')
    : 'N/A';

  // Save order to Supabase (table: planner_orders)
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
      console.log('✅ Order saved to Supabase');
    } else {
      const errText = await response.text();
      console.log('⚠️ Supabase save failed (table may not exist yet):', errText);
    }
  } catch (err) {
    console.log('⚠️ Supabase save error:', err instanceof Error ? err.message : err);
  }
}
