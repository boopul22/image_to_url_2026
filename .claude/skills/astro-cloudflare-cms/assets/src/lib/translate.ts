// Blog post translator: takes an English post and produces translations for
// all non-English locales, writing them to `post_translations`. Uses
// OpenRouter + google/gemini-3.1-flash-lite-preview. TipTap content is passed
// through as JSON; we ask the model to translate only the `text` fields.

import { locales, localeLabels, type Locale } from '../i18n/config';
import { openrouterJSON } from './openrouter';

export interface PostTranslationInput {
  id: string;
  slug: string;             // English source slug — used as fallback if model fails
  title: string;
  excerpt: string;
  content: string;          // TipTap JSON string
  meta_title: string | null;
  meta_description: string | null;
  faq_items: string;        // JSON array string
}

export interface TranslatedPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  meta_title: string;
  meta_description: string;
  faq_items: string;
}

function slugify(s: string): string {
  return s.toLowerCase()
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

const TARGET_LOCALES: Locale[] = locales.filter(l => l !== 'en') as Locale[];

function buildPrompt(post: PostTranslationInput, locale: Locale): { system: string; user: string } {
  const label = localeLabels[locale];
  const system = `You are a professional translator. Translate website blog content from English to ${label} (locale code: ${locale}).

Rules:
- Preserve all JSON structure exactly. Translate only human-readable text values.
- For TipTap content JSON, translate only the "text" properties inside nodes. Leave "type", "attrs", "marks", and node structure untouched.
- For FAQ items JSON array, translate only "question" and "answer" string fields.
- For "slug", produce a SEO-friendly URL slug in the target language: ASCII-only lowercase, hyphen-separated, max 80 chars. Transliterate if the language uses non-Latin script. Keep brand names (wordpress, discord, notion) in English.
- Keep brand names (ImageToURL, Cloudflare, Imgur, Imgbb, WordPress, Discord, Notion, Shopify, GitHub, etc.) in English.
- Keep code snippets, URLs, file extensions (.png, .jpg, .gif), and technical tokens unchanged.
- Preserve markdown/HTML if present.
- Output must be valid JSON matching the schema exactly. No commentary.`;

  const user = JSON.stringify({
    target_locale: locale,
    fields: {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      meta_title: post.meta_title ?? '',
      meta_description: post.meta_description ?? '',
      content_json: post.content,
      faq_items_json: post.faq_items,
    },
    response_schema: {
      slug: 'string (ASCII lowercase hyphen, translated for SEO)',
      title: 'string',
      excerpt: 'string',
      meta_title: 'string',
      meta_description: 'string',
      content_json: 'string (valid JSON matching input shape, text fields translated)',
      faq_items_json: 'string (valid JSON array matching input shape)',
    },
  });

  return { system, user };
}

async function translateOne(
  post: PostTranslationInput,
  locale: Locale,
  apiKey: string,
): Promise<TranslatedPost> {
  const { system, user } = buildPrompt(post, locale);
  const result = await openrouterJSON<{
    slug: string;
    title: string;
    excerpt: string;
    meta_title: string;
    meta_description: string;
    content_json: string;
    faq_items_json: string;
  }>({ apiKey, system, user, temperature: 0.2 });

  // Validate content_json and faq_items_json are parseable; fall back to source if not.
  let content = result.content_json;
  try { JSON.parse(content); } catch { content = post.content; }
  let faq = result.faq_items_json;
  try { JSON.parse(faq); } catch { faq = post.faq_items; }

  const slug = slugify(result.slug || post.slug) || post.slug;

  return {
    slug,
    title: result.title || post.title,
    excerpt: result.excerpt || post.excerpt,
    meta_title: result.meta_title || post.meta_title || '',
    meta_description: result.meta_description || post.meta_description || '',
    content,
    faq_items: faq,
  };
}

export interface TranslateResult {
  locale: Locale;
  ok: boolean;
  error?: string;
}

export async function translatePostToAllLocales(
  post: PostTranslationInput,
  db: D1Database,
  apiKey: string,
  opts: { concurrency?: number; onlyMissing?: boolean } = {},
): Promise<TranslateResult[]> {
  const concurrency = opts.concurrency ?? 4;

  let targets = TARGET_LOCALES;
  if (opts.onlyMissing) {
    const existing = await db
      .prepare('SELECT locale FROM post_translations WHERE post_id = ?')
      .bind(post.id)
      .all<{ locale: string }>();
    const have = new Set((existing.results ?? []).map(r => r.locale));
    targets = targets.filter(l => !have.has(l));
  }

  const results: TranslateResult[] = [];
  for (let i = 0; i < targets.length; i += concurrency) {
    const batch = targets.slice(i, i + concurrency);
    const settled = await Promise.allSettled(
      batch.map(async locale => {
        const t = await translateOne(post, locale, apiKey);
        // Ensure slug uniqueness within locale. Append post.id suffix on collision.
        let finalSlug = t.slug;
        const collision = await db
          .prepare('SELECT post_id FROM post_translations WHERE locale = ? AND slug = ? AND post_id != ?')
          .bind(locale, finalSlug, post.id)
          .first<{ post_id: string }>();
        if (collision) finalSlug = `${finalSlug}-${post.id.slice(0, 6).toLowerCase()}`;

        await db
          .prepare(
            `INSERT INTO post_translations
               (post_id, locale, slug, title, excerpt, content, meta_title, meta_description, faq_items, translated_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
             ON CONFLICT(post_id, locale) DO UPDATE SET
               slug = excluded.slug,
               title = excluded.title,
               excerpt = excluded.excerpt,
               content = excluded.content,
               meta_title = excluded.meta_title,
               meta_description = excluded.meta_description,
               faq_items = excluded.faq_items,
               translated_at = excluded.translated_at`,
          )
          .bind(
            post.id,
            locale,
            finalSlug,
            t.title,
            t.excerpt,
            t.content,
            t.meta_title,
            t.meta_description,
            t.faq_items,
          )
          .run();
        return locale;
      }),
    );
    settled.forEach((s, idx) => {
      const locale = batch[idx];
      if (s.status === 'fulfilled') results.push({ locale, ok: true });
      else results.push({ locale, ok: false, error: String(s.reason).slice(0, 300) });
    });
  }

  return results;
}
