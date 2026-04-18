#!/usr/bin/env node
// Extract LandingContent (English) from an existing .astro tool page and write
// src/i18n/landing/<page-key>.ts with the English entry. Translations for the
// other 27 locales are added later by scripts/translate-landing.mjs.
//
// Usage:
//   OPENROUTER_API_KEY=xxx node scripts/extract-landing.mjs gif-to-url
//   OPENROUTER_API_KEY=xxx node scripts/extract-landing.mjs --all
//
// --all iterates every entry in src/i18n/landing/slugs.ts whose content file
// doesn't exist yet. Skips any page that already has a content file.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src/pages');
const LANDING_DIR = path.join(ROOT, 'src/i18n/landing');
const API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.OPENROUTER_MODEL ?? 'google/gemini-3.1-flash-lite-preview';

const args = process.argv.slice(2);
const ALL = args.includes('--all');
const FORCE = args.includes('--force');
const targetKeys = args.filter(a => !a.startsWith('--'));

async function loadSlugs() {
  const src = await fs.readFile(path.join(LANDING_DIR, 'slugs.ts'), 'utf8');
  // crude parse: find lines like   'gif-to-url': { en: 'gif-to-url' },
  const keys = [];
  const re = /^\s*'([^']+)':\s*\{\s*en:/gm;
  let m;
  while ((m = re.exec(src))) keys.push(m[1]);
  return keys;
}

async function findSourceFile(pageKey) {
  // try root-level, then [locale]/
  const candidates = [
    path.join(PAGES_DIR, `${pageKey}.astro`),
    path.join(PAGES_DIR, '[locale]', `${pageKey}.astro`),
  ];
  for (const p of candidates) {
    try { await fs.access(p); return p; } catch { /* skip */ }
  }
  return null;
}

async function extractOne(pageKey) {
  const outFile = path.join(LANDING_DIR, `${pageKey}.ts`);
  if (!FORCE) {
    try { await fs.access(outFile); console.log(`  ${pageKey}: exists, skip`); return; } catch { /* continue */ }
  }
  const src = await findSourceFile(pageKey);
  if (!src) { console.log(`  ${pageKey}: no source .astro found, skip`); return; }
  const astro = await fs.readFile(src, 'utf8');

  const system = `You extract SEO landing-page copy from an Astro component file and reshape it into a strict JSON schema. Output only JSON — no commentary, no markdown fences.

Schema (all fields are strings except arrays):
{
  "metaTitle": "string, ~60 chars, ends with | ImageToURL",
  "metaDescription": "string, 140-160 chars",
  "schemaName": "string, product/tool name",
  "schemaDescription": "string, one-sentence description",
  "badge": "string, short uppercase label (2-4 words)",
  "h1Pre": "string, first half of H1 (before the italic highlight)",
  "h1Highlight": "string, emphasized tail of H1",
  "intro": "string, 1-2 sentence hero paragraph",
  "howTitle": "string, section title (e.g. 'How It Works')",
  "steps": [ { "title": "string", "body": "string" }, ... exactly 3 items ],
  "whyTitle": "string, benefits section title",
  "whyItems": [ { "title": "string", "body": "string" }, ... 3 or 4 items ],
  "faqTitle": "string, FAQ section title (e.g. 'Frequently Asked Questions')",
  "faqs": [ { "q": "string", "a": "string" }, ... 4 to 6 items ],
  "ctaTitle": "string, bottom CTA headline",
  "ctaBody": "string, 1 sentence",
  "ctaButton": "string, button label (2-4 words)"
}

Rules:
- Use copy that already exists in the .astro file wherever possible.
- If the file lacks a section (e.g., no FAQs), generate realistic SEO-friendly copy that matches the page's topic. Do NOT leave fields empty.
- Keep the voice punchy, no AI clichés, use contractions, concrete verbs.
- Preserve technical terms (HTML, <img>, CDN, URL, WordPress, Discord, etc.).
- Output MUST be valid JSON matching the schema exactly.`;

  const user = `Page key: ${pageKey}\n\nAstro source:\n\n${astro}`;

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
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      temperature: 0.3,
      response_format: { type: 'json_object' },
    }),
  });
  if (!res.ok) throw new Error(`OpenRouter ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const json = await res.json();
  const content = json.choices?.[0]?.message?.content;
  if (!content) throw new Error('no content');
  const cleaned = content.trim().replace(/^```json\s*/i, '').replace(/```$/, '').trim();
  const data = JSON.parse(cleaned);

  const ts = `import type { LandingContentMap } from './types';

// Auto-extracted from src/pages/${path.relative(PAGES_DIR, src)} by
// scripts/extract-landing.mjs. Non-English locales added by
// scripts/translate-landing.mjs.

export const content: LandingContentMap = {
  en: ${JSON.stringify(data, null, 2).replace(/^/gm, '  ').trim()},
} as LandingContentMap;
`;

  await fs.writeFile(outFile, ts, 'utf8');
  console.log(`  ${pageKey}: wrote ${path.relative(ROOT, outFile)}`);
}

async function run() {
  if (!API_KEY) { console.error('OPENROUTER_API_KEY required'); process.exit(1); }
  const allKeys = await loadSlugs();
  const todo = ALL ? allKeys : targetKeys;
  if (todo.length === 0) { console.error('Usage: extract-landing.mjs <pageKey> [...] | --all'); process.exit(1); }
  console.log(`Extracting ${todo.length} page${todo.length === 1 ? '' : 's'}`);
  for (const key of todo) {
    try { await extractOne(key); } catch (err) { console.error(`  ${key}: ${err.message}`); }
  }
}

run().catch(err => { console.error(err); process.exit(1); });
