export const prerender = false;

import type { APIRoute } from 'astro';
import { deleteFromR2, uploadToR2 } from '../../lib/r2';
import { getDB } from '../../lib/db';
import { getEnv } from '../../lib/env';
import { resolveExpiresAt } from '../../lib/images/delete';
import { embedAttribution } from '../../lib/images/metadata';
import { isSameSiteRequest } from '../../lib/same-origin';
import {
  ANON_DAILY_LIMIT,
  FREE_MAX_UPLOAD_BYTES,
  USER_DAILY_CREDITS,
  USER_TEMPORARY_DAILY_LIMIT,
  USER_PERMANENT_IMAGE_LIMIT,
  USER_PERMANENT_STORAGE_BYTES,
  PRO_PRICING_URL,
  CONTACT_EMAIL,
  getClientIP,
  formatResetIn,
  getPermanentStorageUsage,
  getTemporaryUploadUsage,
  reservePermanentUploadCredit,
  refundPermanentUploadCredit,
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

    // Validate storage configuration before reserving a permanent-upload
    // credit, so an operator error can never consume a user's allowance.
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

    // Upload allowance — a friendly 429 that explains *why* we cap uploads and
    // how to keep going. What costs us money is *permanent* storage, so that's
    // what we meter:
    //   • Signed-in free users get 50 permanent and 500 temporary uploads per 24h.
    //     Permanent files also share a 50-image / 500MB active-storage allowance.
    //   • Guests get a small count-based allowance of temporary uploads keyed by
    //     IP over a rolling 24h window (every guest upload auto-expires).
    // `cost` is computed here so we can also deduct it after a successful upload.
    const isPermanent = !!user && expiresAt === null;
    let creditReserved = false;
    if (user) {
      if (isPermanent) {
        const storage = await getPermanentStorageUsage(db, user.id);
        if (storage.imageRemaining < 1 || storage.byteRemaining < file.size) {
          const reason = storage.imageRemaining < 1 ? 'permanent-image-limit' : 'permanent-storage-limit';
          return new Response(
            JSON.stringify({
              error:
                'Your existing permanent links will keep working, but your free permanent storage is full. ' +
                'Delete an existing permanent image or continue in Pro with unlimited storage.',
              code: 'PRO_STORAGE_REQUIRED',
              upgradeUrl: `${PRO_PRICING_URL}?source=free-upload&reason=${reason}`,
              limit: { scope: 'user', unit: 'storage', ...storage },
            }),
            { status: 429, headers: { 'Content-Type': 'application/json' } },
          );
        }

        const reservation = await reservePermanentUploadCredit(db, user.id);
        if (!reservation.reserved) {
          const resetIn = formatResetIn(reservation.refreshedAt);
          return new Response(
            JSON.stringify({
              error:
                `You've used all ${USER_DAILY_CREDITS} of your permanent ("keep forever") uploads for today. ` +
                `Set this upload to "Auto-delete," delete an existing image, or continue in Pro. ` +
                `Your permanent allowance refills in about ${resetIn}.`,
              code: 'PRO_DAILY_LIMIT',
              upgradeUrl: `${PRO_PRICING_URL}?source=free-upload&reason=permanent-daily-limit`,
              limit: { scope: 'user', unit: 'credits', limit: USER_DAILY_CREDITS, remaining: reservation.remaining, cost: 1, resetIn },
            }),
            { status: 429, headers: { 'Content-Type': 'application/json' } },
          );
        }
        creditReserved = true;
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
              `Sign in free for ${USER_DAILY_CREDITS} permanent uploads and ${USER_TEMPORARY_DAILY_LIMIT} temporary uploads per day — or your guest limit resets in about ${resetIn}.`,
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
      const uploadedVia = request.headers.get('authorization') ? 'api' : 'web';

      if (user && isPermanent) {
        // The earlier usage read gives a fast friendly rejection. This guarded
        // insert is the concurrency backstop, so two simultaneous uploads can
        // never both claim the final free storage slot.
        const result = await db.prepare(
          `INSERT INTO images (id, user_id, r2_key, url, filename, size_bytes, mime_type, uploaded_via, expires_at)
           SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?
            WHERE (
              SELECT COUNT(*) FROM images
               WHERE user_id = ? AND expires_at IS NULL AND deleted_at IS NULL AND branded_of IS NULL
            ) < ?
              AND COALESCE((
                SELECT SUM(size_bytes) FROM images
                 WHERE user_id = ? AND expires_at IS NULL AND deleted_at IS NULL AND branded_of IS NULL
              ), 0) + ? <= ?`,
        )
          .bind(
            id, user.id, key, imageUrl, file.name, body.length, file.type, uploadedVia, expiresAt,
            user.id, USER_PERMANENT_IMAGE_LIMIT,
            user.id, body.length, USER_PERMANENT_STORAGE_BYTES,
          )
          .run();
        if (Number(result.meta.changes ?? 0) < 1) {
          await deleteFromR2({ accountId, accessKeyId, secretAccessKey, bucket: bucketName, key });
          await refundPermanentUploadCredit(db, user.id);
          return new Response(JSON.stringify({
            error: 'Your free permanent storage just reached its limit. Existing links keep working; delete an image or continue in Pro.',
            code: 'PRO_STORAGE_REQUIRED',
            upgradeUrl: `${PRO_PRICING_URL}?source=free-upload&reason=permanent-storage-limit`,
          }), { status: 429, headers: { 'Content-Type': 'application/json' } });
        }
      } else if (!user) {
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
          await deleteFromR2({ accountId, accessKeyId, secretAccessKey, bucket: bucketName, key })
            .catch((error) => console.error('Guest quota cleanup failed', error));
          return new Response(JSON.stringify({
            error: `You've reached your guest limit of ${ANON_DAILY_LIMIT} temporary uploads. Sign in free or try again after the rolling 24-hour window resets.`,
            code: 'GUEST_DAILY_LIMIT',
          }), { status: 429, headers: { 'Content-Type': 'application/json' } });
        }
      } else {
        const result = await db.prepare(
          `INSERT INTO images (id, user_id, r2_key, url, filename, size_bytes, mime_type, uploaded_via, expires_at)
           SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?
            WHERE (
              SELECT COUNT(*) FROM images
               WHERE user_id = ?
                 AND expires_at IS NOT NULL
                 AND deleted_at IS NULL
                 AND branded_of IS NULL
                 AND created_at >= datetime('now', '-1 day')
            ) < ?`,
        )
          .bind(
            id, user.id, key, imageUrl, file.name, body.length, file.type, uploadedVia, expiresAt,
            user.id, USER_TEMPORARY_DAILY_LIMIT,
          )
          .run();
        if (Number(result.meta.changes ?? 0) < 1) {
          await deleteFromR2({ accountId, accessKeyId, secretAccessKey, bucket: bucketName, key })
            .catch((error) => console.error('Temporary quota cleanup failed', error));
          return new Response(JSON.stringify({
            error: `You've used all ${USER_TEMPORARY_DAILY_LIMIT} temporary uploads for this 24-hour window. Continue in Pro or try again later.`,
            code: 'PRO_TEMPORARY_LIMIT',
            upgradeUrl: `${PRO_PRICING_URL}?source=free-upload&reason=temporary-daily-limit`,
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
      await deleteFromR2({ accountId, accessKeyId, secretAccessKey, bucket: bucketName, key }).catch(() => {});
      if (creditReserved && user) await refundPermanentUploadCredit(db, user.id).catch(() => {});
      throw storageError;
    }
  } catch (err: any) {
    console.error('Upload error:', err);
    return new Response(
      JSON.stringify({ error: 'Upload failed: ' + (err.message || 'Unknown error') }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
