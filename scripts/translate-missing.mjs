#!/usr/bin/env node
// Fill missing translation keys in src/i18n/translations/*.json.
// Reads en.json as the source of truth, diffs against each other locale, and
// calls OpenRouter (google/gemini-3.1-flash-lite-preview) to translate gaps.
//
// Usage:
//   OPENROUTER_API_KEY=xxx node scripts/translate-missing.mjs         # fill all
//   OPENROUTER_API_KEY=xxx node scripts/translate-missing.mjs --dry   # report only
//   OPENROUTER_API_KEY=xxx node scripts/translate-missing.mjs fr ja   # only these locales

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TRANSLATIONS_DIR = path.join(ROOT, 'src/i18n/translations');
const MODEL = process.env.OPENROUTER_MODEL ?? 'google/gemini-3.1-flash-lite-preview';
const API_KEY = process.env.OPENROUTER_API_KEY;

// locale code -> filename. zh-Hans is stored as zh.json for historical reasons.
const LOCALES = {
  hi: 'hi.json', es: 'es.json', fr: 'fr.json', de: 'de.json', ja: 'ja.json',
  'zh-Hans': 'zh.json', id: 'id.json', vi: 'vi.json', 'pt-BR': 'pt-BR.json',
  tr: 'tr.json', tl: 'tl.json', pl: 'pl.json', nl: 'nl.json', it: 'it.json',
  ar: 'ar.json', bn: 'bn.json', fa: 'fa.json', ur: 'ur.json', ru: 'ru.json',
  th: 'th.json', ko: 'ko.json', sw: 'sw.json', ms: 'ms.json', ta: 'ta.json',
  mr: 'mr.json', te: 'te.json', 'zh-Hant': 'zh-Hant.json',
};

const LABELS = {
  hi: 'Hindi', es: 'Spanish', fr: 'French', de: 'German', ja: 'Japanese',
  'zh-Hans': 'Simplified Chinese', id: 'Indonesian', vi: 'Vietnamese',
  'pt-BR': 'Brazilian Portuguese', tr: 'Turkish', tl: 'Filipino (Tagalog)',
  pl: 'Polish', nl: 'Dutch', it: 'Italian', ar: 'Arabic', bn: 'Bengali',
  fa: 'Persian (Farsi)', ur: 'Urdu', ru: 'Russian', th: 'Thai', ko: 'Korean',
  sw: 'Swahili', ms: 'Malay', ta: 'Tamil', mr: 'Marathi', te: 'Telugu',
  'zh-Hant': 'Traditional Chinese',
};

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const onlyLocales = args.filter(a => !a.startsWith('--') && LOCALES[a]);
const BATCH_SIZE = 40; // keys per API call

async function readJson(p) {
  return JSON.parse(await fs.readFile(p, 'utf8'));
}

async function writeJson(p, obj) {
  // Preserve a deterministic key order: sort alphabetically for diffability.
  const sorted = {};
  Object.keys(obj).sort().forEach(k => { sorted[k] = obj[k]; });
  await fs.writeFile(p, JSON.stringify(sorted, null, 2) + '\n', 'utf8');
}

async function translateBatch(pairs, locale, label) {
  const system = `You are a professional translator. Translate UI strings from English to ${label} (locale code: ${locale}).

Rules:
- Output ONLY a valid JSON object mapping each input key to its translation. No commentary.
- Keep brand names in English: ImageToURL, Cloudflare, Imgur, Imgbb, WordPress, Discord, Notion, Shopify, GitHub, WhatsApp, ChatGPT, Gmail, Google Sheets, Google Forms, Vercel, HTML, CSS, URL, CDN, API, PNG, JPG, JPEG, GIF, WEBP, HEIC, SVG.
- Preserve placeholders like {count}, {name}, {param} exactly — do not translate or remove the braces.
- Preserve leading/trailing punctuation and capitalization style (UPPERCASE, Title Case).
- Keep it concise: UI copy, not prose.`;

  const userObj = {};
  pairs.forEach(([k, v]) => { userObj[k] = v; });
  const user = JSON.stringify(userObj);

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
      temperature: 0.2,
      response_format: { type: 'json_object' },
    }),
  });
  if (!res.ok) {
    throw new Error(`OpenRouter ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  const json = await res.json();
  const content = json.choices?.[0]?.message?.content;
  if (!content) throw new Error('no content');
  const cleaned = content.trim().replace(/^```json\s*/i, '').replace(/```$/, '').trim();
  return JSON.parse(cleaned);
}

async function run() {
  if (!API_KEY) {
    console.error('OPENROUTER_API_KEY env var is required.');
    process.exit(1);
  }
  const enPath = path.join(TRANSLATIONS_DIR, 'en.json');
  const en = await readJson(enPath);
  const enKeys = Object.keys(en);
  console.log(`Source en.json: ${enKeys.length} keys`);

  const targetLocales = onlyLocales.length > 0 ? onlyLocales : Object.keys(LOCALES);

  for (const locale of targetLocales) {
    const file = LOCALES[locale];
    const filePath = path.join(TRANSLATIONS_DIR, file);
    let existing = {};
    try { existing = await readJson(filePath); } catch { /* new file */ }

    const missing = enKeys.filter(k => !(k in existing) || existing[k] === '' || existing[k] === en[k]);
    if (missing.length === 0) {
      console.log(`  ${locale}: up to date`);
      continue;
    }
    console.log(`  ${locale}: ${missing.length} missing key${missing.length === 1 ? '' : 's'}`);
    if (DRY) continue;

    for (let i = 0; i < missing.length; i += BATCH_SIZE) {
      const batch = missing.slice(i, i + BATCH_SIZE).map(k => [k, en[k]]);
      try {
        const translated = await translateBatch(batch, locale, LABELS[locale]);
        for (const [k, v] of batch) {
          if (typeof translated[k] === 'string' && translated[k].trim() !== '') {
            existing[k] = translated[k];
          }
        }
        console.log(`    batch ${i / BATCH_SIZE + 1}/${Math.ceil(missing.length / BATCH_SIZE)} done`);
      } catch (err) {
        console.error(`    batch failed: ${err.message}`);
      }
    }
    await writeJson(filePath, existing);
  }
}

run().catch(err => { console.error(err); process.exit(1); });
