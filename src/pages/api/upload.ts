export const prerender = false;

import type { APIRoute } from 'astro';
import { uploadToR2 } from '../../lib/r2';
import { getDB } from '../../lib/db';
import { getEnv } from '../../lib/env';
import { resolveExpiresIn } from '../../lib/images/delete';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

function generateId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

function getExtension(mimeType: string): string {
  const map: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/gif': 'gif',
    'image/svg+xml': 'svg',
  };
  return map[mimeType] || 'bin';
}

const ANON_UPLOAD_LIMIT = 5;

function getClientIP(request: Request): string {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    '0.0.0.0'
  );
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Block ALL external API access — only allow requests from our own site
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const allowedOrigins = [
      'https://imagetourl.cloud',
      'http://localhost:4321',
      'http://localhost:3000',
    ];
    const requestOrigin = origin || (referer ? new URL(referer).origin : null);
    if (!requestOrigin || !allowedOrigins.some(o => requestOrigin.startsWith(o))) {
      return new Response(
        JSON.stringify({ error: 'API access is not available. Please use imagetourl.cloud to upload images.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const user = locals.user;
    const db = getDB(locals);

    // Anonymous upload limit check
    if (!user) {
      const ip = getClientIP(request);
      const result = await db
        .prepare('SELECT COUNT(*) as count FROM anonymous_uploads WHERE ip_address = ?')
        .bind(ip)
        .first<{ count: number }>();

      if (result && result.count >= ANON_UPLOAD_LIMIT) {
        return new Response(
          JSON.stringify({
            error: `Upload limit reached. Anonymous users can upload up to ${ANON_UPLOAD_LIMIT} images. Please sign in for unlimited uploads.`,
          }),
          { status: 429, headers: { 'Content-Type': 'application/json' } },
        );
      }
    }

    const formData = await request.formData();
    const file = formData.get('file');
    const expiresInSeconds = resolveExpiresIn(formData.get('expires_in'), !user);

    if (!file || !(file instanceof File)) {
      return new Response(JSON.stringify({ error: 'No file provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return new Response(
        JSON.stringify({
          error: `Unsupported file type: ${file.type}. Allowed: JPG, PNG, WebP, GIF, SVG`,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    if (file.size > MAX_SIZE) {
      return new Response(JSON.stringify({ error: 'File too large. Maximum size is 10MB.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const env = getEnv(locals);
    const accountId = env.CLOUDFLARE_ACCOUNT_ID;
    const accessKeyId = env.R2_ACCESS_KEY_ID;
    const secretAccessKey = env.R2_SECRET_ACCESS_KEY;
    const bucketName = env.R2_BUCKET_NAME;
    const publicUrl = env.R2_PUBLIC_URL;

    if (!accessKeyId || !secretAccessKey) {
      return new Response(JSON.stringify({ error: 'R2 credentials not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const id = generateId();
    const ext = getExtension(file.type);
    // Anonymous uploads go to "anonymous" folder, logged-in to "uploads"
    const folder = user ? 'uploads' : 'anonymous';
    const key = `${folder}/${id}.${ext}`;
    const body = new Uint8Array(await file.arrayBuffer());

    await uploadToR2({
      accountId,
      accessKeyId,
      secretAccessKey,
      bucket: bucketName,
      key,
      body,
      contentType: file.type,
    });

    const imageUrl = publicUrl
      ? `${publicUrl}/${key}`
      : `https://${bucketName}.${accountId}.r2.cloudflarestorage.com/${key}`;

    // Save to D1
    try {
      const uploadedVia = request.headers.get('authorization') ? 'api' : 'web';

      const expiresAtSql =
        expiresInSeconds === null ? null : `datetime('now', '+${expiresInSeconds} seconds')`;

      if (expiresAtSql) {
        await db
          .prepare(
            `INSERT INTO images (id, user_id, r2_key, url, filename, size_bytes, mime_type, uploaded_via, expires_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ${expiresAtSql})`,
          )
          .bind(id, user?.id ?? null, key, imageUrl, file.name, file.size, file.type, uploadedVia)
          .run();
      } else {
        await db
          .prepare(
            `INSERT INTO images (id, user_id, r2_key, url, filename, size_bytes, mime_type, uploaded_via)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          )
          .bind(id, user?.id ?? null, key, imageUrl, file.name, file.size, file.type, uploadedVia)
          .run();
      }

      // Track anonymous upload count
      if (!user) {
        const ip = getClientIP(request);
        await db
          .prepare('INSERT INTO anonymous_uploads (id, ip_address, image_id) VALUES (?, ?, ?)')
          .bind(generateId(), ip, id)
          .run();
      }
    } catch (dbErr: any) {
      console.error('D1 insert error:', dbErr?.message || dbErr);
    }

    const shareUrl = `${new URL(request.url).origin}/i/${id}`;

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          id: `img_${id}`,
          key,
          url: imageUrl,
          shareUrl,
          filename: file.name,
          size: file.size,
          mimetype: file.type,
          created_at: new Date().toISOString(),
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
        },
      },
    );
  } catch (err: any) {
    console.error('Upload error:', err);
    return new Response(
      JSON.stringify({ error: 'Upload failed: ' + (err.message || 'Unknown error') }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
