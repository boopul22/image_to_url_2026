export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';
import { getEnv } from '../../../lib/env';
import { REMINDER_FROM, sendReminderBatch } from '../../../lib/email-reminders';

type ReminderEnv = Record<string, string> & {
  CRON_SECRET?: string;
  EMAIL?: {
    send: (message: unknown) => Promise<unknown>;
  };
  EMAIL_FROM?: string;
  SITE_URL?: string;
  MARKETING_REMINDERS_DAILY_LIMIT?: string;
};

async function handle(request: Request, locals: App.Locals, url: URL): Promise<Response> {
  const env = getEnv(locals) as unknown as ReminderEnv;
  const expected = env.CRON_SECRET;
  if (!expected) {
    return json({ error: 'CRON_SECRET not configured' }, 500);
  }

  const auth = request.headers.get('authorization') || '';
  if (auth !== `Bearer ${expected}`) {
    return json({ error: 'Unauthorized' }, 401);
  }

  const db = getDB(locals);
  const queryLimit = Number(url.searchParams.get('limit') || '');
  const envLimit = Number(env.MARKETING_REMINDERS_DAILY_LIMIT || '');
  const limit = Number.isFinite(queryLimit) && queryLimit > 0
    ? queryLimit
    : Number.isFinite(envLimit) && envLimit > 0
      ? envLimit
      : 25;

  const dryRun = url.searchParams.get('dryRun') === '1';
  const result = await sendReminderBatch({
    db,
    email: env.EMAIL as any,
    baseUrl: env.SITE_URL || 'https://imagetourl.cloud',
    from: env.EMAIL_FROM || REMINDER_FROM,
    limit,
    dryRun,
  });

  return json(result);
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = ({ request, locals, url }) => handle(request, locals, url);
export const GET: APIRoute = ({ request, locals, url }) => handle(request, locals, url);
