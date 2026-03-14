import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow CORS for same-origin
  res.setHeader('Access-Control-Allow-Origin', 'https://www.munchen-beauty.de');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { language } = req.body || {};
  const lang = language === 'ru' ? 'ru' : 'de';
  const baseUrl = 'https://www.munchen-beauty.de';

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      locale: lang === 'ru' ? 'auto' : 'de',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Planner YC by Yuliia Cheporska',
              description: lang === 'ru'
                ? 'Планер для планирования жизни и достижения целей'
                : 'Planer für Lebensplanung und Zielerreichung',
              images: [`${baseUrl}/planner/IMG_4694-web.jpg`],
            },
            unit_amount: 2490, // 24.90 EUR in cents
            tax_behavior: 'inclusive' as any,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: lang === 'ru' ? 'Доставка (Германия)' : 'Versand (Deutschland)',
            },
            unit_amount: 600, // 6.00 EUR in cents
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ['DE'],
      },
      custom_text: {
        submit: {
          message: lang === 'ru'
            ? 'Нажимая «Оплатить», вы соглашаетесь с AGB и принимаете к сведению Widerrufsbelehrung.'
            : 'Mit Klick auf „Bezahlen" akzeptieren Sie unsere AGB und nehmen die Widerrufsbelehrung zur Kenntnis.',
        },
      },
      success_url: `${baseUrl}/${lang}/planner-yc?success=true`,
      cancel_url: `${baseUrl}/${lang}/planner-yc?canceled=true`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    const type = error instanceof Stripe.errors.StripeError ? error.type : 'unknown';
    console.error('Stripe error:', type, message);
    return res.status(500).json({ error: message, type });
  }
}
