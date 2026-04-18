#!/usr/bin/env node
// Locally translate blog posts and push translations into D1 (remote by
// default, --local optional). Avoids production endpoint entirely.
//
// Usage:
//   OPENROUTER_API_KEY=xxx node scripts/translate-blog.mjs --all
//   OPENROUTER_API_KEY=xxx node scripts/translate-blog.mjs <postId1> <postId2>
//   OPENROUTER_API_KEY=xxx node scripts/translate-blog.mjs --all --force
//   OPENROUTER_API_KEY=xxx node scripts/translate-blog.mjs --all --local
//   OPENROUTER_API_KEY=xxx node scripts/translate-blog.mjs --all --locales=hi,fr,de

import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';

const API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.OPENROUTER_MODEL ?? 'google/gemini-3.1-flash-lite-preview';
const DB_NAME = 'imagetourl-db';

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
const LOCAL = args.includes('--local');
const localesArg = args.find(a => a.startsWith('--locales='));
const ONLY_LOCALES = localesArg ? localesArg.split('=')[1].split(',') : Object.keys(LOCALES);
const postIdArgs = args.filter(a => !a.startsWith('--'));

const DB_FLAG = LOCAL ? '--local' : '--remote';

function wrangler(command) {
  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['wrangler', 'd1', 'execute', DB_NAME, DB_FLAG, '--json', '--command', command], {
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let out = '', err = '';
    child.stdout.on('data', d => (out += d));
    child.stderr.on('data', d => (err += d));
    child.on('close', code => {
      if (code !== 0) return reject(new Error(`wrangler exit ${code}: ${err.slice(0, 800)}`));
      // wrangler may print a banner before the JSON; extract the first JSON array.
      const start = out.indexOf('[');
      const end = out.lastIndexOf(']');
      if (start < 0 || end < 0) return resolve([]);
      try {
        const parsed = JSON.parse(out.slice(start, end + 1));
        // Shape: [ { results: [...], success: true } ]
        const results = (parsed[0] && parsed[0].results) || [];
        resolve(results);
      } catch (e) { reject(e); }
    });
  });
}

async function wranglerFile(sql) {
  // For multi-statement SQL, write to tmp file and execute.
  const tmp = path.join(os.tmpdir(), `blog-trans-${Date.now()}-${Math.random().toString(36).slice(2)}.sql`);
  await fs.writeFile(tmp, sql, 'utf8');
  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['wrangler', 'd1', 'execute', DB_NAME, DB_FLAG, '--file', tmp], {
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let err = '';
    child.stderr.on('data', d => (err += d));
    child.on('close', code => {
      fs.unlink(tmp).catch(() => {});
      if (code !== 0) return reject(new Error(`wrangler exit ${code}: ${err.slice(0, 800)}`));
      resolve();
    });
  });
}

function sqlQuote(v) {
  if (v === null || v === undefined) return 'NULL';
  return `'${String(v).replace(/'/g, "''")}'`;
}

function slugify(s) {
  let out = String(s).toLowerCase()
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}\p{M}]+/gu, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
  if ([...out].length > 80) out = [...out].slice(0, 80).join('');
  return out;
}

// Find the first *balanced* top-level object — handles cases where Gemini
// emits two JSON blocks in sequence (e.g. `{...}{...}`). Walks the string
// tracking brace depth while respecting strings and escapes.
function firstBalancedObject(s) {
  const start = s.indexOf('{');
  if (start < 0) return null;
  let depth = 0, inStr = false, esc = false;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') { inStr = true; continue; }
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) return s.slice(start, i + 1);
    }
  }
  return null;
}

function robustJsonParse(raw) {
  let s = String(raw).trim()
    .replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
  const balanced = firstBalancedObject(s);
  const candidates = [];
  if (balanced) candidates.push(balanced, balanced.replace(/,\s*([}\]])/g, '$1'));
  // Fallback: slice from first '{' to last '}' (may catch other shapes)
  const first = s.indexOf('{'), last = s.lastIndexOf('}');
  if (first >= 0 && last > first) {
    const wide = s.slice(first, last + 1);
    candidates.push(wide, wide.replace(/,\s*([}\]])/g, '$1'));
  }
  candidates.push(s, s + '"}', s + '"]}', s + '}');
  let lastErr;
  for (const c of candidates) { try { return JSON.parse(c); } catch (e) { lastErr = e; } }
  throw lastErr;
}

