import nodemailer from 'nodemailer';
import { get } from '@vercel/blob';
import { Readable } from 'node:stream';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { email, description, pathname, filename, consent } = request.body || {};
  if (!email || !description || !pathname || consent !== true) {
    return response.status(400).json({ error: 'Missing required fields' });
  }
  if (!process.env.QQ_SMTP_AUTH_CODE) {
    return response.status(503).json({ error: 'Email delivery is not configured yet' });
  }

  try {
    const result = await get(pathname, { access: 'private' });
    if (!result || result.statusCode !== 200) {
      return response.status(404).json({ error: 'Uploaded PDF not found' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.QQ_SMTP_USER,
        pass: process.env.QQ_SMTP_AUTH_CODE,
      },
    });

    const safeName = String(filename || 'pdflow-sample.pdf').replace(/[\r\n"]/g, '_').slice(0, 180);
    const safeEmail = String(email).replace(/[\r\n]/g, '').slice(0, 254);
    const safeDescription = String(description).slice(0, 3000);

    await transporter.sendMail({
      from: `PDflow Samples <${process.env.QQ_SMTP_USER}>`,
      to: process.env.SAMPLE_MAIL_TO,
      replyTo: safeEmail,
      subject: `[PDflow sample] ${safeName}`,
      text: `New PDflow difficult-PDF sample\n\nFrom: ${safeEmail}\n\nWhat went wrong:\n${safeDescription}\n\nThe sender confirmed that sensitive information was removed or anonymized.`,
      attachments: [{
        filename: safeName,
        content: Readable.fromWeb(result.stream),
        contentType: 'application/pdf',
      }],
    });

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('PDflow sample email failed', error);
    return response.status(500).json({ error: 'Could not send the sample email' });
  }
}
