#!/usr/bin/env node
// Self-host the Material Symbols Outlined font, subsetted to only the glyphs we
// render. Eliminates the fonts.googleapis.com + fonts.gstatic.com round-trips
// that caused a visible FOUT (icon ligature names like "timer" briefly
// rendering as text before the glyph snapped in).
//
// Reads MATERIAL_ICON_NAMES_CSV from src/data/material-icons.ts (produced by
// generate-icon-names.mjs), asks Google Fonts for the subsetted CSS using a
// modern Chrome UA so the response references WOFF2, and downloads the WOFF2
// to src/fonts/material-symbols-outlined.woff2.
//
// The font is served from /fonts/material-symbols-outlined.woff2 (stable URL,
// not fingerprinted — when the icon set rarely changes the file gets rewritten
// at the same path). The @font-face and .material-symbols-outlined class live
// in src/styles/global.css; Layout.astro emits the <link rel="preload"> tag.
//
// Runs in prebuild after generate-icon-names.mjs.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const ICONS_TS = join(ROOT, 'src', 'data', 'material-icons.ts');
const FONT_OUT = join(ROOT, 'public', 'fonts', 'material-symbols-outlined.woff2');

// Matches Google's Chrome UA sniffing so the CSS response references WOFF2 (not TTF).
const CHROME_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function readIconCsv() {
  const src = readFileSync(ICONS_TS, 'utf8');
  const m = src.match(/MATERIAL_ICON_NAMES_CSV\s*=\s*"([^"]+)"/);
  if (!m) throw new Error('Could not find MATERIAL_ICON_NAMES_CSV in ' + ICONS_TS);
  return m[1];
}

async function fetchCss(csv) {
  // No axis tuple: combining :opsz,wght,FILL@... with a 200+ icon CSV trips Google's
  // selector validator (returns 400). Without the tuple, Google ships a static subset
  // at FILL 0 / wght 400 / opsz 24 — which is what we render everywhere, so that's fine.
  const url =
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' +
    '&icon_names=' +
    csv +
    '&display=block';
  const res = await fetch(url, { headers: { 'User-Agent': CHROME_UA } });
  if (!res.ok) throw new Error(`Google Fonts CSS fetch failed: ${res.status} ${res.statusText}`);
  return await res.text();
}

function extractWoff2Url(css) {
  // Google ships subsetted fonts as `gstatic.com/l/font?kit=...&skey=...` (no extension),
  // followed by `format('woff2')`. The `format('woff2')` next to the URL is the contract.
  const m = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)\s*format\(['"]woff2['"]\)/);
  if (!m) throw new Error('No WOFF2 URL found in Google Fonts CSS response (got TTF? check UA).');
  return m[1];
}

async function downloadFont(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Font download failed: ${res.status} ${res.statusText}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  const csv = readIconCsv();
  console.log(`Fetching Material Symbols subset (${csv.split(',').length} glyphs)...`);
  const css = await fetchCss(csv);
  const woff2Url = extractWoff2Url(css);

  console.log(`Downloading ${woff2Url}...`);
  const fontBuf = await downloadFont(woff2Url);
  mkdirSync(dirname(FONT_OUT), { recursive: true });
  writeFileSync(FONT_OUT, fontBuf);
  console.log(`  → ${FONT_OUT} (${(fontBuf.length / 1024).toFixed(1)} KiB)`);
}

main().catch((err) => {
  console.error('[download-material-symbols] failed:', err.message);
  process.exit(1);
});
