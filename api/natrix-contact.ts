import type { VercelRequest, VercelResponse } from '@vercel/node';

const SUPABASE_URL = 'https://knmompemjlboqzwcycwe.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubW9tcGVtamxib3F6d2N5Y3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTUzNjQsImV4cCI6MjA3NDM3MTM2NH0.j4db0ohPVgWLHUGF_Cdd1v33j7ggj375_FTpaizr8gM';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.munchen-beauty.de');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, device, message } = req.body || {};

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Name, phone and email are required' });
  }

  const fullMessage = [
    device ? `Gerät: ${device}` : null,
    message || null,
  ].filter(Boolean).join('\n');

  // 1. Save to Supabase
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/form_submissions`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        message: fullMessage || null,
        page: 'natrix',
        owner: 'Yulia',
      }),
    });
  } catch (e) {
    console.error('Supabase save error:', e);
  }

  // 2. Send email notification via Resend
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Natrix Med Anfrage <onboarding@resend.dev>',
          to: ['Yulachip@icloud.com'],
          subject: `Natrix Med Anfrage: ${device || 'Allgemein'} — ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1a1a2e; border-bottom: 2px solid #C5A572; padding-bottom: 10px;">
                Neue Natrix Med Anfrage
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                  <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 120px;">Name:</td>
                  <td style="padding: 8px 12px;">${name}</td>
                </tr>
                <tr style="background: #f9f9f9;">
                  <td style="padding: 8px 12px; font-weight: bold; color: #555;">Telefon:</td>
                  <td style="padding: 8px 12px;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 12px; font-weight: bold; color: #555;">E-Mail:</td>
                  <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                ${device ? `
                <tr style="background: #f9f9f9;">
                  <td style="padding: 8px 12px; font-weight: bold; color: #555;">Gerät:</td>
                  <td style="padding: 8px 12px; color: #C5A572; font-weight: bold;">${device}</td>
                </tr>` : ''}
                ${message ? `
                <tr>
                  <td style="padding: 8px 12px; font-weight: bold; color: #555;">Nachricht:</td>
                  <td style="padding: 8px 12px;">${message}</td>
                </tr>` : ''}
              </table>
              <p style="margin-top: 20px; color: #999; font-size: 12px;">
                Gesendet von munchen-beauty.de — Natrix Med Kontaktformular
              </p>
            </div>
          `,
        }),
      });
    } catch (e) {
      console.error('Resend email error:', e);
    }
  }

  return res.status(200).json({ success: true });
}
