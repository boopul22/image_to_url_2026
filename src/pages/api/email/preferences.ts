export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';
import { ensureEmailPreferences } from '../../../lib/email-reminders';

type PreferenceRow = {
  marketing_opt_in: number;
  reminder_opt_in: number;
  marketing_consented_at: string | null;
  marketing_declined_at: string | null;
  reminder_prompt_snoozed_until: string | null;
  unsubscribed_at: string | null;
};

export const GET: APIRoute = async ({ locals }) => {
  if (!locals.user) return json({ error: 'Sign in required' }, 401);

  const db = getDB(locals);
  await ensureEmailPreferences(db, locals.user.id);
  const row = await getPreferences(db, locals.user.id);

  return json({ preferences: serializePreferences(row) });
};

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) return json({ error: 'Sign in required' }, 401);

  const db = getDB(locals);
  await ensureEmailPreferences(db, locals.user.id);

  const body = await request.json().catch(() => ({}));
  const action = String(body.action || '');

  switch (action) {
    case 'opt_in':
      await db
        .prepare(
          `UPDATE email_preferences
           SET marketing_opt_in = 1,
               reminder_opt_in = 1,
               marketing_consented_at = datetime('now'),
               marketing_declined_at = NULL,
               reminder_prompt_snoozed_until = NULL,
               unsubscribed_at = NULL,
               updated_at = datetime('now')
           WHERE user_id = ?`,
        )
        .bind(locals.user.id)
        .run();
      break;
    case 'decline':
      await db
        .prepare(
          `UPDATE email_preferences
           SET marketing_opt_in = 0,
               reminder_opt_in = 0,
               marketing_declined_at = datetime('now'),
               reminder_prompt_snoozed_until = NULL,
               updated_at = datetime('now')
           WHERE user_id = ?`,
        )
        .bind(locals.user.id)
        .run();
      break;
    case 'snooze':
      await db
        .prepare(
          `UPDATE email_preferences
           SET reminder_prompt_snoozed_until = datetime('now', '+30 days'),
               updated_at = datetime('now')
           WHERE user_id = ?`,
        )
        .bind(locals.user.id)
        .run();
      break;
    default:
      return json({ error: 'Invalid action' }, 400);
  }

  const row = await getPreferences(db, locals.user.id);
  return json({ preferences: serializePreferences(row) });
};

async function getPreferences(db: D1Database, userId: string): Promise<PreferenceRow> {
  const row = await db
    .prepare(
      `SELECT marketing_opt_in, reminder_opt_in, marketing_consented_at,
              marketing_declined_at, reminder_prompt_snoozed_until, unsubscribed_at
       FROM email_preferences
       WHERE user_id = ?`,
    )
    .bind(userId)
    .first<PreferenceRow>();

  if (!row) {
    throw new Error('Email preferences missing after initialization');
  }
  return row;
}

function serializePreferences(row: PreferenceRow) {
  const snoozedUntil = row.reminder_prompt_snoozed_until
    ? Date.parse(row.reminder_prompt_snoozed_until.replace(' ', 'T') + 'Z')
    : 0;
  const needsPrompt =
    !row.marketing_opt_in &&
    !row.marketing_consented_at &&
    !row.marketing_declined_at &&
    !row.unsubscribed_at &&
    (!snoozedUntil || snoozedUntil < Date.now());

  return {
    marketingOptIn: row.marketing_opt_in === 1,
    reminderOptIn: row.reminder_opt_in === 1,
    unsubscribed: Boolean(row.unsubscribed_at),
    needsPrompt,
  };
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, no-store',
    },
  });
}
