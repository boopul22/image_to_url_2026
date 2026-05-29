export const prerender = false;

import type { APIRoute } from 'astro';
import { uploadToR2 } from '../../lib/r2';
import { getDB } from '../../lib/db';
import { getEnv } from '../../lib/env';
import { resolveExpiresAt } from '../../lib/images/delete';
import { embedAttribution } from '../../lib/images/metadata';

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

// Daily upload limits. Hosting images costs real money in storage + bandwidth,
// so uploads are capped per rolling 24h window. Guests get a small free
// allowance; signing in raises it. Email CONTACT_EMAIL to request more.
const ANON_DAILY_LIMIT = 5;
const USER_DAILY_LIMIT = 25;
const CONTACT_EMAIL = 'blog.boopul@gmail.com';

function getClientIP(request: Request): string {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    '0.0.0.0'
  );
}

// Human-friendly "resets in ~X" string, derived from the oldest upload still
// inside the 24h window (SQLite stores UTC as 'YYYY-MM-DD HH:MM:SS'). The
// window frees up exactly 24h after that oldest upload.
function formatResetIn(oldestUtc: string | null): string {
  if (!oldestUtc) return 'a little while';
  const oldestMs = new Date(oldestUtc.replace(' ', 'T') + 'Z').getTime();
  if (Number.isNaN(oldestMs)) return 'a little while';
  const diff = oldestMs + 24 * 60 * 60 * 1000 - Date.now();
  if (diff <= 0) return 'a few moments';
  const minutes = Math.ceil(diff / 60000);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'}`;
  const hours = Math.round(minutes / 60);
  return `${hours} hour${hours === 1 ? '' : 's'}`;
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

    // Daily rate limit — a friendly 429 that explains *why* we cap uploads (we
    // pay for storage + bandwidth) and how to get more (sign in, or email us).
    // Counts a rolling 24h window so the allowance trickles back, not all at once.
    if (user) {
      const row = await db
        .prepare(
          `SELECT COUNT(*) as count, MIN(created_at) as oldest
             FROM images
            WHERE user_id = ? AND branded_of IS NULL
              AND created_at >= datetime('now', '-1 day')`,
        )
        .bind(user.id)
        .first<{ count: number; oldest: string | null }>();

      if (row && row.count >= USER_DAILY_LIMIT) {
        const resetIn = formatResetIn(row.oldest);
        return new Response(
          JSON.stringify({
            error:
              `You've reached your daily limit of ${USER_DAILY_LIMIT} uploads. ` +
              `Hosting images costs us real money in storage and bandwidth, so we cap uploads each day to keep imagetourl.cloud free for everyone. ` +
              `Your limit resets in about ${resetIn}. ` +
              `Need a higher limit? Just email us at ${CONTACT_EMAIL} and we'll happily raise it for you.`,
            limit: { scope: 'user', limit: USER_DAILY_LIMIT, resetIn, contactEmail: CONTACT_EMAIL },
          }),
          { status: 429, headers: { 'Content-Type': 'application/json' } },
        );
      }
    } else {
      const ip = getClientIP(request);
      const row = await db
        .prepare(
          `SELECT COUNT(*) as count, MIN(created_at) as oldest
             FROM anonymous_uploads
            WHERE ip_address = ? AND created_at >= datetime('now', '-1 day')`,
        )
        .bind(ip)
        .first<{ count: number; oldest: string | null }>();

      if (row && row.count >= ANON_DAILY_LIMIT) {
        const resetIn = formatResetIn(row.oldest);
        return new Response(
          JSON.stringify({
            error:
              `You've reached your daily limit of ${ANON_DAILY_LIMIT} uploads for guests. ` +
              `Hosting images costs us real money in storage and bandwidth, so we cap free uploads each day to keep imagetourl.cloud free for everyone. ` +
              `Sign in (it's free) to get ${USER_DAILY_LIMIT} uploads per day — or your limit resets in about ${resetIn}. ` +
              `Need even more? Just email us at ${CONTACT_EMAIL}.`,
            limit: { scope: 'anon', limit: ANON_DAILY_LIMIT, resetIn, contactEmail: CONTACT_EMAIL },
          }),
          { status: 429, headers: { 'Content-Type': 'application/json' } },
        );
      }
    }

    const formData = await request.formData();
    const file = formData.get('file');
    const expiresAt = resolveExpiresAt(formData.get('expires_in'), !user);
    // Ad-blocker signal from the client — analytics only, never affects the upload.
    const adblock = formData.get('adblock') === '1' ? 1 : 0;

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
    // Embed imagetourl.cloud attribution metadata (no-op + safe on failure).
    const body = embedAttribution(new Uint8Array(await file.arrayBuffer()), file.type);

    await uploadToR2({
      accountId,
      accessKeyId,
      secretAccessKey,
      bucket: bucketName,
      key,
      body,
      contentType: file.type,
    });

    const reqUrlOrigin = new URL(request.url).origin;
    const siteOrigin = reqUrlOrigin.startsWith('http://localhost')
      ? 'https://imagetourl.cloud'
      : reqUrlOrigin;
    const imageUrl = `${siteOrigin}/${id}.${ext}`;

    // Save to D1
    try {
      const uploadedVia = request.headers.get('authorization') ? 'api' : 'web';

      await db
        .prepare(
          `INSERT INTO images (id, user_id, r2_key, url, filename, size_bytes, mime_type, uploaded_via, adblock, expires_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .bind(id, user?.id ?? null, key, imageUrl, file.name, body.length, file.type, uploadedVia, adblock, expiresAt)
        .run();

      // Track anonymous upload count
      if (!user) {
        const ip = getClientIP(request);
        await db
          .prepare('INSERT INTO anonymous_uploads (id, ip_address, image_id) VALUES (?, ?, ?)')
          .bind(generateId(), ip, id)
          .run();
      }

      // Latest-value-wins ad-blocker rollup for logged-in accounts.
      // (Anonymous uploads are already captured per-row via images.adblock.)
      if (user) {
        await db
          .prepare('UPDATE users SET uses_adblock = ? WHERE id = ?')
          .bind(adblock, user.id)
          .run();
      }
    } catch (dbErr: any) {
      console.error('D1 insert error:', dbErr?.message || dbErr);
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          id: `img_${id}`,
          key,
          url: imageUrl,
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