// Strict structured output. Eliminates the "extra JSON appended" class of
// errors Gemini Flash sometimes emits with plain json_object, which was
// costing us retries. If the model/provider rejects the schema, we
// transparently fall back to json_object on a single call.
const TRANSLATION_SCHEMA = {
  type: 'json_schema',
  json_schema: {
    name: 'post_translation',
    strict: true,
    schema: {
      type: 'object',
      properties: {
        slug: { type: 'string' },
        title: { type: 'string' },
        excerpt: { type: 'string' },
        meta_title: { type: 'string' },
        meta_description: { type: 'string' },
        content_json: { type: 'string' },
        faq_items_json: { type: 'string' },
      },
      required: ['slug', 'title', 'excerpt', 'meta_title', 'meta_description', 'content_json', 'faq_items_json'],
      additionalProperties: false,
    },
  },
};

async function openrouter(system, user, { responseFormat = TRANSLATION_SCHEMA } = {}) {
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
      max_tokens: 16384,
      response_format: responseFormat,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    // If strict schema isn't supported for this (model, provider) pairing,
    // fall back once to plain json_object so we still get an answer.
    if (responseFormat?.type === 'json_schema' && /schema|structured|response_format/i.test(body)) {
      return openrouter(system, user, { responseFormat: { type: 'json_object' } });
    }
    throw new Error(`OpenRouter ${res.status}: ${body.slice(0, 300)}`);
  }
  const j = await res.json();
  const content = j.choices?.[0]?.message?.content;
  if (!content) throw new Error('no content');
  return robustJsonParse(content);
}

async function translateOne(post, locale) {
  const label = LOCALES[locale];
  const system = `You are a professional translator. Translate the following blog post from English to ${label} (locale: ${locale}).

Output strict JSON with this exact shape:
{
  "slug": "string — SEO-friendly URL slug in target language's native script where applicable (Devanagari for Hindi, Arabic script for Arabic, Han for Chinese, etc.), lowercase, hyphen-separated, 2-6 words, no URL encoding. Keep brand names / file formats in Latin.",
  "title": "string",
  "excerpt": "string",
  "meta_title": "string",
  "meta_description": "string",
  "content_json": "string — SAME JSON shape as input content_json with every 'text' field translated; type/attrs/marks/structure untouched",
  "faq_items_json": "string — SAME JSON array shape as input faq_items_json with every question/answer translated"
}

Rules:
- Preserve all JSON structure. Translate only text values.
- Keep brand names (ImageToURL, Cloudflare, Imgur, Imgbb, WordPress, Discord, Notion, Shopify, GitHub, etc.) in original Latin form.
- Keep code snippets, URLs, file extensions (.png, .jpg, .gif, .webp, .heic), and technical tokens unchanged.
- Output valid JSON only. No commentary.`;

  const user = JSON.stringify({
    fields: {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt ?? '',
      meta_title: post.meta_title ?? '',
      meta_description: post.meta_description ?? '',
      content_json: post.content ?? '{}',
      faq_items_json: post.faq_items ?? '[]',
    },
  });

  const parsed = await openrouter(system, user);
  let content = parsed.content_json ?? post.content;
  try { JSON.parse(content); } catch { content = post.content; }
  let faq = parsed.faq_items_json ?? post.faq_items;
  try { JSON.parse(faq); } catch { faq = post.faq_items; }
  const slug = slugify(parsed.slug || post.slug) || post.slug;
  return {
    locale,
    slug,
    title: parsed.title || post.title,
    excerpt: parsed.excerpt || post.excerpt || '',
    content,
    meta_title: parsed.meta_title || post.meta_title || '',
    meta_description: parsed.meta_description || post.meta_description || '',
    faq_items: faq,
  };
}

