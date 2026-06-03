#!/usr/bin/env node
// Emit inline-SVG path data for every icon the app uses, sourced OFFLINE from the
// version-locked @material-symbols/svg-400 package. Writes src/data/icon-svgs.ts:
// a `name → inner-SVG markup` map (outline + filled variants) that the <Icon>
// component inlines at render time.
//
// Why this exists: we render icons as inline SVG instead of an icon font. That's
// the most Lighthouse-friendly option (no font download, no preload, no FOUT, no
// missing-glyph-shows-as-text), it's fully offline and deterministic, and the map
// is regenerated from the icons the code actually uses on every dev/build — so it
// can never drift. The source SVGs ship in node_modules (npm-locked), so a fresh
// clone needs no extra setup beyond `npm install`.
//
// Reads MATERIAL_ICON_NAMES from src/data/material-icons.ts (generate-icon-names.mjs).
// Runs in predev/prebuild, after generate-icon-names.mjs.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const ICONS_TS = join(ROOT, 'src', 'data', 'material-icons.ts');
const SVG_DIR = join(ROOT, 'node_modules', '@material-symbols', 'svg-400', 'outlined');
const OUT = join(ROOT, 'src', 'data', 'icon-svgs.ts');

const DEFAULT_VIEWBOX = '0 -960 960 960';

// Some names we use are Material Symbols *ligature aliases* (or names this svg
// package version doesn't ship under). The font resolved them server-side; the
// SVG files only exist under the canonical name. Each mapping below was verified
// by shared codepoint against Google's official MaterialSymbolsOutlined.codepoints
// (identical glyph), so the rendered icon is unchanged.
const ALIASES = {
  expand_more: 'keyboard_arrow_down',
  email: 'mail',
  https: 'lock',
  business: 'domain',
  assessment: 'insert_chart',
  collections: 'filter',
  ad_units: 'mobile_text',
  phone_iphone: 'mobile_3',
  screenshot: 'screenshot_region',
  reddit: 'forum', // brand glyph — not in Material Symbols; nearest neutral icon
};

// Icons this svg package version omits entirely. Baked from Google's canonical
// outlined SVGs (24px grid, so they carry their own viewBox).
const MANUAL = {
  auto_awesome: {
    viewBox: '0 0 24 24',
    inner:
      '<path d="m19 9-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75L23 5l-2.75 1.25Zm0 14-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75L23 19l-2.75 1.25ZM9 20l-2.5-5.5L1 12l5.5-2.5L9 4l2.5 5.5L17 12l-5.5 2.5Zm0-4.85L10 13l2.15-1L10 11 9 8.85 8 11l-2.15 1L8 13ZM9 12Z"/>',
  },
  auto_fix_high: {
    viewBox: '0 0 24 24',
    inner:
      '<path d="m20 7-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95ZM8.5 7l-.95-2.05L5.5 4l2.05-.95L8.5 1l.95 2.05L11.5 4l-2.05.95ZM20 18.5l-.95-2.05L17 15.5l2.05-.95.95-2.05.95 2.05 2.05.95-2.05.95ZM5.1 21.7l-2.8-2.8q-.3-.3-.3-.725t.3-.725L13.45 6.3q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725L6.55 21.7q-.3.3-.725.3t-.725-.3Zm.75-2.1L13 12.4 11.6 11l-7.2 7.15Z"/>',
  },
};

// Scanner false-positives — these tokens get picked up from lucide-admin `icon:`
// fields / CSS words but are NOT Material Symbols icons we render via <Icon>. Skip
// them silently so the build output stays clean.
const SKIP = new Set([
  'button', 'change', 'click', 'content', 'hidden', 'images',
  'plus', 'push_pin', 'radiogroup', 'relative', 'users', 'x', 'zap',
]);

function readIconNames() {
  const src = readFileSync(ICONS_TS, 'utf8');
  const m = src.match(/MATERIAL_ICON_NAMES_CSV\s*=\s*"([^"]*)"/);
  if (!m) throw new Error('Could not find MATERIAL_ICON_NAMES_CSV in ' + ICONS_TS);
  return m[1].split(',').filter(Boolean);
}

