export const prerender = false;

import type { APIRoute } from 'astro';
import { deleteFromR2, uploadToR2 } from '../../lib/r2';
import { getDB } from '../../lib/db';
import { resolveExpiresAt } from '../../lib/images/delete';
import { embedAttribution } from '../../lib/images/metadata';
import { isSameSiteRequest } from '../../lib/same-origin';
import {
  ANON_DAILY_LIMIT,
  FREE_MAX_UPLOAD_BYTES,
  USER_PERMANENT_DAILY_LIMIT,
  USER_TEMPORARY_DAILY_LIMIT,
  PRO_PRICING_URL,
  CONTACT_EMAIL,
  getClientIP,
  formatResetIn,
  getUserUploadUsage,
  getTemporaryUploadUsage,
} from '../../lib/upload-limits';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml', 'audio/mpeg', 'audio/mp3'];
const MAX_SIZE = FREE_MAX_UPLOAD_BYTES;
const MAX_SIZE_LABEL = '10MB';

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
      return new Response(JSON.stringify({
        error: `This file is larger than the free ${MAX_SIZE_LABEL} limit. ImageToURL Pro supports images up to 64MB.`,
        code: 'PRO_FILE_SIZE',
        upgradeUrl: `${PRO_PRICING_URL}?source=free-upload&reason=file-size`,
      }), {
        status: 413,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Upload allowance — a friendly 429 that explains *why* we cap uploads and
    // how to keep going. What costs us money is *permanent* storage, so that's
    // what we meter:
    //   • Signed-in free users get 50 permanent and 500 temporary uploads per 24h.
    //   • Guests get a small count-based allowance of temporary uploads keyed by
    //     IP over a rolling 24h window (every guest upload auto-expires).
    const isPermanent = !!user && expiresAt === null;
    if (user) {
      if (isPermanent) {
        const permanent = await getUserUploadUsage(db, user.id, 'permanent');
        if (permanent.remaining < 1) {
          return new Response(
            JSON.stringify({
              error:
                `You've used all ${USER_PERMANENT_DAILY_LIMIT} of your permanent ("keep forever") uploads for today. ` +
                `Set this upload to "Auto-delete" or continue in Pro. ` +
                `One slot becomes available in about ${permanent.resetIn}.`,
              code: 'PRO_DAILY_LIMIT',
              upgradeUrl: `${PRO_PRICING_URL}?source=free-upload&reason=permanent-daily-limit`,
              limit: { scope: 'user', unit: 'uploads', ...permanent },
            }),
            { status: 429, headers: { 'Content-Type': 'application/json' } },
          );
        }
      } else {
        const temporary = await getTemporaryUploadUsage(db, user.id);
        if (temporary.remaining < 1) {
          return new Response(
            JSON.stringify({
              error:
                `You've used all ${USER_TEMPORARY_DAILY_LIMIT} temporary uploads for this 24-hour window. ` +
                `Continue in Pro for unlimited image storage and upload count, or try again in about ${temporary.resetIn}.`,
              code: 'PRO_TEMPORARY_LIMIT',
              upgradeUrl: `${PRO_PRICING_URL}?source=free-upload&reason=temporary-daily-limit`,
              limit: { scope: 'user', unit: 'temporary', ...temporary },
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
              `Sign in free for ${USER_PERMANENT_DAILY_LIMIT} permanent uploads and ${USER_TEMPORARY_DAILY_LIMIT} temporary uploads per day — or your guest limit resets in about ${resetIn}.`,
            limit: { scope: 'anon', unit: 'uploads', limit: ANON_DAILY_LIMIT, resetIn, contactEmail: CONTACT_EMAIL },
          }),
          { status: 429, headers: { 'Content-Type': 'application/json' } },
        );
      }
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

    try {
      await uploadToR2({
        key,
        body,
        contentType: file.type,
      });

      const reqUrlOrigin = new URL(request.url).origin;
      const siteOrigin = reqUrlOrigin.startsWith('http://localhost')
        ? 'https://imagetourl.cloud'
        : reqUrlOrigin.replace('://www.', '://'); // canonical apex, never www
      const imageUrl = `${siteOrigin}/${id}.${ext}`;
      const uploadedVia = request.headers.get('authorization') ? 'api' : 'web';

      if (user) {
        const kind = isPermanent ? 'permanent' : 'temporary';
        const limit = isPermanent ? USER_PERMANENT_DAILY_LIMIT : USER_TEMPORARY_DAILY_LIMIT;
        const eventId = generateId();
        const results = await db.batch([
          db.prepare(
            `INSERT INTO user_upload_events (id, user_id, image_id, kind)
             SELECT ?, ?, ?, ?
              WHERE (
                SELECT COUNT(*) FROM user_upload_events
                 WHERE user_id = ? AND kind = ?
                   AND created_at >= datetime('now', '-1 day')
              ) < ?`,
          ).bind(eventId, user.id, id, kind, user.id, kind, limit),
          db.prepare(
            `INSERT INTO images (id, user_id, r2_key, url, filename, size_bytes, mime_type, uploaded_via, expires_at)
             SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?
              WHERE EXISTS (SELECT 1 FROM user_upload_events WHERE image_id = ?)`,
          ).bind(id, user.id, key, imageUrl, file.name, body.length, file.type, uploadedVia, expiresAt, id),
        ]);
        if (Number(results[0]?.meta.changes ?? 0) < 1 || Number(results[1]?.meta.changes ?? 0) < 1) {
          await deleteFromR2({ key }).catch((error) => console.error('User quota cleanup failed', error));
          return new Response(JSON.stringify({
            error: isPermanent
              ? `You've used all ${USER_PERMANENT_DAILY_LIMIT} permanent uploads in the current rolling 24-hour window.`
              : `You've used all ${USER_TEMPORARY_DAILY_LIMIT} temporary uploads in the current rolling 24-hour window.`,
            code: isPermanent ? 'PRO_DAILY_LIMIT' : 'PRO_TEMPORARY_LIMIT',
            upgradeUrl: `${PRO_PRICING_URL}?source=free-upload&reason=${isPermanent ? 'permanent' : 'temporary'}-daily-limit`,
          }), { status: 429, headers: { 'Content-Type': 'application/json' } });
        }
      } else {
        const ip = getClientIP(request);
        const results = await db.batch([
          db.prepare(
            `INSERT INTO images (id, user_id, r2_key, url, filename, size_bytes, mime_type, uploaded_via, expires_at)
             SELECT ?, NULL, ?, ?, ?, ?, ?, ?, ?
              WHERE (
                SELECT COUNT(*) FROM anonymous_uploads
                 WHERE ip_address = ? AND created_at >= datetime('now', '-1 day')
              ) < ?`,
          ).bind(
            id, key, imageUrl, file.name, body.length, file.type, uploadedVia, expiresAt,
            ip, ANON_DAILY_LIMIT,
          ),
          db.prepare(
            `INSERT INTO anonymous_uploads (id, ip_address, image_id)
             SELECT ?, ?, ? WHERE EXISTS (SELECT 1 FROM images WHERE id = ?)`,
          ).bind(generateId(), ip, id, id),
        ]);
        if (Number(results[0]?.meta.changes ?? 0) < 1) {
          await deleteFromR2({ key })
            .catch((error) => console.error('Guest quota cleanup failed', error));
          return new Response(JSON.stringify({
            error: `You've reached your guest limit of ${ANON_DAILY_LIMIT} temporary uploads. Sign in free or try again after the rolling 24-hour window resets.`,
            code: 'GUEST_DAILY_LIMIT',
          }), { status: 429, headers: { 'Content-Type': 'application/json' } });
        }
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
    } catch (storageError) {
      await deleteFromR2({ key }).catch(() => {});
      throw storageError;
    }
  } catch (err: any) {
    console.error('Upload error:', err);
    return new Response(
      JSON.stringify({ error: 'Upload failed. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
