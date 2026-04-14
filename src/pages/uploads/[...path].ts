export const prerender = false;

import type { APIRoute } from 'astro';
import { getEnv } from '../../lib/env';
import { getDB } from '../../lib/db';

export const GET: APIRoute = async ({ params, locals }) => {
  const path = params.path;
  if (!path) {
    return new Response('Not found', { status: 404 });
  }

  const db = getDB(locals);
  if (db) {
    const row = await db
      .prepare(
        `SELECT expires_at, deleted_at FROM images
         WHERE r2_key = ?`,
      )
      .bind(`uploads/${path}`)
      .first<{ expires_at: string | null; deleted_at: string | null }>();
    if (row && (row.deleted_at || (row.expires_at && row.expires_at <= new Date().toISOString().replace('T', ' ').slice(0, 19)))) {
      return new Response('This image has expired.', {
        status: 410,
        headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' },
      });
    }
  }

  const env = getEnv(locals);
  const bucket = env.R2_BUCKET_NAME;
  const accountId = env.CLOUDFLARE_ACCOUNT_ID;
  const accessKeyId = env.R2_ACCESS_KEY_ID;
  const secretAccessKey = env.R2_SECRET_ACCESS_KEY;

  const key = `uploads/${path}`;
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

  async function sha256hex(data: string): Promise<string> {
    const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function hmac(key: ArrayBuffer, msg: string): Promise<ArrayBuffer> {
    const k = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    return crypto.subtle.sign('HMAC', k, new TextEncoder().encode(msg));
  }

  function hex(buf: ArrayBuffer): string {
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

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

  return new Response(r2Res.body, {
    status: 200,
    headers: {
      'Content-Type': r2Res.headers.get('content-type') || 'application/octet-stream',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Length': r2Res.headers.get('content-length') || '',
    },
  });
};
