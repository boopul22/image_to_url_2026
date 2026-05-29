export const prerender = false;

import type { APIRoute } from 'astro';
import { uploadToR2 } from '../../lib/r2';
import { getDB } from '../../lib/db';
import { getEnv } from '../../lib/env';

// Stores a "branded" copy of an already-uploaded image — the /share page draws a
// white "imagetourl.cloud" strip on top of the original (client-side canvas) and
// POSTs the result here. We persist it like any other image (R2 + an images row)
// so the existing short-URL serving + expiry cron handle it for free, and link it
// to the original via branded_of so repeat visits reuse it instead of piling up.

const ID_RE = /^[a-z0-9]{8}$/;
const MAX_SIZE = 15 * 1024 * 1024; // branded PNG can be larger than the 10MB source

function generateId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Same-origin only — this is an internal helper for the share page, not a
    // public API (mirrors the guard in api/upload.ts).
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const allowedOrigins = [
      'https://imagetourl.cloud',
      'http://localhost:4321',
      'http://localhost:3000',
    ];
    const requestOrigin = origin || (referer ? new URL(referer).origin : null);
    if (!requestOrigin || !allowedOrigins.some((o) => requestOrigin.startsWith(o))) {
      return json({ error: 'Not available.' }, 403);
    }

    const db = getDB(locals);
    const user = locals.user;

    const formData = await request.formData();
    const file = formData.get('file');
    const originalId = String(formData.get('original_id') || '');

    if (!ID_RE.test(originalId)) {
      return json({ error: 'Invalid original_id' }, 400);
    }
    if (!file || !(file instanceof File)) {
      return json({ error: 'No file provided' }, 400);
    }
    if (file.type !== 'image/png') {
      return json({ error: 'Branded image must be PNG' }, 400);
    }
    if (file.size > MAX_SIZE) {
      return json({ error: 'Branded image too large' }, 400);
    }

    // The original must exist and still be live; inherit its expiry so the
    // branded variant disappears together with it.
    const original = await db
      .prepare('SELECT expires_at, deleted_at FROM images WHERE id = ?')
      .bind(originalId)
      .first<{ expires_at: string | null; deleted_at: string | null }>();

    if (!original) return json({ error: 'Original image not found' }, 404);
    if (original.deleted_at) return json({ error: 'Original image is gone' }, 410);

    const reqUrlOrigin = new URL(request.url).origin;
    const siteOrigin = reqUrlOrigin.startsWith('http://localhost')
      ? 'https://imagetourl.cloud'
      : reqUrlOrigin;

    // Dedupe: reuse an existing branded variant for this original if we have one.
    const existing = await db
      .prepare('SELECT url FROM images WHERE branded_of = ? AND deleted_at IS NULL LIMIT 1')
      .bind(originalId)
      .first<{ url: string }>();
    if (existing?.url) {
      return json({ success: true, data: { url: existing.url } });
    }

    const env = getEnv(locals);
    const accountId = env.CLOUDFLARE_ACCOUNT_ID;
    const accessKeyId = env.R2_ACCESS_KEY_ID;
    const secretAccessKey = env.R2_SECRET_ACCESS_KEY;
    const bucketName = env.R2_BUCKET_NAME;
    if (!accessKeyId || !secretAccessKey) {
      return json({ error: 'R2 credentials not configured' }, 500);
    }

    const id = generateId();
    const key = `branded/${id}.png`;
    const body = new Uint8Array(await file.arrayBuffer());

    await uploadToR2({
      accountId,
      accessKeyId,
      secretAccessKey,
      bucket: bucketName,
      key,
      body,
      contentType: 'image/png',
    });

    const imageUrl = `${siteOrigin}/${id}.png`;

    try {
      await db
        .prepare(
          `INSERT INTO images (id, user_id, r2_key, url, filename, size_bytes, mime_type, uploaded_via, adblock, branded_of, expires_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, 'brand', 0, ?, ?)`,
        )
        .bind(
          id,
          user?.id ?? null,
          key,
          imageUrl,
          `branded-${originalId}.png`,
          file.size,
          'image/png',
          originalId,
          original.expires_at ?? null,
        )
        .run();
    } catch (dbErr: any) {
      console.error('brand-image D1 insert error:', dbErr?.message || dbErr);
      // The object is in R2; still hand back the URL so the share page works.
    }

    return json({ success: true, data: { url: imageUrl } });
  } catch (err: any) {
    console.error('brand-image error:', err);
    return json({ error: 'Branding failed: ' + (err?.message || 'Unknown error') }, 500);
  }
};
