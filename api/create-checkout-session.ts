import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.munchen-beauty.de');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: 'Stripe key not configured' });
  }

  const { language } = req.body || {};
  const lang = language === 'ru' ? 'ru' : 'de';
  const baseUrl = 'https://www.munchen-beauty.de';

  const params = new URLSearchParams();
  params.append('payment_method_types[]', 'card');
  params.append('mode', 'payment');
  params.append('locale', lang === 'ru' ? 'auto' : 'de');

  // Line item 1: Planner
  params.append('line_items[0][price_data][currency]', 'eur');
  params.append('line_items[0][price_data][unit_amount]', '2490');
  params.append('line_items[0][price_data][product_data][name]', 'Planner YC by Yuliia Cheporska');
  params.append('line_items[0][price_data][product_data][description]',
    lang === 'ru'
      ? 'Планер для планирования жизни и достижения целей'
      : 'Planer für Lebensplanung und Zielerreichung'
  );
  params.append('line_items[0][price_data][product_data][images][]', `${baseUrl}/planner/IMG_4694-web.jpg`);
  params.append('line_items[0][quantity]', '1');

  // Line item 2: Shipping
  params.append('line_items[1][price_data][currency]', 'eur');
  params.append('line_items[1][price_data][unit_amount]', '600');
  params.append('line_items[1][price_data][product_data][name]',
    lang === 'ru' ? 'Доставка (Германия)' : 'Versand (Deutschland)'
  );
  params.append('line_items[1][quantity]', '1');

  params.append('shipping_address_collection[allowed_countries][]', 'DE');

  params.append('custom_text[submit][message]',
    lang === 'ru'
      ? 'Нажимая «Оплатить», вы соглашаетесь с AGB и принимаете к сведению Widerrufsbelehrung.'
      : 'Mit Klick auf „Bezahlen" akzeptieren Sie unsere AGB und nehmen die Widerrufsbelehrung zur Kenntnis.'
  );

  params.append('success_url', `${baseUrl}/${lang}/planner-yc?success=true`);
  params.append('cancel_url', `${baseUrl}/${lang}/planner-yc?canceled=true`);

  try {
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Stripe API error:', data);
      return res.status(response.status).json({ error: data.error?.message || 'Stripe error' });
    }

    return res.status(200).json({ url: data.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Fetch error:', message);
    return res.status(500).json({ error: message });
  }
}