async function run() {
  if (!API_KEY) { console.error('OPENROUTER_API_KEY env var required'); process.exit(1); }

  console.log(`Database: ${DB_NAME} ${DB_FLAG}`);

  let posts;
  if (ALL) {
    console.log('Fetching published posts…');
    posts = await wrangler(`SELECT id, slug, title, excerpt, content, meta_title, meta_description, faq_items FROM posts WHERE status = 'published'`);
  } else if (postIdArgs.length > 0) {
    const ids = postIdArgs.map(sqlQuote).join(',');
    posts = await wrangler(`SELECT id, slug, title, excerpt, content, meta_title, meta_description, faq_items FROM posts WHERE id IN (${ids})`);
  } else {
    console.error('Usage: translate-blog.mjs --all | <postId> [...]');
    process.exit(1);
  }
  console.log(`  ${posts.length} post${posts.length === 1 ? '' : 's'}`);
  if (posts.length === 0) return;

  // Fetch existing translations so we can skip completed (locale, post) combos.
  let existingRows = [];
  if (!FORCE) {
    const ids = posts.map(p => sqlQuote(p.id)).join(',');
    existingRows = await wrangler(`SELECT post_id, locale FROM post_translations WHERE post_id IN (${ids})`);
  }
  const existing = new Set(existingRows.map(r => `${r.post_id}|${r.locale}`));

  const TARGET_LOCALES = ONLY_LOCALES.filter(l => LOCALES[l]);
  const PER_POST_CONCURRENCY = 8;

  for (const post of posts) {
    const todo = TARGET_LOCALES.filter(loc => FORCE || !existing.has(`${post.id}|${loc}`));
    if (todo.length === 0) { console.log(`  ${post.slug}: already complete`); continue; }
    console.log(`  ${post.slug}: translating ${todo.length} locale${todo.length === 1 ? '' : 's'}`);

    const translated = [];
    for (let i = 0; i < todo.length; i += PER_POST_CONCURRENCY) {
      const batch = todo.slice(i, i + PER_POST_CONCURRENCY);
      const settled = await Promise.allSettled(batch.map(loc => translateOne(post, loc)));
      settled.forEach((s, idx) => {
        const loc = batch[idx];
        if (s.status === 'fulfilled') {
          translated.push(s.value);
          console.log(`    ${loc}: ok (${s.value.slug})`);
        } else {
          console.error(`    ${loc}: ${String(s.reason).slice(0, 200)}`);
        }
      });
    }

    if (translated.length === 0) continue;

    // Build one big UPSERT per post. Uses INSERT OR REPLACE for simplicity.
    const stmts = translated.map(t => {
      // Slug uniqueness within a locale: append post id suffix if a non-self
      // translation already owns this slug. Cheap pre-check via existingRows
      // isn't sufficient (it doesn't include slugs); we just disambiguate.
      const uniqueSlug = `${t.slug}-${String(post.id).slice(0, 6).toLowerCase()}`;
      const slugToUse = t.slug.length > 0 ? t.slug : uniqueSlug;
      return `INSERT INTO post_translations (post_id, locale, slug, title, excerpt, content, meta_title, meta_description, faq_items, translated_at) VALUES (${sqlQuote(post.id)}, ${sqlQuote(t.locale)}, ${sqlQuote(slugToUse)}, ${sqlQuote(t.title)}, ${sqlQuote(t.excerpt)}, ${sqlQuote(t.content)}, ${sqlQuote(t.meta_title)}, ${sqlQuote(t.meta_description)}, ${sqlQuote(t.faq_items)}, datetime('now')) ON CONFLICT(post_id, locale) DO UPDATE SET slug=excluded.slug, title=excluded.title, excerpt=excluded.excerpt, content=excluded.content, meta_title=excluded.meta_title, meta_description=excluded.meta_description, faq_items=excluded.faq_items, translated_at=excluded.translated_at;`;
    });

    try {
      await wranglerFile(stmts.join('\n'));
      console.log(`    wrote ${translated.length} translation row${translated.length === 1 ? '' : 's'}`);
    } catch (err) {
      console.error(`    DB write failed: ${err.message}`);
    }
  }
}

run().catch(err => { console.error(err); process.exit(1); });
