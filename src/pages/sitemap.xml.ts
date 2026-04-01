export const prerender = false;

// Dynamic sitemap with i18n — rendered at request time via SSR (Cloudflare Workers / D1)
// Includes xhtml:link alternates for all locale variants per Google's multilingual sitemap spec.

import type { APIContext } from 'astro';
import { getDB } from '../lib/db';
import { locales, defaultLocale } from '../i18n/config';
import type { Locale } from '../i18n/config';

const SITE = 'https://imagetourl.cloud';

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

function toDateString(raw: string | null | undefined): string {
  if (!raw) return '2026-04-01';
  return raw.slice(0, 10);
}

function localeUrl(loc: Locale, basePath: string): string {
  return `${SITE}/${loc}${basePath}`;
}

function buildUrlEntry(basePath: string, lastmod: string): string {
  const defaultUrl = localeUrl(defaultLocale, basePath);
  const alternates = locales.map(loc =>
    `    <xhtml:link rel="alternate" hreflang="${loc}" href="${escapeXml(localeUrl(loc, basePath))}" />`
  ).join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(defaultUrl)}" />`;

  return `  <url>
    <loc>${escapeXml(defaultUrl)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
${xDefault}
  </url>`;
}

export async function GET({ locals }: APIContext): Promise<Response> {
  const db = getDB(locals);

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
    // DB unavailable — serve static pages only.
  }

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
  } catch {}

  const urlEntries: string[] = [];

  // Static pages — each gets all locale alternates
  for (const page of STATIC_PAGES) {
    urlEntries.push(buildUrlEntry(page.path, page.lastmod));
  }

  // Blog posts — each gets all locale alternates
  for (const post of postRows) {
    urlEntries.push(buildUrlEntry(`/blog/${escapeXml(post.slug)}`, toDateString(post.updated_at)));
  }

  // CMS pages
  for (const page of pageRows) {
    urlEntries.push(buildUrlEntry(`/p/${escapeXml(page.slug)}`, toDateString(page.updated_at)));
  }

  const total = urlEntries.length;
  if (total > 45000) {
    console.warn(`[sitemap] URL count is ${total} — approaching the 50,000 per-file limit.`);
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlEntries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