// Pull the inner markup (the <path>s) out of a Material Symbols SVG file. Every
// file is `<svg ... viewBox="0 -960 960 960"><path .../></svg>` — we keep the
// inner part and let <Icon> supply the wrapping <svg> with currentColor + 1em.
function innerMarkup(file) {
  const svg = readFileSync(file, 'utf8');
  const m = svg.match(/<svg\b[^>]*>([\s\S]*)<\/svg>/i);
  if (!m) throw new Error('Unexpected SVG shape: ' + file);
  return m[1].trim();
}

function main() {
  if (!existsSync(SVG_DIR)) {
    throw new Error(
      `Missing ${SVG_DIR}\nRun \`npm install\` — icon SVGs ship in @material-symbols/svg-400.`
    );
  }

  const names = readIconNames();
  const outline = {};
  const filled = {};
  const viewBox = {}; // only non-default viewBoxes
  const missing = [];

  for (const name of names) {
    if (SKIP.has(name)) continue;

    if (MANUAL[name]) {
      outline[name] = MANUAL[name].inner;
      if (MANUAL[name].viewBox !== DEFAULT_VIEWBOX) viewBox[name] = MANUAL[name].viewBox;
      continue;
    }

    const base = ALIASES[name] || name;
    const baseFile = join(SVG_DIR, `${base}.svg`);
    const fillFile = join(SVG_DIR, `${base}-fill.svg`);
    if (!existsSync(baseFile)) {
      missing.push(name);
      continue;
    }
    outline[name] = innerMarkup(baseFile);
    // Filled variant is optional; fall back to outline at render time when absent.
    if (existsSync(fillFile)) filled[name] = innerMarkup(fillFile);
  }

  if (missing.length) {
    console.warn(
      `[generate-icon-svgs] ${missing.length} icon(s) not found and will render blank: ${missing.join(', ')}\n` +
        '  → add an entry to ALIASES or MANUAL in scripts/generate-icon-svgs.mjs.'
    );
  }

  const entries = (obj) =>
    Object.keys(obj)
      .sort()
      .map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(obj[k])},`)
      .join('\n');

  // Per-icon named consts (ic_<name>) so CLIENT scripts can import just the few
  // icons they swap at runtime and tree-shake the rest — the map below is never
  // pulled into a client bundle. The `ic_` prefix also keeps reserved words like
  // `delete`/`function` valid as identifiers.
  const constNames = Object.keys(outline).sort();
  const consts = constNames
    .map((k) => `export const ic_${k} = ${JSON.stringify(outline[k])};`)
    .join('\n');
  const mapFromConsts = constNames.map((k) => `  ${JSON.stringify(k)}: ic_${k},`).join('\n');

  const fillNames = Object.keys(filled).sort();
  const fillConsts = fillNames
    .map((k) => `export const icf_${k} = ${JSON.stringify(filled[k])};`)
    .join('\n');
  const fillMapFromConsts = fillNames.map((k) => `  ${JSON.stringify(k)}: icf_${k},`).join('\n');

  const out =
    '// AUTO-GENERATED by scripts/generate-icon-svgs.mjs — do not edit by hand.\n' +
    '// Inner <svg> markup (Material Symbols, weight 400) for the icons the app uses.\n' +
    `// ${Object.keys(outline).length} icons. Rendered by src/components/Icon.astro;\n` +
    '// client scripts import individual ic_<name> consts.\n\n' +
    `export const ICON_DEFAULT_VIEWBOX = ${JSON.stringify(DEFAULT_VIEWBOX)};\n\n` +
    `${consts}\n\n` +
    `${fillConsts}\n\n` +
    `export const ICON_SVGS: Record<string, string> = {\n${mapFromConsts}\n};\n\n` +
    `export const ICON_SVGS_FILL: Record<string, string> = {\n${fillMapFromConsts}\n};\n\n` +
    `// Per-icon viewBox overrides (icons not on the 960 grid). Default: ICON_DEFAULT_VIEWBOX.\n` +
    `export const ICON_VIEWBOX: Record<string, string> = {\n${entries(viewBox)}\n};\n`;

  writeFileSync(OUT, out);
  console.log(
    `✔ ${Object.keys(outline).length} icon SVGs written to ${relative(ROOT, OUT)} (${Object.keys(filled).length} fill variants, ${Object.keys(viewBox).length} viewBox overrides)`
  );
}

main();
