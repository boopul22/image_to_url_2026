#!/usr/bin/env node
// Fill non-English entries in src/i18n/landing/<page-key>.ts and add
// translated slugs to src/i18n/landing/slugs.ts. Idempotent: existing
// non-English entries are preserved unless --force.
//
// Usage:
//   OPENROUTER_API_KEY=xxx node scripts/translate-landing.mjs gif-to-url
//   OPENROUTER_API_KEY=xxx node scripts/translate-landing.mjs --all
//   OPENROUTER_API_KEY=xxx node scripts/translate-landing.mjs gif-to-url --locales fr,de,es

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LANDING_DIR = path.join(ROOT, 'src/i18n/landing');
const API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.OPENROUTER_MODEL ?? 'google/gemini-3.1-flash-lite-preview';

const LOCALES = {
  hi: 'Hindi', es: 'Spanish', fr: 'French', de: 'German', ja: 'Japanese',
  'zh-Hans': 'Simplified Chinese', id: 'Indonesian', vi: 'Vietnamese',
  'pt-BR': 'Brazilian Portuguese', tr: 'Turkish', tl: 'Filipino (Tagalog)',
  pl: 'Polish', nl: 'Dutch', it: 'Italian', ar: 'Arabic', bn: 'Bengali',
  fa: 'Persian (Farsi)', ur: 'Urdu', ru: 'Russian', th: 'Thai', ko: 'Korean',
  sw: 'Swahili', ms: 'Malay', ta: 'Tamil', mr: 'Marathi', te: 'Telugu',
  'zh-Hant': 'Traditional Chinese',
};

const args = process.argv.slice(2);
const ALL = args.includes('--all');
const FORCE = args.includes('--force');
// --slugs-only: don't re-translate content, only regenerate URL slugs for
// locales that already have content entries. Cheap + fast. Use this when
// you've changed slug style (e.g. ASCII → native script) and want to update
// URLs without spending API tokens re-translating the page body.
const SLUGS_ONLY = args.includes('--slugs-only');
const localesArg = args.find(a => a.startsWith('--locales='));
const ONLY_LOCALES = localesArg ? localesArg.split('=')[1].split(',') : Object.keys(LOCALES);
const pageArgs = args.filter(a => !a.startsWith('--'));

// Try hard to parse model output locally before giving up. Gemini Flash Lite
// sometimes emits stray prefix/suffix chars, partial fences, or a dangling
// trailing comma. Fix in code — don't burn an API retry.
function robustJsonParse(raw) {
  let s = String(raw).trim();
  // Strip code fences
  s = s.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
  // Strip anything before the first '{' and after the last '}'
  const first = s.indexOf('{');
  const last = s.lastIndexOf('}');
  if (first > 0) s = s.slice(first);
  if (last >= 0 && last < s.length - 1) s = s.slice(0, last + 1);

  const attempts = [
    s,
    // Remove trailing commas before } or ]
    s.replace(/,\s*([}\]])/g, '$1'),
    // Close one unterminated string then one unclosed object
    s + '"}',
    s + '"]}',
    s + '}',
  ];
  let lastErr;
  for (const candidate of attempts) {
    try { return JSON.parse(candidate); } catch (err) { lastErr = err; }
  }
  throw lastErr;
}

