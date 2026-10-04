import { handleUpload } from '@vercel/blob/client';

const ALLOWED_ORIGINS = new Set([
  'https://www.yinliupdflow.com',
  'https://yinliupdflow.com',
]);

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const origin = request.headers.origin || '';
  if (origin && !ALLOWED_ORIGINS.has(origin) && !origin.endsWith('.vercel.app')) {
    return response.status(403).json({ error: 'Invalid origin' });
  }

  try {
    const body = request.body || await request.json();
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        let payload = {};
        try { payload = JSON.parse(clientPayload || '{}'); } catch {}
        if (!payload.email || !payload.description || payload.consent !== true) {
          throw new Error('Missing sample details');
        }
        if (String(payload.description).length > 3000) {
          throw new Error('Description is too long');
        }
        return {
          allowedContentTypes: ['application/pdf'],
          maximumSizeInBytes: 20 * 1024 * 1024,
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({
            email: String(payload.email).slice(0, 254),
            description: String(payload.description).slice(0, 3000),
            consent: true,
            originalName: String(payload.originalName || pathname).slice(0, 240),
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        console.log('PDflow sample uploaded', blob.pathname, tokenPayload);
      },
    });
    return response.status(200).json(jsonResponse);
  } catch (error) {
    return response.status(400).json({ error: error.message || 'Upload authorization failed' });
  }
}
