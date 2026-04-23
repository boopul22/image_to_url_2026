// One-off backfill: set Cache-Control metadata on every existing object in the
// imagetourl-storage R2 bucket. Uses S3 CopyObject with metadata-directive: REPLACE
// so bodies stay on R2 (no bandwidth, just metadata rewrite).
//
// Usage:
//   DRY_RUN=1 node scripts/backfill-r2-cache-control.mjs        # preview
//   LIMIT=5   node scripts/backfill-r2-cache-control.mjs        # first 5 only
//             node scripts/backfill-r2-cache-control.mjs        # full run
//
// Requires R2_* + CLOUDFLARE_ACCOUNT_ID in .env (already present).

import { readFileSync } from 'node:fs';
import { createHash, createHmac } from 'node:crypto';

// --- load .env (no dep) ---
const envText = readFileSync(new URL('../.env', import.meta.url), 'utf8');
const env = {};
for (const line of envText.split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
  if (!m) continue;
  let v = m[2];
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    v = v.slice(1, -1);
  }
  env[m[1]] = v;
}

const ACCOUNT_ID  = env.CLOUDFLARE_ACCOUNT_ID;
const BUCKET      = env.R2_BUCKET_NAME;
const ACCESS_KEY  = env.R2_ACCESS_KEY_ID;
const SECRET_KEY  = env.R2_SECRET_ACCESS_KEY;
const HOST        = `${BUCKET}.${ACCOUNT_ID}.r2.cloudflarestorage.com`;
const CACHE_CTRL  = 'public, max-age=31536000, immutable';
const DRY_RUN     = process.env.DRY_RUN === '1';
const LIMIT       = process.env.LIMIT ? parseInt(process.env.LIMIT, 10) : Infinity;
const CONCURRENCY = 8;

if (!ACCOUNT_ID || !BUCKET || !ACCESS_KEY || !SECRET_KEY) {
  console.error('Missing R2 credentials in .env');
  process.exit(1);
}

// --- SigV4 helpers ---
const sha256hex = (s) => createHash('sha256').update(s).digest('hex');
const hmac = (k, s) => createHmac('sha256', k).update(s).digest();
function signingKey(secret, date, region, service) {
  const kDate    = hmac('AWS4' + secret, date);
  const kRegion  = hmac(kDate, region);
  const kService = hmac(kRegion, service);
  return hmac(kService, 'aws4_request');
}

function amzNow() {
  const d = new Date();
  const iso = d.toISOString().replace(/[:-]|\.\d{3}/g, '');
  return { amzDate: iso, dateStamp: iso.slice(0, 8) };
}

async function signedFetch({ method, path, query = '', headers = {} }) {
  const { amzDate, dateStamp } = amzNow();
  const region = 'auto';
  const service = 's3';
  const payloadHash = sha256hex('');

  const allHeaders = {
    host: HOST,
    'x-amz-content-sha256': payloadHash,
    'x-amz-date': amzDate,
    ...headers,
  };

  const sortedKeys = Object.keys(allHeaders).map((k) => k.toLowerCase()).sort();
  const canonicalHeaders = sortedKeys
    .map((k) => `${k}:${String(allHeaders[Object.keys(allHeaders).find((h) => h.toLowerCase() === k)]).trim()}`)
    .join('\n') + '\n';
  const signedHeaders = sortedKeys.join(';');

  const canonicalRequest = [
    method,
    path,
    query,
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join('\n');

  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [
    'AWS4-HMAC-SHA256',
    amzDate,
    credentialScope,
    sha256hex(canonicalRequest),
  ].join('\n');

  const sig = hmac(signingKey(SECRET_KEY, dateStamp, region, service), stringToSign).toString('hex');
  const auth = `AWS4-HMAC-SHA256 Credential=${ACCESS_KEY}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${sig}`;

  const url = `https://${HOST}${path}${query ? '?' + query : ''}`;
  const res = await fetch(url, { method, headers: { ...allHeaders, Authorization: auth } });
  return res;
}

// --- List all keys (paginated) ---
// RFC3986-strict encoder (encodeURIComponent leaves !'()* alone; S3 expects them encoded)
function awsEncode(s) {
  return encodeURIComponent(s).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase());
}

