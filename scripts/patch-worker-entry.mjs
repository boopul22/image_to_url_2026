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
`;

const PATCH_AT_START = `async function handle(request, env, context) {
  const { pathname: requestPathname } = new URL(request.url);
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
