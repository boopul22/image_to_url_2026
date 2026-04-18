// Admin-only: auto-translate a blog post into all non-English locales via
// OpenRouter. Idempotent when onlyMissing=true. Runs in the request worker
// (serial-batch of 4 concurrent locales) — for 27 locales expect ~30–90s.

export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../../../../lib/db';
import { translatePostToAllLocales, type PostTranslationInput } from '../../../../../../lib/translate';
import { logActivity } from '../../../../../../lib/cms';

export const POST: APIRoute = async ({ request, params, locals }) => {
  if (!locals.user || locals.user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403, headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = (locals as any).runtime?.env?.OPENROUTER_API_KEY
    ?? (locals as any).OPENROUTER_API_KEY
    ?? import.meta.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'OPENROUTER_API_KEY not configured' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);
  const id = params.id!;
  const body = await request.json().catch(() => ({}));
  const onlyMissing = body.onlyMissing !== false; // default true

  const row = await db
    .prepare('SELECT id, slug, title, excerpt, content, meta_title, meta_description, faq_items FROM posts WHERE id = ?')
    .bind(id)
    .first<{
      id: string; slug: string; title: string; excerpt: string; content: string;
      meta_title: string | null; meta_description: string | null; faq_items: string;
    }>();
  if (!row) {
    return new Response(JSON.stringify({ error: 'Post not found' }), {
      status: 404, headers: { 'Content-Type': 'application/json' },
    });
  }

  const input: PostTranslationInput = {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt ?? '',
    content: row.content ?? '{}',
    meta_title: row.meta_title,
    meta_description: row.meta_description,
    faq_items: row.faq_items ?? '[]',
  };

  const results = await translatePostToAllLocales(input, db, apiKey, { concurrency: 4, onlyMissing });

  await logActivity(db, {
    userId: locals.user.id,
    userName: locals.user.name,
    action: 'translate_post',
    entityType: 'post',
    entityId: id,
    entityTitle: row.title,
    details: JSON.stringify({
      ok: results.filter(r => r.ok).length,
      failed: results.filter(r => !r.ok).length,
    }),
  });

  return new Response(JSON.stringify({ success: true, results }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const GET: APIRoute = async ({ params, locals }) => {
  if (!locals.user || locals.user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403, headers: { 'Content-Type': 'application/json' },
    });
  }
  const db = getDB(locals);
  const rows = await db
    .prepare('SELECT locale, slug, translated_at FROM post_translations WHERE post_id = ? ORDER BY locale')
    .bind(params.id)
    .all<{ locale: string; slug: string; translated_at: string }>();
  return new Response(JSON.stringify({ success: true, translations: rows.results ?? [] }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
