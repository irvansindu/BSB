import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL || 'no-reply@bsbcity.local';

if (!resendApiKey) {
  console.warn('RESEND_API_KEY is not set. Contact form emails will not be sent.');
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Nama, email, dan pesan wajib diisi.' },
        { status: 400 }
      );
    }

    if (!resend || !contactToEmail) {
      return NextResponse.json(
        { success: false, error: 'Layanan email belum dikonfigurasi dengan benar.' },
        { status: 500 }
      );
    }

    const subject = `Pesan baru dari website BSB City - ${name}`;

    const lines = [
      `Nama: ${name}`,
      `Email: ${email}`,
      phone ? `Telepon/WhatsApp: ${phone}` : null,
      '',
      'Pesan:',
      message,
    ].filter(Boolean) as string[];

    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      subject,
      text: lines.join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error', error);
    return NextResponse.json(
      { success: false, error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.' },
      { status: 500 }
    );
  }
}
