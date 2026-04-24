#!/usr/bin/env node
// Post-build: inject a cross-locale redirect check into the Astro worker
// entry. Astro's router returns null for paths whose pattern matches a
// prerendered route but whose specific param combo isn't in getStaticPaths,
// and it does NOT fall back to less-specific routes. That means middleware
// never runs for cross-locale polluted URLs (e.g. /ar/<farsi-slug>/), so the
// 301 redirect in middleware.ts never fires.
//
// This script patches the worker entry to check cross-locale slugs BEFORE
// app.match runs. Safe to re-run on every build.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const SLUGS_FILE = new URL('../src/i18n/landing/slugs.ts', import.meta.url);
const CHUNKS_DIR = new URL('../dist/server/chunks/', import.meta.url);
const LOCALES = ['en','hi','es','fr','de','ja','zh-Hans','id','vi','pt-BR','tr','tl','pl','nl','it','ar','bn','fa','ur','ru','th','ko','sw','ms','ta','mr','te','zh-Hant'];

// Parse SLUGS from slugs.ts — extract each pageKey's locale→slug map.
const src = readFileSync(SLUGS_FILE, 'utf8');
const owner = new Map(); // decoded-slug → owning locale
const validCombos = new Set(); // "<locale>/<slug>" for all valid (locale, slug) pairs including English fallback
const outer = /'([a-z0-9-]+)':\s*\{\s*([^}]+)\}/g;
let m;
while ((m = outer.exec(src)) !== null) {
  const body = m[2];
  const entries = {};
  const pair = /(?:'([a-zA-Z-]+)'|([a-zA-Z-]+))\s*:\s*'([^']+)'/g;
  let p;
  while ((p = pair.exec(body)) !== null) entries[p[1] ?? p[2]] = p[3];
  // First pass: collect owned slugs (owner map)
  for (const loc of LOCALES) {
    const s = entries[loc];
    if (s && !owner.has(s)) owner.set(s, loc);
  }
  // Second pass: record every (locale, slug) combo that would be valid
  // — either the locale has its own slug, or it falls back to English.
  const enSlug = entries['en'];
  for (const loc of LOCALES) {
    const s = entries[loc] ?? enSlug;
    if (s) validCombos.add(`${loc}/${s}`);
  }
}

const ownerJson = JSON.stringify(Object.fromEntries(owner));
const validJson = JSON.stringify([...validCombos]);
const localesJson = JSON.stringify(LOCALES);

