import { defineMiddleware } from 'astro:middleware';
import { getSession } from './lib/session';
import { getDB } from './lib/db';
import { getLocaleFromPath } from './i18n/utils';
import { defaultLocale, locales, type Locale } from './i18n/config';
import { resolveSlug, ownerLocaleForSlug } from './i18n/landing/registry';

// Paths that never get a locale prefix. Anything else at the root is 301'd to /en/*.
const NON_LOCALIZED_PREFIXES = ['/admin', '/dashboard', '/api/', '/uploads/', '/p/', '/__cdn/', '/guides/'];
const NON_LOCALIZED_EXACT = new Set([
  '/sitemap.xml', '/image-sitemap.xml', '/robots.txt', '/favicon.ico', '/site.webmanifest',
  '/llms.txt', '/llms-full.txt',
  // Astro's 404 page — during static build, prerender visits /404 to build
  // dist/client/404.html. If the catch-all redirects it to /en/404, the built
  // file becomes a redirect body that Cloudflare Pages then serves for EVERY
  // unmatched URL. Must stay non-localized so the real 404 page is built.
  '/404',
  // Cluster C competitor alts + vs pages (not yet in landing registry)
  '/postimages-alternative', '/google-photos-direct-link', '/dropbox-direct-image-link',
  '/imagetourl-vs-imgur', '/imagetourl-vs-imgbb', '/imagetourl-vs-cloudinary', '/imgur-vs-imgbb',
  // Cluster D platform use-cases
  '/image-hosting-for-reddit', '/image-hosting-for-twitter', '/image-hosting-for-instagram',
  '/image-hosting-for-pinterest', '/image-hosting-for-substack', '/image-hosting-for-medium',
  '/image-hosting-for-linkedin', '/image-hosting-for-webflow', '/image-hosting-for-squarespace',
  '/image-hosting-for-wix', '/image-hosting-for-framer', '/image-hosting-for-stack-overflow',
  '/image-hosting-for-markdown', '/image-hosting-for-nextjs', '/image-hosting-for-jira',
  // Cluster E dev / API pages
  '/image-upload-api', '/image-hosting-api-python', '/image-hosting-api-nodejs', '/image-hosting-api-php',
  '/image-hosting-api-curl', '/image-upload-zapier', '/image-upload-make', '/image-upload-n8n',
  '/image-hosting-rest-api',
  // Cluster F GEO Q&A pages
  '/how-to-get-direct-url-for-image', '/how-to-share-image-as-link', '/how-to-embed-image-in-email',
  '/what-is-image-hotlinking', '/how-to-host-image-for-free', '/how-long-does-imagetourl-store-images',
]);

function isNonLocalized(path: string): boolean {
  // Match with and without trailing slash — Cloudflare normalizes to trailing
  // slash, so /postimages-alternative/ arrives here but the set stores bare paths.
  const bare = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  if (NON_LOCALIZED_EXACT.has(bare)) return true;
  if (path.startsWith('/_')) return true; // _astro, _image etc
  if (/\.[a-zA-Z0-9]{2,5}$/.test(path) && !path.endsWith('.html')) return true; // static assets
  return NON_LOCALIZED_PREFIXES.some(p => path === p.replace(/\/$/, '') || path.startsWith(p));
}

