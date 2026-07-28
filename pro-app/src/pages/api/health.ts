import type { APIRoute } from 'astro';
import { isPaddleCheckoutConfigured } from '../../lib/billing';
import { getProEnv } from '../../lib/env';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const env = getProEnv();
    const [result] = await Promise.all([
      env.PRO_DB.prepare('SELECT 1 AS healthy').first<{ healthy: number }>(),
      env.AUTH_DB.prepare('SELECT 1 AS healthy').first(),
      env.PRO_STORAGE.list({ limit: 1 }),
    ]);

    return Response.json({
      ok: result?.healthy === 1,
      service: 'imagetourl-pro-app',
      database: 'imagetourl-pro-db',
      auth: 'imagetourl-db',
      storage: 'imagetourl-pro-storage',
      billing: isPaddleCheckoutConfigured(env) ? 'configured' : 'disabled'
    });
  } catch {
    return Response.json(
      {
        ok: false,
        service: 'imagetourl-pro-app',
        database: 'imagetourl-pro-db',
        auth: 'imagetourl-db',
        storage: 'imagetourl-pro-storage'
      },
      { status: 503 }
    );
  }
};
