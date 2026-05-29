#!/usr/bin/env node
// scripts/strip-locales.mjs
// One-shot, idempotent locale reducer. Keeps en/es/fr/de/ja; strips the other 23.
//
//   1. Generates src/i18n/landing/removed-redirects.generated.json
//      (parsed from the ORIGINAL slugs.ts — MUST run before slugs are stripped)
//   2. Strips removed-locale keys from slugs.ts
//   3. Strips removed-locale blocks from the 52 landing/*.ts modules
//      (handles both literal-map files and fillLocales files)
//   4. Deletes the 23 removed translation JSON files
//
// Safe to re-run: stripped blocks no longer match, deleted files are skipped,
// and the redirect artifact is preserved once slugs.ts has been stripped.

import { readFileSync, writeFileSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const LANDING_DIR = join(ROOT, 'src/i18n/landing');
const SLUGS_FILE = join(LANDING_DIR, 'slugs.ts');
const TRANSLATIONS_DIR = join(ROOT, 'src/i18n/translations');
const REDIRECTS_FILE = join(LANDING_DIR, 'removed-redirects.generated.json');

// Keeping: en, es, fr, de, ja, zh-Hans (Simplified Chinese). zh-Hant is removed.
const REMOVED = [
  'hi', 'id', 'vi', 'pt-BR', 'tr', 'tl', 'pl', 'nl', 'it', 'ar',
  'bn', 'fa', 'ur', 'ru', 'th', 'ko', 'sw', 'ms', 'ta', 'mr', 'te', 'zh-Hant',
];
const REMOVED_SET = new Set(REMOVED);
// Translation JSON filename overrides (file on disk differs from locale code).
const JSON_NAME = {};

// ---------- 1. redirect map (parse ORIGINAL slugs.ts) ----------
const slugsSrc = readFileSync(SLUGS_FILE, 'utf8');
const outer = /'([a-z0-9-]+)':\s*\{\s*([^}]+)\}/g;
const pairRe = /(?:'([a-zA-Z-]+)'|([a-zA-Z-]+))\s*:\s*'([^']+)'/g;
const redirectSlugs = {};
const redirectRoots = {};
for (const loc of REMOVED) redirectRoots[loc] = '/en/';
let m;
while ((m = outer.exec(slugsSrc)) !== null) {
  const body = m[2];
  const entries = {};
  let p;
  pairRe.lastIndex = 0;
  while ((p = pairRe.exec(body)) !== null) entries[p[1] ?? p[2]] = p[3];
  const enSlug = entries.en;
  if (!enSlug) continue;
  for (const loc of REMOVED) {
    if (entries[loc]) redirectSlugs[`${loc}/${entries[loc]}`] = `/en/${enSlug}/`;
  }
}

if (Object.keys(redirectSlugs).length > 0 || !existsSync(REDIRECTS_FILE)) {
  writeFileSync(
    REDIRECTS_FILE,
    JSON.stringify({ roots: redirectRoots, slugs: redirectSlugs }, null, 2) + '\n',
  );
  console.log(
    `[strip] redirect map: ${Object.keys(redirectSlugs).length} slug redirects, ${Object.keys(redirectRoots).length} roots`,
  );
} else {
  console.log('[strip] redirect map: slugs already stripped — preserving existing artifact');
}

// ---------- 2. strip slugs.ts ----------
{
  const codesAlt = REMOVED.join('|');
  // Matches `'zh-Hans': '…'` (quoted key) or `ar: '…'` (bare key) plus a trailing comma/space.
  const tokenRe = new RegExp(
    `(?:'(?:${codesAlt})'|\\b(?:${codesAlt})\\b)\\s*:\\s*'[^']*'\\s*,?\\s*`,
    'g',
  );
  let out = slugsSrc.replace(tokenRe, '');
  // Normalize any commas left dangling by the removals.
  out = out.replace(/\{\s*,/g, '{ ').replace(/,\s*,/g, ', ').replace(/,\s*\}/g, ' }');
  writeFileSync(SLUGS_FILE, out);
  console.log('[strip] slugs.ts: removed-locale keys stripped');
}

// ---------- 3. strip landing/*.ts ----------
function stripLiteralMap(src) {
  const lines = src.split('\n');
  const out = [];
  let skipping = false;
  for (const line of lines) {
    if (skipping) {
      if (/^  \},?\s*$/.test(line)) skipping = false; // 2-space `},` closes the locale block
      continue;
    }
    // Top-level locale key: bare (`en:`), single- (`'zh-Hans':`) or double-quoted (`"en":`).
    const start = line.match(/^  (?:'([^']+)'|"([^"]+)"|([A-Za-z][\w-]*)):\s*\{/);
    const code = start && (start[1] ?? start[2] ?? start[3]);
    if (code && REMOVED_SET.has(code)) {
      // Edge: whole block on one line (rare) — skip just this line.
      if (!/\},?\s*$/.test(line)) skipping = true;
      continue;
    }
    out.push(line);
  }
  return out.join('\n');
}

function cleanFillLocalesArgs(line) {
  return line.replace(
    /fillLocales\(\s*([A-Za-z]+)\s*,\s*\{([^}]*)\}\s*\)/,
    (_full, base, inner) => {
      const kept = inner
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .filter((id) => !REMOVED_SET.has(id));
      return `fillLocales(${base}, { ${kept.join(', ')} })`;
    },
  );
}

function stripFillLocales(src) {
  const lines = src.split('\n');
  const out = [];
  let skipping = false;
  for (const line of lines) {
    if (skipping) {
      // top-level `};` (own line or appended) closes the const declaration
      if (/^\};?\s*$/.test(line) || /\};\s*$/.test(line)) skipping = false;
      continue;
    }
    const start = line.match(/^const ([A-Za-z-]+)\s*:\s*LandingContent\b/);
    if (start && REMOVED_SET.has(start[1])) {
      if (!/;\s*$/.test(line)) skipping = true; // multi-line const → keep skipping
      continue; // single-line const ends with `;` → skip just this line
    }
    if (/fillLocales\s*\(/.test(line)) {
      out.push(cleanFillLocalesArgs(line));
      continue;
    }
    out.push(line);
  }
  return out.join('\n');
}

const SUPPORT = new Set(['slugs.ts', 'registry.ts', 'types.ts']);
const files = readdirSync(LANDING_DIR).filter((f) => f.endsWith('.ts') && !SUPPORT.has(f));
let litCount = 0;
let fillCount = 0;
for (const f of files) {
  const path = join(LANDING_DIR, f);
  let src = readFileSync(path, 'utf8');
  if (/fillLocales\s*\(/.test(src)) {
    src = stripFillLocales(src);
    fillCount++;
  } else {
    src = stripLiteralMap(src);
    litCount++;
  }
  writeFileSync(path, src);
}
console.log(`[strip] landing: ${litCount} literal-map + ${fillCount} fillLocales files processed`);

// ---------- 4. delete translation JSONs ----------
let deleted = 0;
for (const loc of REMOVED) {
  const p = join(TRANSLATIONS_DIR, `${JSON_NAME[loc] ?? loc}.json`);
  if (existsSync(p)) {
    rmSync(p);
    deleted++;
  }
}
console.log(`[strip] deleted ${deleted} translation JSON files`);
console.log('[strip] done. Next: npm run astro -- check && npm run build');
