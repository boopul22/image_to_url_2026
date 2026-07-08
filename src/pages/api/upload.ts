export const prerender = false;

import type { APIRoute } from 'astro';
import { uploadToR2 } from '../../lib/r2';
import { getDB } from '../../lib/db';
import { getEnv } from '../../lib/env';
import { resolveExpiresAt } from '../../lib/images/delete';
import { embedAttribution } from '../../lib/images/metadata';
import { isSameSiteRequest } from '../../lib/same-origin';
import {
  ANON_DAILY_LIMIT,
  USER_DAILY_CREDITS,
  CONTACT_EMAIL,
  getClientIP,
  formatResetIn,
  creditCost,
  getUserCredits,
} from '../../lib/upload-limits';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml', 'audio/mpeg', 'audio/mp3'];
const MAX_SIZE = 50 * 1024 * 1024; // 50MB
const MAX_SIZE_LABEL = '50MB';

// Attribution embedding (embedAttribution) copies the whole file buffer, so on a
// big upload it doubles peak memory. Workers cap at 128 MB, so above this size we
// skip the metadata pass and store the raw bytes — attribution is best-effort and
// must never be the reason a large upload OOMs.
const ATTRIBUTION_MAX_SIZE = 20 * 1024 * 1024; // 20MB

// MIME types we treat as audio. These go to a dedicated "mp3/" prefix in the
// same R2 bucket instead of the image folders.
const AUDIO_TYPES = ['audio/mpeg', 'audio/mp3'];

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
    'audio/mpeg': 'mp3',
    'audio/mp3': 'mp3',
  };
  return map[mimeType] || 'bin';
}

// Daily upload limits + helpers now live in ../../lib/upload-limits.ts so the
// enforcer (below) and the quota reporter (/api/me) share one source of truth.

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Block external API access — only allow requests a browser makes from our
    // own site (apex + www + localhost). See lib/same-origin.ts.
    if (!isSameSiteRequest(request)) {
      return new Response(
        JSON.stringify({ error: 'API access is not available. Please use imagetourl.cloud to upload images.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const user = locals.user;
    const db = getDB(locals);

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
          error: `Unsupported file type: ${file.type}. Allowed: JPG, PNG, WebP, GIF, SVG, MP3`,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    if (file.size > MAX_SIZE) {
      return new Response(JSON.stringify({ error: `File too large. Maximum size is ${MAX_SIZE_LABEL}.` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Upload allowance — a friendly 429 that explains *why* we cap uploads and
    // how to keep going. What costs us money is *permanent* storage, so that's
    // what we meter:
    //   • Signed-in users spend one credit per PERMANENT ("keep forever") upload
    //     (50/day, refilled every 24h). Temporary/auto-expiring uploads are free
    //     and unlimited — so we only check/charge credits when expires_at is null.
    //   • Guests get a small count-based allowance of temporary uploads keyed by
    //     IP over a rolling 24h window (every guest upload auto-expires).
    // `cost` is computed here so we can also deduct it after a successful upload.
    const isPermanent = !!user && expiresAt === null;
    const cost = creditCost(isPermanent);
    if (user) {
      // Temporary uploads never touch the allowance — let them straight through.
      if (isPermanent) {
        const { credits, refreshedAt } = await getUserCredits(db, user.id);
        if (credits < cost) {
          const resetIn = formatResetIn(refreshedAt);
          return new Response(
            JSON.stringify({
              error:
                `You've used all ${USER_DAILY_CREDITS} of your permanent ("keep forever") uploads for today. ` +
                `Set this upload's expiry to "Auto-delete" instead and it won't count against your limit — temporary uploads are always free and unlimited. ` +
                `Your permanent allowance refills in about ${resetIn}. Need a higher limit? Just email us at ${CONTACT_EMAIL} and we'll happily raise it for you.`,
              limit: { scope: 'user', unit: 'credits', limit: USER_DAILY_CREDITS, remaining: credits, cost, resetIn, contactEmail: CONTACT_EMAIL },
            }),
            { status: 429, headers: { 'Content-Type': 'application/json' } },
          );
        }
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
              `You've reached your guest limit of ${ANON_DAILY_LIMIT} temporary uploads. ` +
              `Guest uploads are temporary and auto-delete on their own. ` +
              `Sign in (it's free) to get ${USER_DAILY_CREDITS} permanent uploads a day plus unlimited temporary ones — or your limit resets in about ${resetIn}. ` +
              `Need even more? Just email us at ${CONTACT_EMAIL}.`,
            limit: { scope: 'anon', unit: 'uploads', limit: ANON_DAILY_LIMIT, resetIn, contactEmail: CONTACT_EMAIL },
          }),
          { status: 429, headers: { 'Content-Type': 'application/json' } },
        );
      }
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
    // MP3s land in their own "mp3/" prefix (same bucket). Images keep the
    // existing split: anonymous uploads → "anonymous", logged-in → "uploads".
    // The short-URL handler resolves the object by r2_key, so the prefix is
    // transparent to serving.
    const folder = AUDIO_TYPES.includes(file.type) ? 'mp3' : user ? 'uploads' : 'anonymous';
    const key = `${folder}/${id}.${ext}`;
    // Embed imagetourl.cloud attribution metadata (no-op + safe on failure).
    // Skip it for very large files — the metadata pass copies the whole buffer,
    // and doubling a 50 MB upload risks the Worker's 128 MB memory ceiling.
    const raw = new Uint8Array(await file.arrayBuffer());
    const body = raw.length <= ATTRIBUTION_MAX_SIZE ? embedAttribution(raw, file.type) : raw;

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
      : reqUrlOrigin.replace('://www.', '://'); // canonical apex, never www
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

      // Deduct the upload's credits and roll up the ad-blocker signal in one
      // write. `cost` is 0 for temporary uploads (they're free), so only a
      // permanent "keep forever" upload actually decrements the balance. MAX(0, …)
      // guards the rare concurrent-bulk race (the balance was already checked
      // >= cost above; getUserCredits applied any lazy refill). Anonymous uploads
      // are captured per-row via images.adblock instead.
      if (user) {
        await db
          .prepare('UPDATE users SET uses_adblock = ?, credits = MAX(0, credits - ?) WHERE id = ?')
          .bind(adblock, cost, user.id)
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
