#!/usr/bin/env node
// Scan src/i18n/landing/slugs.ts for (locale, slug) collisions across page
// keys. For each collision group, keep the first page's slug and append a
// short distinguishing token (derived from the English page key) to the rest.
//
// This is a one-shot local edit — no API calls, no token spend.
//
// Usage: node scripts/dedupe-slugs.mjs [--dry]

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SLUGS_FILE = path.join(ROOT, 'src/i18n/landing/slugs.ts');
const DRY = process.argv.includes('--dry');

// Translate tokens: pick a short disambiguator per pageKey. We use a stable
// mapping so reruns give the same output. Derived from English page key.
function disambigToken(pageKey, locale) {
  // Return a short token per pageKey suited for slug suffix. Transliterate
  // common English distinguishers into the target locale's script only if
  // already Latin; otherwise keep Latin since these are English page keys.
  const short = pageKey
    .replace(/^image-hosting-for-/, '')
    .replace(/^image-/, '')
    .replace(/^image-to-/, '')
    .replace(/-alternative$/, '-alt')
    .replace(/-hosting$/, '')
    .replace(/-upload$/, '-up')
    .replace(/-image-/, '-')
    .slice(0, 14);
  return short;
}

async function run() {
  const src = await fs.readFile(SLUGS_FILE, 'utf8');

  // Extract each entry line.
  // Matches:   'page-key': { en: 'en-slug', hi: 'hi-slug', ... },
  const lineRe = /^(\s*)'([^']+)':\s*\{([^}]*)\},?$/gm;
  const entries = [];
  let m;
  while ((m = lineRe.exec(src))) {
    const indent = m[1];
    const pageKey = m[2];
    const bodyRaw = m[3];
    const slugMap = {};
    // parse k: 'v' pairs
    const pairRe = /(?:^|,)\s*'?([\w-]+)'?\s*:\s*'([^']+)'/g;
    let pm;
    while ((pm = pairRe.exec(bodyRaw))) {
      slugMap[pm[1]] = pm[2];
    }
    entries.push({ pageKey, slugMap, indent, fullMatch: m[0] });
  }

  // Collect collisions per locale.
  const locales = new Set();
  entries.forEach(e => Object.keys(e.slugMap).forEach(l => locales.add(l)));

  const collisions = []; // { locale, slug, entries[] }
  for (const locale of locales) {
    const byslug = new Map();
    for (const e of entries) {
      const s = e.slugMap[locale];
      if (!s) continue;
      if (!byslug.has(s)) byslug.set(s, []);
      byslug.get(s).push(e);
    }
    for (const [slug, group] of byslug) {
      if (group.length > 1) collisions.push({ locale, slug, entries: group });
    }
  }

  console.log(`Found ${collisions.length} collision group${collisions.length === 1 ? '' : 's'}`);
  if (collisions.length === 0) { console.log('Nothing to dedupe.'); return; }

  // For each collision group, keep the first entry's slug; append `-<token>`
  // to the rest. If a disambig still collides, append `-2`, `-3`, ...
  const changes = new Map(); // pageKey -> { locale -> newSlug }
  for (const c of collisions) {
    console.log(`\n[${c.locale}] "${c.slug}" collides across: ${c.entries.map(e => e.pageKey).join(', ')}`);
    // Skip the first entry — it keeps the slug.
    const [keeper, ...rest] = c.entries;
    console.log(`  keeping on: ${keeper.pageKey}`);
    const usedSlugs = new Set([c.slug]);
    // Also reserve anything already taken by other entries in the same locale
    for (const e of entries) {
      const s = e.slugMap[c.locale];
      if (s) usedSlugs.add(s);
    }
    for (const e of rest) {
      const token = disambigToken(e.pageKey, c.locale);
      let next = `${c.slug}-${token}`.replace(/-+/g, '-').replace(/^-|-$/g, '');
      let n = 2;
      while (usedSlugs.has(next)) {
        next = `${c.slug}-${token}-${n}`.replace(/-+/g, '-').replace(/^-|-$/g, '');
        n++;
      }
      usedSlugs.add(next);
      if (!changes.has(e.pageKey)) changes.set(e.pageKey, {});
      changes.get(e.pageKey)[c.locale] = next;
      console.log(`  ${e.pageKey}.${c.locale}: ${c.slug} -> ${next}`);
      // Reflect in the in-memory slugMap so downstream collision checks use the new value
      e.slugMap[c.locale] = next;
    }
  }

  if (DRY) { console.log('\n(dry run — not writing)'); return; }

  // Apply changes to file text.
  let out = src;
  for (const [pageKey, localeChanges] of changes) {
    // Find the entry line and rebuild
    const entry = entries.find(e => e.pageKey === pageKey);
    if (!entry) continue;
    const merged = { ...entry.slugMap, ...localeChanges };
    const body = Object.entries(merged)
      .map(([k, v]) => `${/^[a-z]+$/.test(k) ? k : `'${k}'`}: '${v}'`)
      .join(', ');
    const replacement = `${entry.indent}'${pageKey}': { ${body} },`;
    out = out.replace(entry.fullMatch, replacement);
  }

  await fs.writeFile(SLUGS_FILE, out, 'utf8');
  console.log(`\nWrote ${changes.size} updated entries to slugs.ts`);
}

run().catch(err => { console.error(err); process.exit(1); });