const INJECTION = `
// [PATCH] Short-URL handler — serves /{id}.{ext} by looking up r2_key in D1
// and streaming from R2 binding. Intercepts BEFORE app.match so the root
// [...catchall] route doesn't 404 these paths.
const __SHORT_URL_RE__ = /^\\/([a-z0-9]{8})\\.(jpg|jpeg|png|webp|gif|svg)$/;
function __nowSqlUtc__() {
  return new Date().toISOString().replace('T', ' ').slice(0, 19);
}
async function __shortUrlHandler__(pathname, request, env, context) {
  const m = pathname.match(__SHORT_URL_RE__);
  if (!m) return null;
  if (!env.DB || !env.R2) return null;
  const id = m[1];
  const cache = caches.default;
  const cacheKey = new Request(new URL(request.url).toString(), { method: 'GET' });
  const cached = await cache.match(cacheKey);
  if (cached) return cached;
  let row = null;
  try {
    row = await env.DB
      .prepare('SELECT r2_key, expires_at, deleted_at FROM images WHERE id = ?')
      .bind(id)
      .first();
  } catch {}
  if (!row) return new Response('Not found', { status: 404 });
  if (row.deleted_at || (row.expires_at && row.expires_at <= __nowSqlUtc__())) {
    return new Response('This image has expired.', {
      status: 410,
      headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' },
    });
  }
  const obj = await env.R2.get(row.r2_key);
  if (!obj) return new Response('Not found', { status: 404 });
  const headers = {
    'Content-Type': obj.httpMetadata?.contentType || 'application/octet-stream',
    'Cache-Control': 'public, max-age=31536000, immutable',
  };
  if (obj.size != null) headers['Content-Length'] = String(obj.size);
  if (obj.httpEtag) headers['ETag'] = obj.httpEtag;
  const response = new Response(obj.body, { status: 200, headers });
  if (context && context.waitUntil) {
    context.waitUntil(cache.put(cacheKey, response.clone()));
  }
  return response;
}
// [PATCH] Cross-locale slug redirect — runs before app.match because Astro's
// prerendered [locale]/[...slug] route matcher returns null for combos not in
// getStaticPaths, never falling back to a catch-all.
const __SLUG_OWNER__ = new Map(Object.entries(${ownerJson}));
const __VALID__ = new Set(${validJson});
const __LOCALES__ = new Set(${localesJson});
function __crossLocaleRedirect__(pathname, search) {
  const seg = pathname.split('/');
  if (seg.length < 3) return null;
  const loc = seg[1];
  if (!__LOCALES__.has(loc)) return null;
  const rawSlug = seg[2];
  if (!rawSlug || seg[3]) return null;
  let decoded = rawSlug;
  try { decoded = decodeURIComponent(rawSlug); } catch {}
  if (__VALID__.has(loc + '/' + decoded)) return null;
  const ownerLoc = __SLUG_OWNER__.get(decoded);
  if (!ownerLoc || ownerLoc === loc) return null;
  return \`/\${ownerLoc}/\${rawSlug}/\${search || ''}\`;
}
// [PATCH] /{locale}/404 fast-path — bot loops at this URL burned ~640K worker
// invocations on 2026-04-18. Skip middleware/SSR, return static 404 with a
// long s-maxage so the edge absorbs repeats.
const __404_BODY__ = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page Not Found</title><style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#fafaf7;color:#1a1a1a;text-align:center;padding:1rem}main{max-width:28rem}h1{font-size:1.5rem;margin:0 0 1rem}p{color:#555;line-height:1.6;margin:0 0 2rem}a{display:inline-block;padding:.75rem 1.5rem;background:#e11d48;color:#fff;text-decoration:none;border:2px solid #1a1a1a;font-weight:700;text-transform:uppercase;letter-spacing:.05em;font-size:.875rem;box-shadow:4px 4px 0 #1a1a1a}</style></head><body><main><h1>This page has moved.</h1><p>The tool you are looking for now lives on our homepage.</p><a href="/en/">Go to Tool</a></main></body></html>';
function __fastPath404__(pathname) {
  const seg = pathname.split('/');
  const trailing = seg.length === 4 && seg[3] === '';
  if (seg.length !== 3 && !trailing) return null;
  if (seg[2] !== '404' || !__LOCALES__.has(seg[1])) return null;
  return new Response(__404_BODY__, {
    status: 404,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      'X-Robots-Tag': 'noindex',
      'X-Fast-Path': '404',
    },
  });
}
`;

const PATCH_AT_START = `async function handle(request, env, context) {
  const { pathname: requestPathname } = new URL(request.url);
  // [PATCH] Short-URL /{id}.{ext} BEFORE any routing.
  {
    const resp = await __shortUrlHandler__(requestPathname, request, env, context);
    if (resp) return resp;
  }
  // [PATCH] /{locale}/404 fast-path BEFORE any routing.
  {
    const fp = __fastPath404__(requestPathname);
    if (fp) return fp;
  }
  // [PATCH] Cross-locale slug redirect BEFORE any routing.
  {
    const u = new URL(request.url);
    const target = __crossLocaleRedirect__(u.pathname, u.search);
    if (target) {
      return new Response(null, { status: 301, headers: { Location: target, 'Cache-Control': 'public, max-age=60, s-maxage=60' } });
    }
  }`;

const PATCH_SEARCH = `async function handle(request, env, context) {
  const { pathname: requestPathname } = new URL(request.url);`;

const entries = readdirSync(CHUNKS_DIR).filter(f => f.startsWith('worker-entry_') && f.endsWith('.mjs'));
if (entries.length !== 1) {
  console.error(`[patch-worker] Expected exactly one worker-entry file, found: ${entries.join(', ')}`);
  process.exit(1);
}
const entryPath = join(CHUNKS_DIR.pathname, entries[0]);
let content = readFileSync(entryPath, 'utf8');

if (content.includes('[PATCH] Cross-locale slug redirect')) {
  console.log('[patch-worker] Already patched, skipping.');
  process.exit(0);
}
if (!content.includes(PATCH_SEARCH)) {
  console.error('[patch-worker] Anchor not found. Worker entry format may have changed.');
  process.exit(1);
}

// Inject helper + patch handle() prologue
content = content.replace(PATCH_SEARCH, INJECTION + PATCH_AT_START);
writeFileSync(entryPath, content);
console.log(`[patch-worker] Injected cross-locale redirect into ${entries[0]}`);
console.log(`[patch-worker] Owners map: ${owner.size} slugs, validCombos: ${validCombos.size}`);
