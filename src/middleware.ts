import { defineMiddleware } from 'astro:middleware';
import { getSession } from './lib/session';
import { verifyApiKey } from './lib/api-key';
import { getDB } from './lib/db';
import { getLocaleFromPath } from './i18n/utils';
import { defaultLocale } from './i18n/config';

export const onRequest = defineMiddleware(async ({ request, cookies, locals, redirect }, next) => {
  const url0 = new URL(request.url);
  const path = url0.pathname;

  // Redirect bare / to /en/ (manual i18n routing)
  if (path === '/') {
    return redirect('/en/', 302);
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

    // For API routes, try Bearer token if no session
    const url = new URL(request.url);
    if (!locals.user && url.pathname.startsWith('/api/') && !url.pathname.startsWith('/api/auth/')) {
      const authHeader = request.headers.get('authorization');
      if (authHeader?.startsWith('Bearer itu_')) {
        try {
          const result = await verifyApiKey(db, authHeader.slice(7));
          if (result) {
            locals.user = {
              id: result.user.id,
              googleId: result.user.googleId,
              name: result.user.name,
              email: result.user.email,
              avatarUrl: result.user.avatarUrl,
              role: result.user.role as 'user' | 'admin',
            };
          }
        } catch {
          // Invalid API key
        }
      }
    }
  }

  // Protect /dashboard routes
  const url = new URL(request.url);
  if (url.pathname.startsWith('/dashboard') && !locals.user) {
    return redirect('/api/auth/login', 302);
  }

  // Protect /admin routes
  if (url.pathname.startsWith('/admin')) {
    if (!locals.user || locals.user.role !== 'admin') {
      return new Response('Forbidden', { status: 403 });
    }
  }

  const response = await next();

  // Add cache headers for public HTML pages (SEO performance)
  // Skip API, admin, dashboard routes — those must never be cached
  if (
    !path.startsWith('/api/') &&
    !path.startsWith('/admin') &&
    !path.startsWith('/dashboard') &&
    response.headers.get('content-type')?.includes('text/html')
  ) {
    if (locals.user) {
      // Logged-in: don't cache at CDN (personalized nav), but allow browser short cache
      response.headers.set('Cache-Control', 'private, max-age=0, must-revalidate');
    } else {
      // Anonymous: cache at CDN edge for fast crawling & page loads
      response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400');
    }
  }

  return response;
});