async function openrouter(system, user) {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
      'HTTP-Referer': 'https://imagetourl.cloud',
      'X-Title': 'ImageToURL',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
      temperature: 0.2,
      response_format: { type: 'json_object' },
    }),
  });
  if (!res.ok) throw new Error(`OpenRouter ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const json = await res.json();
  const content = json.choices?.[0]?.message?.content;
  if (!content) throw new Error('no content');
  return robustJsonParse(content);
}

// Preserve native scripts (Devanagari, Arabic, Han, Thai, etc.) so Hindi,
// Arabic, Chinese, Japanese, Korean, Bengali, Tamil, Marathi, Telugu, Urdu,
// Farsi, Thai URLs are truly localized.
//
// Critical: include \p{M} (combining marks) so Devanagari matras (ो, े, ं),
// Bengali vowel signs, Arabic diacritics etc. are preserved. Without this,
// "बदलें" collapses to "बदल".
function slugify(s) {
  let out = s.toLowerCase()
    .normalize('NFC')
    // Keep letters, numbers, and combining marks. Everything else → hyphen.
    .replace(/[^\p{L}\p{N}\p{M}]+/gu, '-')
    // Collapse any run of hyphens that resulted, trim edges.
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
  // Cap length by character count, not byte count.
  if ([...out].length > 80) out = [...out].slice(0, 80).join('');
  return out;
}

// Script blocks expected for each non-Latin locale. Used to validate slug output.
const REQUIRED_SCRIPT = {
  hi: /[\u0900-\u097F]/,   // Devanagari (Hindi)
  mr: /[\u0900-\u097F]/,   // Devanagari (Marathi)
  bn: /[\u0980-\u09FF]/,   // Bengali
  ta: /[\u0B80-\u0BFF]/,   // Tamil
  te: /[\u0C00-\u0C7F]/,   // Telugu
  ar: /[\u0600-\u06FF]/,   // Arabic
  fa: /[\u0600-\u06FF]/,   // Farsi (Arabic block)
  ur: /[\u0600-\u06FF]/,   // Urdu (Arabic block)
  th: /[\u0E00-\u0E7F]/,   // Thai
  ja: /[\u3040-\u30FF\u4E00-\u9FFF]/,  // Hiragana/Katakana/Kanji
  ko: /[\uAC00-\uD7AF]/,   // Hangul
  'zh-Hans': /[\u4E00-\u9FFF]/,
  'zh-Hant': /[\u4E00-\u9FFF]/,
};

// Few-shot examples per locale to anchor the model.
const SLUG_EXAMPLES = {
  hi: 'png-को-url-में-बदलें',
  bn: 'png-কে-url-এ-রূপান্তর',
  mr: 'png-ला-url-मध्ये-बदला',
  ta: 'png-ஐ-url-ஆக-மாற்று',
  te: 'png-ని-url-గా-మార్చు',
  ar: 'تحويل-png-إلى-url',
  fa: 'تبدیل-png-به-url',
  ur: 'png-کو-url-میں-تبدیل',
  th: 'แปลง-png-เป็น-url',
  ja: 'png-を-url-に変換',
  ko: 'png를-url로-변환',
  'zh-Hans': '将-png-转换为-url',
  'zh-Hant': '將-png-轉換為-url',
};

// Lightweight call: given the translated metaTitle for a locale, produce a
// native-script URL slug. Used by --slugs-only to avoid re-translating the
// whole content block.
async function generateSlugOnly(pageKey, localeEntry, locale) {
  const needsNativeScript = !!REQUIRED_SCRIPT[locale];
  const example = SLUG_EXAMPLES[locale];

  const system = needsNativeScript
    ? `You write URL slugs in ${LOCALES[locale]} (${locale}) using ONLY that language's native script.

**Critical rules:**
- Output the slug in the NATIVE SCRIPT of ${LOCALES[locale]}. No Latin letters for the translated words.
- For Hindi: use Devanagari (देवनागरी), NOT Roman/Hinglish. "png ko url mein badlen" is WRONG. "png-को-url-में-बदलें" is CORRECT.
- Keep widely-known brand names and file-format tokens (png, jpg, gif, webp, heic, url, html, css, pdf, ai, ${`wordpress`.toUpperCase().toLowerCase()}, discord, notion, shopify, github, whatsapp, chatgpt) in their original Latin form — they don't translate.
- Translate everything else into the native script.
${example ? `- Example good slug for this language: ${example}` : ''}
- 2–5 words total, hyphen-separated, raw Unicode (do NOT URL-encode).

Output JSON ONLY: {"slug": "<slug>"}`
    : `Write a URL slug in ${LOCALES[locale]} (${locale}). Use natural words in that language, lowercase, 2–5 words, hyphen-separated, no diacritics if possible, no URL encoding. Keep brand names in Latin form.

Output JSON ONLY: {"slug": "<slug>"}`;

  const user = JSON.stringify({
    page_key: pageKey,
    translated_meta_title: localeEntry.metaTitle,
    translated_h1: `${localeEntry.h1Pre} ${localeEntry.h1Highlight}`.trim(),
  });

  const expectedScript = REQUIRED_SCRIPT[locale];
  // Max 2 attempts. Only retry when non-Latin locale got a Latin slug —
  // that's worth one more try. Don't retry on other errors (saves money).
  let lastErr;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const parsed = await openrouter(system, user);
      const raw = parsed.slug || '';
      const slug = slugify(raw);
      if (!slug) throw new Error('empty slug');
      if (expectedScript && !expectedScript.test(slug)) {
        lastErr = new Error(`slug missing expected script: ${slug}`);
        continue; // retry once
      }
      return { locale, slug };
    } catch (err) {
      // Don't retry on API/parse errors — just bail.
      throw err;
    }
  }
  throw lastErr || new Error('slug generation failed');
}

async function translateOne(pageKey, enEntry, locale) {
  const system = `Translate SEO landing page copy from English to ${LOCALES[locale]} (locale: ${locale}).

Also produce a URL slug for this locale that is fully localized in the target language's NATIVE SCRIPT and words — NOT English, NOT transliteration. This is critical for local-language SEO.
- For Hindi: use Devanagari (e.g., "png-को-url-में-बदलें")
- For Arabic/Farsi/Urdu: use Arabic script
- For Chinese (Simplified/Traditional): use Han characters
- For Japanese: use Kana/Kanji
- For Korean: use Hangul
- For Bengali, Tamil, Marathi, Telugu, Thai: use their native scripts
- For Latin-script languages (French, Spanish, German, etc.): use natural words in that language

Slug format: lowercase where applicable, 2-5 words, hyphen-separated, no spaces, no URL encoding (output raw Unicode), no punctuation other than hyphens. Keep well-known brand names (WordPress, Discord, Notion, Shopify, GitHub) in English within the slug.

Output JSON matching this exact schema:
{
  "slug": "string (ASCII lowercase hyphen)",
  "content": { ...same shape as input English content... }
}

Rules:
- Preserve all JSON structure exactly.
- Translate every string field; keep array shapes unchanged.
- Keep placeholders, brand names, technical terms (HTML, <img>, CDN, URL, JPG, PNG, etc.) unchanged.
- Keep it concise and natural — no AI clichés.
- Output valid JSON only.`;

  const user = JSON.stringify({ english_content: enEntry });
  // Single attempt — failures skip that (locale, page) combo. User can
  // re-run the script later without --force to backfill only the missed ones.
  const parsed = await openrouter(system, user);
  const slug = slugify(parsed.slug || pageKey);
  return { locale, slug, content: parsed.content };
}

async function translatePage(pageKey, enEntry, existingMap) {
  // All 27 locales parallel per page. Gemini Flash Lite is fast/cheap.
  const CONCURRENCY = 27;
  const targets = ONLY_LOCALES
    .filter(loc => LOCALES[loc])
    .filter(loc => FORCE || !existingMap[loc]);

  const results = {};
  // Keep already-translated locales (unless --force)
  for (const loc of ONLY_LOCALES) {
    if (!FORCE && existingMap[loc]) results[loc] = { content: existingMap[loc], slug: null };
  }

  for (let i = 0; i < targets.length; i += CONCURRENCY) {
    const batch = targets.slice(i, i + CONCURRENCY);
    const settled = await Promise.allSettled(batch.map(loc => translateOne(pageKey, enEntry, loc)));
    settled.forEach((s, idx) => {
      const loc = batch[idx];
      if (s.status === 'fulfilled') {
        results[loc] = { slug: s.value.slug, content: s.value.content };
        console.log(`    ${loc}: ok (${s.value.slug})`);
      } else {
        console.error(`    ${loc}: ${String(s.reason).slice(0, 200)}`);
      }
    });
  }
  return results;
}

// Cheap path: given an already-translated content file, regenerate ONLY the
// URL slug per locale. Content .ts file is not rewritten. Only slugs.ts
// changes. Use when slug style has changed (e.g. native-script switch).
async function processPageSlugsOnly(pageKey) {
  const file = path.join(LANDING_DIR, `${pageKey}.ts`);
  let src;
  try { src = await fs.readFile(file, 'utf8'); } catch {
    console.log(`  ${pageKey}: no content file, skip`);
    return null;
  }
  let existing;
  try {
    const mod = await import(file + '?t=' + Date.now()).catch(() => null);
    existing = mod?.content;
  } catch {}
  if (!existing) {
    const jsLike = src
      .replace(/^import[^;]+;\s*/gm, '')
      .replace(/: LandingContentMap/g, '')
      .replace(/as LandingContentMap/g, '')
      .replace(/export const content =/, 'globalThis.__content =');
    (0, eval)(jsLike);
    existing = globalThis.__content;
  }
  if (!existing) { console.log(`  ${pageKey}: could not load content`); return null; }

  const targets = ONLY_LOCALES.filter(loc => LOCALES[loc] && existing[loc]);
  if (targets.length === 0) { console.log(`  ${pageKey}: no translated locales, skip`); return null; }

  console.log(`  ${pageKey}: regenerating ${targets.length} slug${targets.length === 1 ? '' : 's'}`);
  const CONCURRENCY = 8;
  const slugs = {};
  for (let i = 0; i < targets.length; i += CONCURRENCY) {
    const batch = targets.slice(i, i + CONCURRENCY);
    const settled = await Promise.allSettled(batch.map(loc => generateSlugOnly(pageKey, existing[loc], loc)));
    settled.forEach((s, idx) => {
      const loc = batch[idx];
      if (s.status === 'fulfilled') {
        slugs[loc] = s.value.slug;
        console.log(`    ${loc}: ${s.value.slug}`);
      } else {
        console.error(`    ${loc}: ${String(s.reason).slice(0, 200)}`);
      }
    });
  }
  return slugs;
}

async function processPage(pageKey) {
  const file = path.join(LANDING_DIR, `${pageKey}.ts`);
  let src;
  try { src = await fs.readFile(file, 'utf8'); } catch {
    console.log(`  ${pageKey}: no content file, skip (run extract-landing.mjs first)`);
    return null;
  }

  // Extract existing content object via dynamic import (tsx interop too messy — use a regex+eval fallback)
  // We look for `en: { ... }` and other locales via regex scanning of keys.
  const mod = await import(file + '?t=' + Date.now()).catch(async () => {
    // Fallback: strip TS syntax and eval
    const jsLike = src
      .replace(/^import[^;]+;\s*/gm, '')
      .replace(/: LandingContentMap/g, '')
      .replace(/as LandingContentMap/g, '')
      .replace(/export const content =/, 'globalThis.__content =');
    // eslint-disable-next-line no-eval
    (0, eval)(jsLike);
    return { content: globalThis.__content };
  });
  const existing = mod.content;
  if (!existing || !existing.en) {
    console.log(`  ${pageKey}: no 'en' entry in content file, skip`);
    return null;
  }

  console.log(`  ${pageKey}: translating...`);
  const newEntries = await translatePage(pageKey, existing.en, existing);

  // Merge: preserve existing locales unless --force, add new
  const merged = { en: existing.en };
  for (const locale of Object.keys(LOCALES)) {
    if (newEntries[locale]) {
      merged[locale] = newEntries[locale].content;
    } else if (existing[locale]) {
      merged[locale] = existing[locale];
    }
  }

  // Write file back
  const ts = `import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = ${JSON.stringify(merged, null, 2)} as LandingContentMap;
`;
  await fs.writeFile(file, ts, 'utf8');

  // Return slugs for caller to merge into slugs.ts
  const slugs = {};
  for (const [locale, v] of Object.entries(newEntries)) slugs[locale] = v.slug;
  return slugs;
}

async function updateSlugs(pageKey, slugs) {
  if (!slugs || Object.keys(slugs).length === 0) return;
  const file = path.join(LANDING_DIR, 'slugs.ts');
  let src = await fs.readFile(file, 'utf8');
  // Find the line for this pageKey and replace its braces with a multi-locale map.
  const lineRe = new RegExp(`^(\\s*)'${pageKey.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}':\\s*\\{([^}]*)\\},?$`, 'm');
  const m = src.match(lineRe);
  if (!m) { console.log(`    slugs.ts: no entry for ${pageKey}`); return; }
  const indent = m[1];
  const existingBody = m[2].trim();
  // Parse existing entries into object
  const existing = {};
  existingBody.split(',').forEach(pair => {
    const mm = pair.match(/^\s*'?([a-zA-Z-]+)'?\s*:\s*'([^']+)'\s*$/);
    if (mm) existing[mm[1]] = mm[2];
  });
  const merged = { ...existing };
  for (const [loc, slug] of Object.entries(slugs)) if (!merged[loc] || FORCE) merged[loc] = slug;
  const body = Object.entries(merged).map(([k, v]) => `${/^[a-z]+$/.test(k) ? k : `'${k}'`}: '${v}'`).join(', ');
  const replacement = `${indent}'${pageKey}': { ${body} },`;
  src = src.replace(lineRe, replacement);
  await fs.writeFile(file, src, 'utf8');
  console.log(`    slugs.ts: updated ${pageKey}`);
}

async function run() {
  if (!API_KEY) { console.error('OPENROUTER_API_KEY required'); process.exit(1); }

  let todo = pageArgs;
  if (ALL) {
    const files = await fs.readdir(LANDING_DIR);
    todo = files
      .filter(f => f.endsWith('.ts') && !['types.ts', 'slugs.ts', 'registry.ts'].includes(f))
      .map(f => f.replace(/\.ts$/, ''));
  }
  if (todo.length === 0) { console.error('Usage: translate-landing.mjs <pageKey> [...] | --all'); process.exit(1); }

  const label = SLUGS_ONLY ? 'Regenerating slugs for' : 'Translating';
  console.log(`${label} ${todo.length} page${todo.length === 1 ? '' : 's'} into ${ONLY_LOCALES.length} locales`);
  // 4 pages × 27 locales = 108 concurrent requests. Flash Lite handles easily.
  const PAGE_CONCURRENCY = SLUGS_ONLY ? 8 : 4;
  for (let i = 0; i < todo.length; i += PAGE_CONCURRENCY) {
    const batch = todo.slice(i, i + PAGE_CONCURRENCY);
    await Promise.all(batch.map(async pageKey => {
      const slugs = SLUGS_ONLY
        ? await processPageSlugsOnly(pageKey)
        : await processPage(pageKey);
      if (slugs) await updateSlugs(pageKey, slugs);
    }));
  }
}

run().catch(err => { console.error(err); process.exit(1); });
