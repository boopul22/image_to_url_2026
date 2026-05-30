export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../lib/db';
import { isSameSiteRequest } from '../../lib/same-origin';

// Records a share-page copy event: which variant (watermarked vs clean) and format
// the visitor copied. Fired via navigator.sendBeacon from share.astro, so the body
// is a text/plain JSON string (a CORS-safelisted content type — no preflight, works
// reliably with sendBeacon). We never read the response back; just store and return
// 204. This is the ONLY place the watermark-vs-clean *choice* is captured.

const ID_RE = /^[a-z0-9]{8}$/;
const VARIANTS = new Set(['branded', 'clean']);
const FORMATS = new Set(['url', 'markdown', 'html', 'bbcode', 'qr']);

export const POST: APIRoute = async ({ request, locals }) => {
  // Same-origin only — internal analytics helper, not a public API.
  if (!isSameSiteRequest(request)) {
    return new Response(null, { status: 403 });
  }

  try {
    const raw = await request.text();
    const body = JSON.parse(raw || '{}') as {
      variant?: unknown;
      format?: unknown;
      imageId?: unknown;
    };

    const variant = String(body.variant ?? '');
    const format = String(body.format ?? '');
    if (!VARIANTS.has(variant) || !FORMATS.has(format)) {
      return new Response(null, { status: 400 });
    }

    const imageId = typeof body.imageId === 'string' && ID_RE.test(body.imageId) ? body.imageId : null;

    const db = getDB(locals);
    await db
      .prepare('INSERT INTO copy_events (image_id, variant, format) VALUES (?, ?, ?)')
      .bind(imageId, variant, format)
      .run();
  } catch {
    // Best-effort analytics — never surface errors to the page.
  }

  // 204 regardless: sendBeacon ignores the response, and we don't want a failed
  // insert to look like a broken copy to the user.
  return new Response(null, { status: 204 });
};
