import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover' as any,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: lang === 'ru' ? 'Доставка' : 'Versand',
            },
            unit_amount: 600, // 6.00 EUR in cents
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ['DE', 'AT', 'CH'],
      },
      success_url: `${baseUrl}/${lang}/planner-yc?success=true`,
      cancel_url: `${baseUrl}/${lang}/planner-yc?canceled=true`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Stripe error:', message);
    return res.status(500).json({ error: message });
  }
}
