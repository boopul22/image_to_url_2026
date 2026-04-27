export const prerender = false;

// Dynamic sitemap with i18n — rendered at request time via SSR (Cloudflare Workers / D1)
// Includes xhtml:link alternates for all locale variants per Google's multilingual sitemap spec.

import type { APIContext } from 'astro';
import { getDB } from '../lib/db';
import { locales, defaultLocale } from '../i18n/config';
import type { Locale } from '../i18n/config';
import { PAGE_KEYS, getSlug } from '../i18n/landing/registry';

const SITE = 'https://imagetourl.cloud';

const STATIC_PAGES: { path: string; lastmod: string }[] = [
  { path: '/',         lastmod: '2026-04-01' },
  { path: '/features', lastmod: '2026-04-01' },
  { path: '/pricing',  lastmod: '2026-04-01' },
  { path: '/docs',     lastmod: '2026-04-01' },
  { path: '/blog',     lastmod: '2026-04-01' },
  { path: '/privacy',  lastmod: '2026-04-01' },
  { path: '/terms',    lastmod: '2026-04-01' },
  // Note: image-to-url-for-html and image-to-url-vercel are emitted via the
  // landing slug registry below — listing them here too caused duplicate <loc>s.
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

// Root-level English-only pages (no hreflang alternates)
const ROOT_PAGES: { path: string; lastmod: string }[] = [
  { path: '/about',              lastmod: '2026-04-04' },
  { path: '/contact',            lastmod: '2026-04-04' },
  { path: '/free-image-hosting', lastmod: '2026-04-04' },
  { path: '/image-url-generator',lastmod: '2026-04-04' },
  { path: '/bulk-image-upload',  lastmod: '2026-04-04' },
  { path: '/content-guidelines', lastmod: '2026-04-04' },
  { path: '/png-to-url',         lastmod: '2026-04-04' },
  { path: '/jpg-to-url',         lastmod: '2026-04-04' },
  { path: '/gif-to-url',         lastmod: '2026-04-04' },
  { path: '/webp-to-url',        lastmod: '2026-04-04' },
  { path: '/photo-to-url',                    lastmod: '2026-04-04' },
  { path: '/screenshot-to-url',               lastmod: '2026-04-04' },
  // Use-case pages
  { path: '/image-hosting-for-ebay',           lastmod: '2026-04-04' },
  { path: '/image-hosting-for-discord',        lastmod: '2026-04-04' },
  { path: '/image-hosting-for-github-readme',  lastmod: '2026-04-04' },
  { path: '/image-hosting-for-email-signatures', lastmod: '2026-04-04' },
  { path: '/image-hosting-for-notion',         lastmod: '2026-04-04' },
  { path: '/image-hosting-for-newsletters',    lastmod: '2026-04-04' },
  { path: '/image-hosting-for-forums',         lastmod: '2026-04-04' },
  // AI pages
  { path: '/ai-image-hosting',                 lastmod: '2026-04-04' },
  { path: '/image-url-for-chatgpt',            lastmod: '2026-04-04' },
  // Feature pages
  { path: '/free-image-cdn',                   lastmod: '2026-04-04' },
  { path: '/permanent-image-hosting',          lastmod: '2026-04-04' },
  { path: '/anonymous-image-upload',           lastmod: '2026-04-04' },
  { path: '/direct-image-link',                lastmod: '2026-04-04' },
  { path: '/image-embed-code-generator',       lastmod: '2026-04-04' },
  // Comparison pages
  { path: '/imgur-alternative',                lastmod: '2026-04-04' },
  { path: '/imgbb-alternative',                lastmod: '2026-04-04' },
  // Platform pages
  { path: '/image-hosting-for-wordpress',      lastmod: '2026-04-04' },
  { path: '/image-hosting-for-shopify',        lastmod: '2026-04-04' },
  { path: '/image-hosting-for-google-sheets',  lastmod: '2026-04-04' },
  { path: '/image-hosting-for-google-forms',   lastmod: '2026-04-04' },
  { path: '/image-to-url-for-whatsapp',        lastmod: '2026-04-04' },
  // Note: Cluster A format-pair converters (png-to-jpg, jpg-to-png, webp↔jpg, webp↔png, png-to-webp, jpg-to-webp, png-to-pdf, jpg-to-pdf, heic-to-png, heic-to-pdf) and Cluster B utilities (image-compressor, image-resizer, image-to-base64, base64-to-image, favicon-generator) are now in the SLUGS landing registry and emit via the dynamic route below with all 27 locale variants.
  // Cluster C competitor alternatives + vs pages
  { path: '/postimages-alternative',           lastmod: '2026-04-18' },
  { path: '/google-photos-direct-link',        lastmod: '2026-04-18' },
  { path: '/dropbox-direct-image-link',        lastmod: '2026-04-18' },
  { path: '/imagetourl-vs-imgur',              lastmod: '2026-04-18' },
  { path: '/imagetourl-vs-imgbb',              lastmod: '2026-04-18' },
  { path: '/imagetourl-vs-cloudinary',         lastmod: '2026-04-18' },
  { path: '/imgur-vs-imgbb',                   lastmod: '2026-04-18' },
  // Cluster D platform use-case pages
  { path: '/image-hosting-for-reddit',         lastmod: '2026-04-18' },
  { path: '/image-hosting-for-twitter',        lastmod: '2026-04-18' },
  { path: '/image-hosting-for-instagram',      lastmod: '2026-04-18' },
  { path: '/image-hosting-for-pinterest',      lastmod: '2026-04-18' },
  { path: '/image-hosting-for-substack',       lastmod: '2026-04-18' },
  { path: '/image-hosting-for-medium',         lastmod: '2026-04-18' },
  { path: '/image-hosting-for-linkedin',       lastmod: '2026-04-18' },
  { path: '/image-hosting-for-webflow',        lastmod: '2026-04-18' },
  { path: '/image-hosting-for-squarespace',    lastmod: '2026-04-18' },
  { path: '/image-hosting-for-wix',            lastmod: '2026-04-18' },
  { path: '/image-hosting-for-framer',         lastmod: '2026-04-18' },
  { path: '/image-hosting-for-stack-overflow', lastmod: '2026-04-18' },
  { path: '/image-hosting-for-markdown',       lastmod: '2026-04-18' },
  { path: '/image-hosting-for-nextjs',         lastmod: '2026-04-18' },
  { path: '/image-hosting-for-jira',           lastmod: '2026-04-18' },
  // Cluster E developer / API pages
  { path: '/image-upload-api',                 lastmod: '2026-04-18' },
  { path: '/image-hosting-api-python',         lastmod: '2026-04-18' },
  { path: '/image-hosting-api-nodejs',         lastmod: '2026-04-18' },
  { path: '/image-hosting-api-php',            lastmod: '2026-04-18' },
  { path: '/image-hosting-api-curl',           lastmod: '2026-04-18' },
  { path: '/image-upload-zapier',              lastmod: '2026-04-18' },
  { path: '/image-upload-make',                lastmod: '2026-04-18' },
  { path: '/image-upload-n8n',                 lastmod: '2026-04-18' },
  { path: '/image-hosting-rest-api',           lastmod: '2026-04-18' },
  // Cluster F GEO Q&A pages
  { path: '/how-to-get-direct-url-for-image',      lastmod: '2026-04-18' },
  { path: '/how-to-share-image-as-link',           lastmod: '2026-04-18' },
  { path: '/how-to-embed-image-in-email',          lastmod: '2026-04-18' },
  { path: '/what-is-image-hotlinking',             lastmod: '2026-04-18' },
  { path: '/how-to-host-image-for-free',           lastmod: '2026-04-18' },
  { path: '/how-long-does-imagetourl-store-images',lastmod: '2026-04-18' },
  // Guides / pillar content
  { path: '/guides/jpg-vs-png-vs-webp-vs-avif',    lastmod: '2026-04-18' },
  { path: '/guides/image-lcp-optimization',        lastmod: '2026-04-15' },
  { path: '/guides/what-exif-leaks',               lastmod: '2026-04-12' },
  { path: '/guides/embed-images-in-notion',        lastmod: '2026-04-10' },
  { path: '/guides/why-reddit-strips-exif',        lastmod: '2026-04-08' },
  { path: '/guides/responsive-images-cheatsheet',  lastmod: '2026-04-05' },
  { path: '/guides/image-optimization-core-web-vitals', lastmod: '2026-04-02' },
  // Keyword landing pages (image downloader / extractor cluster)
  { path: '/image-downloader',  lastmod: '2026-04-27' },
  { path: '/photo-downloader',  lastmod: '2026-04-27' },
  { path: '/image-extractor',   lastmod: '2026-04-27' },
];

function buildRootUrlEntry(path: string, lastmod: string): string {
  // English-only landing pages: self-referential hreflang so Google can cluster them
  // as English content with x-default fallback.
  const url = escapeXml(SITE + path);
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />
  </url>`;
}

function buildUrlEntry(basePath: string, lastmod: string): string {
  const alternates = locales.map(loc =>
    `    <xhtml:link rel="alternate" hreflang="${loc}" href="${escapeXml(localeUrl(loc, basePath))}" />`
  ).join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(localeUrl(defaultLocale, basePath))}" />`;

  // Emit a <url> entry for EACH locale (Google requires each locale URL to have its own entry)
  return locales.map(loc => `  <url>
    <loc>${escapeXml(localeUrl(loc, basePath))}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
${xDefault}
  </url>`).join('\n');
}

export async function GET({ locals }: APIContext): Promise<Response> {
  const db = getDB(locals);

  let postRows: { id: string; slug: string; updated_at: string }[] = [];
  try {
    const result = await db
      .prepare(
        `SELECT id, slug, updated_at FROM posts
         WHERE status = 'published'
         ORDER BY published_at DESC, created_at DESC
         LIMIT 50000`,
      )
      .all<{ id: string; slug: string; updated_at: string }>();
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

  // Localized tool/landing pages — one <url> per (locale, pageKey) with
  // xhtml:link alternates pointing at each locale's translated slug.
  const landingLastmod = '2026-04-18';
  for (const pageKey of PAGE_KEYS) {
    // Landing pages canonicalize to a trailing-slash URL; emit the canonical
    // form so Google doesn't follow a 307 on every entry.
    const alternates = locales
      .map(loc => `    <xhtml:link rel="alternate" hreflang="${loc}" href="${escapeXml(`${SITE}/${loc}/${getSlug(pageKey, loc)}/`)}" />`)
      .join('\n');
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${SITE}/${defaultLocale}/${getSlug(pageKey, defaultLocale)}/`)}" />`;
    for (const loc of locales) {
      const locUrl = `${SITE}/${loc}/${getSlug(pageKey, loc)}/`;
      urlEntries.push(`  <url>
    <loc>${escapeXml(locUrl)}</loc>
    <lastmod>${landingLastmod}</lastmod>
${alternates}
${xDefault}
  </url>`);
    }
  }

  // Legacy: any ROOT_PAGES entries not covered by the registry stay as
  // English-only. (Most are covered; this is a safety net for edges.)
  const registrySlugs = new Set(PAGE_KEYS.map(k => `/${getSlug(k, defaultLocale)}`));
  for (const page of ROOT_PAGES) {
    if (registrySlugs.has(page.path)) continue;
    urlEntries.push(buildRootUrlEntry(page.path, page.lastmod));
  }

  // Blog posts — emit one <url> per (locale, slug). If translated slugs exist
  // in post_translations, use them; otherwise fall back to the English slug
  // under the locale prefix.
  let transRows: { post_id: string; locale: string; slug: string }[] = [];
  try {
    const result = await db
      .prepare('SELECT post_id, locale, slug FROM post_translations')
      .all<{ post_id: string; locale: string; slug: string }>();
    transRows = result.results ?? [];
  } catch {
    // post_translations table not migrated yet — fine, just skip translated blog URLs
  }
  const postIdBySlug = new Map<string, string>();
  for (const p of postRows as any[]) if (p.id) postIdBySlug.set(p.slug, p.id);
  const transBySlug = new Map<string, Map<string, string>>(); // postSlug -> (locale -> tSlug)
  for (const post of postRows) {
    const postId = (post as any).id;
    if (!postId) continue;
    const perLocale = new Map<string, string>();
    for (const t of transRows) if (t.post_id === postId) perLocale.set(t.locale, t.slug);
    transBySlug.set(post.slug, perLocale);
  }

  for (const post of postRows) {
    const perLocale = transBySlug.get(post.slug) ?? new Map<string, string>();
    const lastmod = toDateString(post.updated_at);
    const alternates = locales.map(loc => {
      const slug = loc === defaultLocale ? post.slug : (perLocale.get(loc) ?? post.slug);
      return `    <xhtml:link rel="alternate" hreflang="${loc}" href="${escapeXml(`${SITE}/${loc}/blog/${slug}`)}" />`;
    }).join('\n');
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${SITE}/${defaultLocale}/blog/${post.slug}`)}" />`;
    for (const loc of locales) {
      const slug = loc === defaultLocale ? post.slug : (perLocale.get(loc) ?? post.slug);
      urlEntries.push(`  <url>
    <loc>${escapeXml(`${SITE}/${loc}/blog/${slug}`)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
${xDefault}
  </url>`);
    }
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
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
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
