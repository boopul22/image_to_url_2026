export const prerender = false;

// Dynamic sitemap — rendered at request time via SSR (Cloudflare Workers / D1)
// @astrojs/sitemap is intentionally NOT used here because it only works with
// static prerendering. This site is fully SSR (prerender = false), so we own
// the entire generation pipeline through this API route.
//
// Spec compliance:
//   - No <priority> or <changefreq> — both are ignored by Google since ~2023.
//   - <lastmod> uses W3C datetime (YYYY-MM-DD) sourced from real DB timestamps.
//   - One <urlset> file; a sitemap index is only needed if URLs exceed 50,000.
//   - Only status='published' posts and pages are included.

import type { APIContext } from 'astro';
import { getDB } from '../lib/db';

const SITE = 'https://imagetourl.cloud';

// Static pages that are always public and indexable.
// Dates reflect the last meaningful content change; update when content ships.
const STATIC_PAGES: { path: string; lastmod: string }[] = [
  { path: '/',         lastmod: '2026-04-01' },
  { path: '/features', lastmod: '2026-04-01' },
  { path: '/pricing',  lastmod: '2026-04-01' },
  { path: '/docs',     lastmod: '2026-04-01' },
  { path: '/blog',     lastmod: '2026-04-01' },
  { path: '/privacy',  lastmod: '2026-04-01' },
  { path: '/terms',    lastmod: '2026-04-01' },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Normalise any ISO datetime string (e.g. "2026-03-15T10:22:00") to YYYY-MM-DD.
function toDateString(raw: string | null | undefined): string {
  if (!raw) return '2026-04-01';
  return raw.slice(0, 10);
}

function buildUrlEntry(loc: string, lastmod: string): string {
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
}

export async function GET({ locals }: APIContext): Promise<Response> {
  const db = getDB(locals);

  // --- Fetch published blog posts ---
  let postRows: { slug: string; updated_at: string }[] = [];
  try {
    const result = await db
      .prepare(
        `SELECT slug, updated_at FROM posts
         WHERE status = 'published'
         ORDER BY published_at DESC, created_at DESC
         LIMIT 50000`,
      )
      .all<{ slug: string; updated_at: string }>();
    postRows = result.results ?? [];
  } catch {
    // DB unavailable (e.g. local dev without bindings) — serve static pages only.
  }

  // --- Fetch published CMS pages ---
  let pageRows: { slug: string; updated_at: string }[] = [];
  try {
    const result = await db
      .prepare(
        `SELECT slug, updated_at FROM pages
         WHERE status = 'published'
         ORDER BY updated_at DESC
         LIMIT 50000`,
      )
      .all<{ slug: string; updated_at: string }>();
    pageRows = result.results ?? [];
  } catch {
    // Same DB guard as above.
  }

  // --- Build URL entries ---
  const urlEntries: string[] = [];

  for (const page of STATIC_PAGES) {
    urlEntries.push(buildUrlEntry(`${SITE}${page.path}`, page.lastmod));
  }

  for (const post of postRows) {
    urlEntries.push(
      buildUrlEntry(
        `${SITE}/blog/${escapeXml(post.slug)}`,
        toDateString(post.updated_at),
      ),
    );
  }

  for (const page of pageRows) {
    urlEntries.push(
      buildUrlEntry(
        `${SITE}/p/${escapeXml(page.slug)}`,
        toDateString(page.updated_at),
      ),
    );
  }

  // Guard: if URL count ever approaches 50k, this should be split into a
  // sitemap index. Log a warning to Cloudflare's console so it is visible.
  const total = urlEntries.length;
  if (total > 45000) {
    console.warn(
      `[sitemap] URL count is ${total} — approaching the 50,000 per-file limit. ` +
        'Split into a sitemap index before exceeding the limit.',
    );
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlEntries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Cache at the CDN edge for 1 hour; revalidate in the background.
      // Keeps crawler requests cheap while staying reasonably fresh.
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
