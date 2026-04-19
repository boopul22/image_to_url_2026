export const prerender = false;

import type { APIRoute } from 'astro';
import { getEnv } from '../../lib/env';
import { getDB } from '../../lib/db';

const EXPIRED_RESPONSE_HEADERS = {
  'Content-Type': 'text/plain',
  'Cache-Control': 'no-store',
};

function nowSqlUtc(): string {
  return new Date().toISOString().replace('T', ' ').slice(0, 19);
}

export const GET: APIRoute = async ({ params, request, locals }) => {
  const path = params.path;
  if (!path) {
    return new Response('Not found', { status: 404 });
  }

  const key = `uploads/${path}`;
  const cache = (caches as unknown as { default: Cache }).default;
  const cacheKey = new Request(new URL(request.url).toString(), { method: 'GET' });

  const cached = await cache.match(cacheKey);
  if (cached) {
    return cached;
  }

  const db = getDB(locals);
  if (db) {
    const row = await db
      .prepare(
        `SELECT expires_at, deleted_at FROM images
         WHERE r2_key = ?`,
      )
      .bind(key)
      .first<{ expires_at: string | null; deleted_at: string | null }>();
    if (row && (row.deleted_at || (row.expires_at && row.expires_at <= nowSqlUtc()))) {
      return new Response('This image has expired.', {
        status: 410,
        headers: EXPIRED_RESPONSE_HEADERS,
      });
    }
  }

  const env = getEnv(locals) as unknown as {
    R2?: R2Bucket;
    R2_BUCKET_NAME: string;
    CLOUDFLARE_ACCOUNT_ID: string;
    R2_ACCESS_KEY_ID: string;
    R2_SECRET_ACCESS_KEY: string;
  };

  let body: ReadableStream | null = null;
  let contentType: string | null = null;
  let contentLength: string | null = null;
  let etag: string | null = null;

  if (env.R2) {
    const obj = await env.R2.get(key);
    if (!obj) {
      return new Response('Not found', { status: 404 });
    }
    body = obj.body;
    contentType = obj.httpMetadata?.contentType ?? null;
    contentLength = obj.size != null ? String(obj.size) : null;
    etag = obj.httpEtag ?? null;
  } else {
    const bucket = env.R2_BUCKET_NAME;
    const accountId = env.CLOUDFLARE_ACCOUNT_ID;
    const accessKeyId = env.R2_ACCESS_KEY_ID;
    const secretAccessKey = env.R2_SECRET_ACCESS_KEY;

    const host = `${bucket}.${accountId}.r2.cloudflarestorage.com`;
    const url = `https://${host}/${key}`;

    const now = new Date();
    const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
    const dateStamp = amzDate.slice(0, 8);
    const region = 'auto';
    const service = 's3';

    const payloadHash = 'UNSIGNED-PAYLOAD';
    const canonicalHeaders = `host:${host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;
    const signedHeaders = 'host;x-amz-content-sha256;x-amz-date';
    const canonicalRequest = `GET\n/${key}\n\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;

    const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;

    const sha256hex = async (data: string): Promise<string> => {
      const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
      return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    };

    const hmac = async (k: ArrayBuffer | Uint8Array, msg: string): Promise<ArrayBuffer> => {
      const imported = await crypto.subtle.importKey('raw', k, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
      return crypto.subtle.sign('HMAC', imported, new TextEncoder().encode(msg));
    };

    const hex = (buf: ArrayBuffer): string =>
      Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');

    const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${await sha256hex(canonicalRequest)}`;

    const kDate = await hmac(new TextEncoder().encode('AWS4' + secretAccessKey), dateStamp);
    const kRegion = await hmac(kDate, region);
    const kService = await hmac(kRegion, service);
    const signingKey = await hmac(kService, 'aws4_request');
    const signature = hex(await hmac(signingKey, stringToSign));

    const authorization = `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

    const r2Res = await fetch(url, {
      headers: {
        'Host': host,
        'x-amz-date': amzDate,
        'x-amz-content-sha256': payloadHash,
        'Authorization': authorization,
      },
    });

    if (!r2Res.ok) {
      return new Response('Not found', { status: 404 });
    }

    body = r2Res.body;
    contentType = r2Res.headers.get('content-type');
    contentLength = r2Res.headers.get('content-length');
    etag = r2Res.headers.get('etag');
  }

  const headers: Record<string, string> = {
    'Content-Type': contentType || 'application/octet-stream',
    'Cache-Control': 'public, max-age=31536000, immutable',
  };
  if (contentLength) headers['Content-Length'] = contentLength;
  if (etag) headers['ETag'] = etag;

  const response = new Response(body, { status: 200, headers });

  const ctx = (locals as unknown as { runtime?: { ctx?: { waitUntil?: (p: Promise<unknown>) => void } } })
    .runtime?.ctx;
  const putPromise = cache.put(cacheKey, response.clone());
  if (ctx?.waitUntil) {
    ctx.waitUntil(putPromise);
  } else {
    // Best-effort: don't block response if waitUntil unavailable
    putPromise.catch(() => {});
  }

  return response;
};
