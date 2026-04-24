export const prerender = false;

import type { APIRoute } from 'astro';
import { getEnv } from '../../lib/env';

// On-the-fly image transform proxy backed by the Cloudflare IMAGES binding.
// Reads the source from R2 (imagetourl-storage), resizes/re-encodes,
// caches the result on the Cloudflare edge for 1 year.
//
// URL: /img/<r2-key>?w=<width>&f=<webp|avif|jpeg|png>&q=<quality>
// Example: /img/cms/blog/OPVnzfkz8re8RBUBaQYWr.jpg?w=616&f=webp

const ALLOWED_WIDTHS = new Set([96, 160, 200, 308, 400, 616, 800, 1200, 1600]);
const ALLOWED_FORMATS: Record<string, 'image/webp' | 'image/avif' | 'image/jpeg' | 'image/png'> = {
  webp: 'image/webp',
  avif: 'image/avif',
  jpeg: 'image/jpeg',
  jpg:  'image/jpeg',
  png:  'image/png',
};

export const GET: APIRoute = async (ctx) => {
  try {
    return await handle(ctx);
  } catch (e) {
    console.error('[img] unhandled', e);
    return new Response('image transform failed', {
      status: 500,
      headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' },
    });
  }
};

const handle: APIRoute = async ({ params, url, locals }) => {
  const key = params.path;
  if (!key) return new Response('bad key', { status: 400 });

  const widthStr = url.searchParams.get('w');
  const formatStr = (url.searchParams.get('f') || 'webp').toLowerCase();
  const qualityStr = url.searchParams.get('q');

  const width = widthStr ? parseInt(widthStr, 10) : 0;
  if (!width || !ALLOWED_WIDTHS.has(width)) {
    return new Response('width must be one of ' + [...ALLOWED_WIDTHS].join(','), { status: 400 });
  }
  const format = ALLOWED_FORMATS[formatStr];
  if (!format) return new Response('unsupported format', { status: 400 });
  const quality = qualityStr ? Math.max(1, Math.min(100, parseInt(qualityStr, 10))) : 80;

  // Edge cache: full URL including query string is the cache key.
  const cache = (caches as unknown as { default: Cache }).default;
  const cacheKey = new Request(url.toString(), { method: 'GET' });
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const env = getEnv(locals) as unknown as { R2: R2Bucket; IMAGES: ImagesBinding };
  const errHeaders = { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' };
  if (!env.R2) return new Response('no R2 binding', { status: 500, headers: errHeaders });
  if (!env.IMAGES) return new Response('no IMAGES binding', { status: 500, headers: errHeaders });

  let obj;
  try {
    obj = await env.R2.get(key);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response('r2 get failed: ' + msg, { status: 500, headers: errHeaders });
  }
  if (!obj) return new Response('not found: ' + key, { status: 404, headers: errHeaders });

  let transformed;
  try {
    transformed = await env.IMAGES.input(obj.body)
      .transform({ width })
      .output({ format, quality });
  } catch (e) {
    // Source object exists but is unreadable (corrupt, zero-byte, unsupported
    // format). Return 404 not 500 — 5xx pollutes the browser console errors
    // audit; the client handling is identical (broken-image fallback).
    const msg = e instanceof Error ? e.message : String(e);
    return new Response('transform failed: ' + msg, { status: 404, headers: errHeaders });
  }

  const response = transformed.response();
  // Attach long-term cache + helpful headers before putting on the edge.
  const headers = new Headers(response.headers);
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  headers.set('Content-Type', format);
  headers.set('Vary', 'Accept');
  const out = new Response(response.body, { status: 200, headers });

  const cfCtx = (locals as unknown as { cfContext?: { waitUntil?: (p: Promise<unknown>) => void } }).cfContext;
  const put = cache.put(cacheKey, out.clone());
  if (cfCtx?.waitUntil) cfCtx.waitUntil(put); else put.catch(() => {});

  return out;
};