export const onRequest = defineMiddleware(async ({ request, cookies, locals, redirect }, next) => {
  const url0 = new URL(request.url);
  const path = url0.pathname;

  // Redirect bare / to /en/ (manual i18n routing)
  if (path === '/') {
    return redirect('/en/', 301);
  }

  // Legacy: /zh/* -> /zh-Hans/* (locale was renamed to BCP-47 Simplified Chinese)
  if (path === '/zh' || path.startsWith('/zh/')) {
    const tail = path === '/zh' ? '/' : path.slice(3);
    return redirect(`/zh-Hans${tail}`, 301);
  }

  // Unsupported locale Google guessed: /uk/* -> /en/*
  if (path === '/uk' || path.startsWith('/uk/')) {
    const tail = path === '/uk' ? '/' : path.slice(3);
    return redirect(`/en${tail}${url0.search}`, 301);
  }

  // Legacy locale-prefixed auth links (/en/auth/login etc.) — auth lives under /api/auth/*
  {
    const m = path.match(/^\/([a-z]{2,3}(?:-[A-Za-z]+)?)\/(auth\/.+)$/);
    if (m && (locales as readonly string[]).includes(m[1])) {
      return redirect(`/api/${m[2]}${url0.search}`, 301);
    }
  }

  // Cross-locale slug redirects: /{locale}/{translated-slug}/ where the slug
  // belongs to a different locale's SLUGS (e.g. /ar/<farsi-slug>/). 301 to the
  // locale that owns the slug so Google can reconcile instead of seeing 404s.
  // Built from an Ahrefs crawl that surfaced ~35k of these cross-linked URLs.
  {
    const seg = path.split('/');
    if (
      seg.length >= 3 &&
      (locales as readonly string[]).includes(seg[1]) &&
      seg[2] &&
      !seg[3] // single-slug page, not nested (blog, guides, etc.)
    ) {
      const loc = seg[1] as Locale;
      const rawSlug = seg[2];
      let decoded = rawSlug;
      try { decoded = decodeURIComponent(rawSlug); } catch { /* keep raw */ }
      if (!resolveSlug(loc, decoded)) {
        const owner = ownerLocaleForSlug(decoded);
        if (owner && owner !== loc) {
          return redirect(`/${owner}/${rawSlug}/${url0.search}`, 301);
        }
      }
    }
  }

  // Catch-all: any non-locale-prefixed public path → /en/<path>
  // Applies to tool pages, blog, legal pages, etc. Excludes admin/api/assets.
  const firstSeg = path.split('/')[1];
  const hasLocalePrefix = locales.includes(firstSeg as (typeof locales)[number]);
  if (!hasLocalePrefix && !isNonLocalized(path)) {
    const cleaned = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
    return redirect(`/en${cleaned}${url0.search}`, 301);
  }

  // Locale detection — force English for admin/dashboard/api routes
  if (path.startsWith('/admin') || path.startsWith('/dashboard') || path.startsWith('/api/')) {
    locals.locale = defaultLocale;
  } else {
    locals.locale = getLocaleFromPath(path);
  }

  let db: D1Database | null = null;

  try {
    db = getDB(locals);
  } catch {
    // D1 not available
  }

  if (db) {
    // Try session cookie first
    const token = cookies.get('session')?.value;
    if (token) {
      try {
        const user = await getSession(db, token);
        if (user) {
          locals.user = user;
        }
      } catch {
        // Invalid session
      }
    }

    // API key auth — disabled for now
    // Bearer token authentication is not available at this time.
  }

  // Protect /dashboard routes (pages + API)
  const url = new URL(request.url);
  if ((url.pathname.startsWith('/dashboard') || url.pathname.startsWith('/api/dashboard/')) && !locals.user) {
    if (url.pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Authentication required' }), {
        status: 401, headers: { 'Content-Type': 'application/json' },
      });
    }
    return redirect('/api/auth/login', 302);
  }

  // Protect /admin routes (pages + API)
  if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/api/admin/')) {
    if (!locals.user || locals.user.role !== 'admin') {
      if (url.pathname.startsWith('/api/')) {
        return new Response(JSON.stringify({ error: 'Forbidden' }), {
          status: 403, headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response('Forbidden', { status: 403 });
    }
  }

  let response = await next();

  // 404 → 410 Gone for URL patterns that are permanently removed. Tells Google
  // to drop them from the index instead of retrying. Covers:
  //   • /anonymous/* — deleted upload URLs
  //   • /<locale>/tools/* — old URL pattern (pages moved to /<locale>/<slug>/)
  //   • /<locale>/… with percent-encoded non-ASCII slug — cross-locale pollution
  //     from an earlier translation run where slugs got retranslated
  //   • /en/use-cases/* — removed section
  //   • WordPress probe paths — never existed, pure bot traffic
  if (response.status === 404 && !path.startsWith('/api/')) {
    let gone = false;
    if (path.startsWith('/anonymous/')) gone = true;
    else if (path.startsWith('/wp-') || path.startsWith('/wordpress/') || /\.(?:php|asp|aspx|jsp|cgi)$/i.test(path)) gone = true;
    else if (path.startsWith('/en/use-cases/')) gone = true;
    else {
      const seg = path.split('/');
      const loc = seg[1];
      if ((locales as readonly string[]).includes(loc)) {
        // /<locale>/tools/* — legacy URL pattern, permanently removed
        if (seg[2] === 'tools') gone = true;
        // Cross-locale slug pollution: path contains percent-encoded non-ASCII
        // (e.g. /de/%E0%A4%AC%E0%A4%B2%E0%A5%8D%E0%A4%95-...). These are stale
        // slugs from earlier translation runs that no longer resolve in any locale.
        else if (/%[89A-F][0-9A-F]/i.test(path)) gone = true;
      }
    }
    if (gone) {
      return new Response(
        '<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Gone</title></head><body><h1>410 Gone</h1><p>This URL has been permanently removed. <a href="/en/">Go to homepage</a>.</p></body></html>',
        {
          status: 410,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'X-Robots-Tag': 'noindex',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
          },
        },
      );
    }
  }

  // Dev-only: rewrite cross-origin CDN image URLs through the Vite dev proxy
  // so Chrome's ORB doesn't block them on localhost. Production HTML is untouched.
  if (
    import.meta.env.DEV &&
    response.headers.get('content-type')?.includes('text/html')
  ) {
    const html = await response.text();
    const rewritten = html.replaceAll('https://cdn.imagetourl.cloud/', '/__cdn/');
    response = new Response(rewritten, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }

  // Security headers — all responses
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // CSP — single source of truth (previously also duplicated in public/_headers).
  // Report-only for now; promote to enforcing after a clean week of reports.
  response.headers.set(
    'Content-Security-Policy-Report-Only',
    "default-src 'self'; " +
      "img-src 'self' data: blob: https://*.googleusercontent.com https://imagetourl.cloud https://cdn.imagetourl.cloud https://*.cloudflare.com https://*.googlesyndication.com https://*.doubleclick.net; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' data: https://fonts.gstatic.com; " +
      "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://pagead2.googlesyndication.com https://*.googlesyndication.com https://partner.googleadservices.com https://tpc.googlesyndication.com; " +
      "connect-src 'self' https://cloudflareinsights.com https://static.cloudflareinsights.com https://pagead2.googlesyndication.com; " +
      "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com; " +
      "frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'",
  );

  // Add cache headers for public HTML pages (SEO performance)
  // Skip API, admin, dashboard routes — those must never be cached
  if (
    !path.startsWith('/api/') &&
    !path.startsWith('/admin') &&
    !path.startsWith('/dashboard') &&
    response.headers.get('content-type')?.includes('text/html')
  ) {
    if (locals.user) {
      // Logged-in: don't cache at CDN (personalized nav), browser must revalidate
      response.headers.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    } else if (response.status === 200) {
      // Anonymous 200: cache at CDN edge for fast crawling & page loads.
      // No `Vary: Cookie` — anonymous responses don't depend on cookies, and Vary
      // would fragment the edge cache by every cookie value (killing HIT rate).
      response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400');
    } else {
      // 301/404/410: short CDN cache so fixes propagate quickly. Don't want a
      // stale 404 sticking at the edge for an hour after we ship a 301 fix.
      response.headers.set('Cache-Control', 'public, max-age=60, s-maxage=60');
    }
  }

  return response;
});
