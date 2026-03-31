import { defineMiddleware } from 'astro:middleware';
import { getSession } from './lib/session';
import { verifyApiKey } from './lib/api-key';

export const onRequest = defineMiddleware(async ({ request, cookies, locals, redirect }, next) => {
  let db: D1Database | null = null;

  try {
    db = (locals as any).runtime?.env?.DB ?? null;
  } catch {
    // runtime.env not available in dev mode
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

  return next();
});