function buildQuery(paramsObj) {
  // Sort keys alphabetically, aws-encode both key and value, join with &
  return Object.keys(paramsObj)
    .sort()
    .map((k) => `${awsEncode(k)}=${awsEncode(paramsObj[k])}`)
    .join('&');
}

async function listAllKeys() {
  const keys = [];
  let continuationToken = null;
  let page = 0;
  while (true) {
    page++;
    const paramsObj = { 'list-type': '2', 'max-keys': '1000' };
    if (continuationToken) paramsObj['continuation-token'] = continuationToken;
    const query = buildQuery(paramsObj);
    const res = await signedFetch({ method: 'GET', path: '/', query });
    if (!res.ok) {
      console.error(`LIST page ${page} failed: ${res.status} ${(await res.text()).slice(0, 300)}`);
      process.exit(1);
    }
    const xml = await res.text();
    for (const m of xml.matchAll(/<Key>([^<]+)<\/Key>/g)) keys.push(decodeXmlEntities(m[1]));
    const truncM = xml.match(/<IsTruncated>([^<]+)<\/IsTruncated>/);
    if (truncM && truncM[1].trim() === 'true') {
      const tokM = xml.match(/<NextContinuationToken>([^<]+)<\/NextContinuationToken>/);
      if (!tokM) break;
      continuationToken = decodeXmlEntities(tokM[1]);
      process.stdout.write(`\r  listed ${keys.length} keys (page ${page})...`);
    } else {
      break;
    }
  }
  process.stdout.write(`\r  listed ${keys.length} keys total               \n`);
  return keys;
}

function decodeXmlEntities(s) {
  return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
}

// --- HEAD to read existing content-type (so we don't overwrite it) ---
async function headObject(key) {
  const res = await signedFetch({ method: 'HEAD', path: '/' + encodeURIPath(key) });
  if (!res.ok) return null;
  return {
    contentType: res.headers.get('content-type') || 'application/octet-stream',
    cacheControl: res.headers.get('cache-control') || '',
  };
}

function encodeURIPath(key) {
  return key.split('/').map(encodeURIComponent).join('/');
}

// --- CopyObject (metadata-directive: REPLACE) — rewrites metadata only ---
async function setCacheControl(key, contentType) {
  const copySource = `/${BUCKET}/${encodeURIPath(key)}`;
  const res = await signedFetch({
    method: 'PUT',
    path: '/' + encodeURIPath(key),
    headers: {
      'x-amz-copy-source': copySource,
      'x-amz-metadata-directive': 'REPLACE',
      'cache-control': CACHE_CTRL,
      'content-type': contentType,
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`${res.status}: ${body.slice(0, 200)}`);
  }
}

// --- Main ---
(async () => {
  console.log(`R2 bucket: ${BUCKET}`);
  console.log(`Target Cache-Control: ${CACHE_CTRL}`);
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN (no writes)' : 'LIVE'}${LIMIT !== Infinity ? ` (limit=${LIMIT})` : ''}`);
  console.log('');
  console.log('Listing objects...');
  const allKeys = await listAllKeys();
  const keys = allKeys.slice(0, LIMIT);
  console.log(`Processing ${keys.length} of ${allKeys.length} objects (concurrency=${CONCURRENCY})`);
  console.log('');

  let done = 0, skipped = 0, updated = 0, failed = 0;
  const errors = [];

  async function worker(queue) {
    while (queue.length) {
      const key = queue.shift();
      try {
        const head = await headObject(key);
        if (!head) { skipped++; done++; continue; }
        if (head.cacheControl === CACHE_CTRL) { skipped++; done++; continue; }
        if (!DRY_RUN) {
          await setCacheControl(key, head.contentType);
        }
        updated++;
      } catch (e) {
        failed++;
        errors.push({ key, err: e.message });
      }
      done++;
      if (done % 25 === 0 || done === keys.length) {
        process.stdout.write(`\r  ${done}/${keys.length}  updated=${updated} skipped=${skipped} failed=${failed}   `);
      }
    }
  }

  const queue = [...keys];
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));
  console.log('\n');
  console.log(`Done. updated=${updated} skipped=${skipped} failed=${failed}`);
  if (errors.length) {
    console.log('First 5 errors:');
    for (const e of errors.slice(0, 5)) console.log(`  ${e.key}: ${e.err}`);
  }
})().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
