import type { APIRoute } from 'astro';
import { isPaddleCheckoutConfigured } from '../../lib/billing';
import { getProEnv } from '../../lib/env';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const env = getProEnv();
    const [result, authResponse] = await Promise.all([
      env.PRO_DB.prepare('SELECT 1 AS healthy').first<{ healthy: number }>(),
      env.AUTH_API.fetch(
        new Request(new URL('/api/auth/session', env.AUTH_API_ORIGIN), {
          method: 'GET',
          redirect: 'manual',
        })
      ),
      env.PRO_STORAGE.list({ limit: 1 }),
    ]);

    return Response.json({
      ok: result?.healthy === 1 && authResponse.status === 401,
      service: 'imagetourl-pro-app',
      database: 'imagetourl-pro-db',
      auth: 'https://imagetourl.cloud/api/auth/session',
      storage: 'imagetourl-pro-storage',
      billing: isPaddleCheckoutConfigured(env) ? 'configured' : 'disabled'
    });
  } catch (error) {
    console.error('Pro health dependency check failed', error);
    return Response.json(
      {
        ok: false,
        service: 'imagetourl-pro-app',
        database: 'imagetourl-pro-db',
        auth: 'https://imagetourl.cloud/api/auth/session',
        storage: 'imagetourl-pro-storage'
      },
      { status: 503 }
    );
  }
};
