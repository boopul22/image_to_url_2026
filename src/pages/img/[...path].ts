export const prerender = false;

import type { APIRoute } from 'astro';
import { getEnv } from '../../lib/env';

// On-the-fly image transform proxy backed by the Cloudflare IMAGES binding.
// Reads the source from R2, resizes/re-encodes via the IMAGES binding, and
// caches the generated variant briefly at the Cloudflare edge.
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

type ImageEnv = {
  R2?: R2Bucket;
  IMAGES?: ImagesBinding;
  R2_BUCKET_NAME: string;
  CLOUDFLARE_ACCOUNT_ID: string;
  R2_ACCESS_KEY_ID: string;
  R2_SECRET_ACCESS_KEY: string;
};

async function hmac(key: BufferSource, message: string): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(message));
}

async function sha256(data: string): Promise<string> {
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
  return hex(hash);
}

function hex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function getSignatureKey(secretKey: string, dateStamp: string): Promise<ArrayBuffer> {
  const kDate = await hmac(new TextEncoder().encode('AWS4' + secretKey), dateStamp);
  const kRegion = await hmac(kDate, 'auto');
  const kService = await hmac(kRegion, 's3');
  return hmac(kService, 'aws4_request');
}

async function getFromR2S3(env: ImageEnv, key: string): Promise<Response> {
  const bucket = env.R2_BUCKET_NAME;
  const accountId = env.CLOUDFLARE_ACCOUNT_ID;
  const accessKeyId = env.R2_ACCESS_KEY_ID;
  const secretAccessKey = env.R2_SECRET_ACCESS_KEY;

  if (!bucket || !accountId || !accessKeyId || !secretAccessKey) {
    throw new Error('R2 S3 credentials are not configured');
  }

  const host = `${bucket}.${accountId}.r2.cloudflarestorage.com`;
  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
  const dateStamp = amzDate.slice(0, 8);
  const payloadHash = 'UNSIGNED-PAYLOAD';
  const canonicalHeaders = `host:${host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;
  const signedHeaders = 'host;x-amz-content-sha256;x-amz-date';
  const canonicalRequest = `GET\n/${key}\n\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;
  const credentialScope = `${dateStamp}/auto/s3/aws4_request`;
  const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${await sha256(canonicalRequest)}`;
  const signingKey = await getSignatureKey(secretAccessKey, dateStamp);
  const signature = hex(await hmac(signingKey, stringToSign));
  const authorization = `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  return fetch(`https://${host}/${key}`, {
    headers: {
      Host: host,
      'x-amz-date': amzDate,
      'x-amz-content-sha256': payloadHash,
      Authorization: authorization,
    },
  });
}

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

  // Edge cache: canonicalized URL including only transform parameters.
  // No Vary header — the output format is explicit in the URL (?f=webp),
  // so the Accept header is irrelevant. Removing Vary prevents cache
  // fragmentation (each browser Accept variant creating separate entries)
  // which caused premature evictions on the Free plan.
  const cache = (caches as unknown as { default: Cache }).default;
  const canonicalUrl = new URL(url);
  canonicalUrl.search = '';
  canonicalUrl.searchParams.set('w', String(width));
  canonicalUrl.searchParams.set('f', formatStr);
  canonicalUrl.searchParams.set('q', String(quality));
  const cacheKey = new Request(canonicalUrl.toString(), { method: 'GET' });
  const cached = await cache.match(cacheKey);
  if (cached) {
    const headers = new Headers(cached.headers);
    headers.set('X-Image-Cache', 'HIT');
    return new Response(cached.body, { status: cached.status, headers });
  }

  const env = getEnv(locals) as unknown as ImageEnv;
  const errHeaders = { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' };
  if (!env.IMAGES) return new Response('no IMAGES binding', { status: 500, headers: errHeaders });

  let sourceBody: ReadableStream | null = null;
  let source = 'r2-binding';

  if (env.R2) {
    const obj = await env.R2.get(key);
    if (obj?.body) sourceBody = obj.body;
  }

  if (!sourceBody) {
    source = 'r2-s3';
    let r2Res;
    try {
      r2Res = await getFromR2S3(env, key);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      return new Response('r2 fetch failed: ' + msg, { status: 502, headers: errHeaders });
    }
    if (!r2Res.ok || !r2Res.body) {
      return new Response('not found: ' + key, { status: 404, headers: errHeaders });
    }
    sourceBody = r2Res.body;
  }

  if (!sourceBody) {
    return new Response('not found: ' + key, { status: 404, headers: errHeaders });
  }

  let transformed;
  try {
    transformed = await env.IMAGES.input(sourceBody)
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
  const headers = new Headers(response.headers);
  headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
  headers.set('Content-Type', format);
  headers.set('X-Image-Cache', 'MISS');
  headers.set('X-Image-Source', source);
  const out = new Response(response.body, { status: 200, headers });

  const cfCtx = (locals as unknown as { cfContext?: { waitUntil?: (p: Promise<unknown>) => void } }).cfContext;
  const put = cache.put(cacheKey, out.clone());
  if (cfCtx?.waitUntil) cfCtx.waitUntil(put); else put.catch(() => {});

  return out;
};
