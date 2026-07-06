import { generateRandomToken } from './crypto';

type EmailBinding = {
  send: (message: {
    to: string | string[];
    from: string | { email: string; name?: string };
    replyTo?: string;
    subject: string;
    html: string;
    text: string;
    headers?: Record<string, string>;
  }) => Promise<{ messageId?: string } | unknown>;
};

type ReminderRecipient = {
  id: string;
  email: string;
  name: string;
  unsubscribe_token: string;
  last_activity_at: string;
  reason: 'inactive' | 'no_uploads';
};

export const REMINDER_CAMPAIGN_KEY = 'inactive-user-reminder-v1';
export const REMINDER_FROM = 'updates@imagetourl.cloud';
export const REMINDER_FROM_NAME = 'ImageToURL Updates';
export const REMINDER_SUBJECT = 'Need a quick image link?';
const REMINDER_COOLDOWN_DAYS = 21;

export async function ensureEmailPreferences(db: D1Database, userId: string): Promise<void> {
  await db
    .prepare(
      `INSERT OR IGNORE INTO email_preferences (user_id, unsubscribe_token)
       VALUES (?, ?)`,
    )
    .bind(userId, generateRandomToken(24))
    .run();
}

export async function sendReminderBatch(opts: {
  db: D1Database;
  email?: EmailBinding;
  baseUrl: string;
  from?: string;
  limit: number;
  dryRun?: boolean;
}): Promise<{
  ok: true;
  campaignKey: string;
  skipped?: string;
  dryRun: boolean;
  selected: number;
  sent: number;
  failed: number;
}> {
  const today = new Date().toISOString().slice(0, 10);
  const dryRun = opts.dryRun ?? false;
  const limit = Math.max(1, Math.min(opts.limit, 100));

  const state = await opts.db
    .prepare('SELECT last_run_date FROM email_campaign_state WHERE campaign_key = ?')
    .bind(REMINDER_CAMPAIGN_KEY)
    .first<{ last_run_date: string | null }>();

  if (!dryRun && state?.last_run_date === today) {
    return {
      ok: true,
      campaignKey: REMINDER_CAMPAIGN_KEY,
      skipped: 'already_ran_today',
      dryRun,
      selected: 0,
      sent: 0,
      failed: 0,
    };
  }

  if (!dryRun) {
    await opts.db
      .prepare(
        `INSERT INTO email_campaign_state (campaign_key, last_run_date, last_started_at, updated_at)
         VALUES (?, ?, datetime('now'), datetime('now'))
         ON CONFLICT(campaign_key) DO UPDATE SET
           last_run_date = excluded.last_run_date,
           last_started_at = excluded.last_started_at,
           updated_at = datetime('now')`,
      )
      .bind(REMINDER_CAMPAIGN_KEY, today)
      .run();
  }

  const recipients = await eligibleReminderRecipients(opts.db, limit);
  let sent = 0;
  let failed = 0;

  for (const recipient of recipients) {
    const message = buildReminderEmail({
      recipient,
      baseUrl: opts.baseUrl,
      from: opts.from || REMINDER_FROM,
    });

    if (dryRun) {
      continue;
    }

    try {
      if (!opts.email) {
        throw new Error('EMAIL binding is not configured');
      }
      const result = (await opts.email.send(message)) as { messageId?: string };
      await logReminder(opts.db, recipient, message.subject, 'sent', result?.messageId);
      sent += 1;
    } catch (err) {
      failed += 1;
      await logReminder(
        opts.db,
        recipient,
        message.subject,
        'error',
        null,
        err instanceof Error ? err.message : String(err),
      );
    }
  }

  if (!dryRun) {
    await opts.db
      .prepare(
        `UPDATE email_campaign_state
         SET last_finished_at = datetime('now'), updated_at = datetime('now')
         WHERE campaign_key = ?`,
      )
      .bind(REMINDER_CAMPAIGN_KEY)
      .run();
  }

  return {
    ok: true,
    campaignKey: REMINDER_CAMPAIGN_KEY,
    dryRun,
    selected: recipients.length,
    sent,
    failed,
  };
}

async function eligibleReminderRecipients(db: D1Database, limit: number): Promise<ReminderRecipient[]> {
  const result = await db
    .prepare(
      `WITH last_upload AS (
         SELECT user_id, MAX(created_at) AS last_upload_at
         FROM images
         WHERE user_id IS NOT NULL AND deleted_at IS NULL
         GROUP BY user_id
       )
       SELECT
         u.id,
         u.email,
         u.name,
         ep.unsubscribe_token,
         COALESCE(last_upload.last_upload_at, u.created_at) AS last_activity_at,
         CASE WHEN last_upload.last_upload_at IS NULL THEN 'no_uploads' ELSE 'inactive' END AS reason
       FROM users u
       JOIN email_preferences ep ON ep.user_id = u.id
       LEFT JOIN last_upload ON last_upload.user_id = u.id
       WHERE u.is_banned = 0
         AND u.email != ''
         AND ep.marketing_opt_in = 1
         AND ep.reminder_opt_in = 1
         AND ep.unsubscribed_at IS NULL
         AND datetime(COALESCE(last_upload.last_upload_at, u.created_at)) <= datetime('now', '-14 days')
         AND NOT EXISTS (
           SELECT 1
           FROM email_reminder_sends ers
           WHERE ers.user_id = u.id
             AND ers.campaign_key = ?
             AND ers.status = 'sent'
             AND datetime(ers.created_at) >= datetime('now', ?)
         )
       ORDER BY datetime(COALESCE(last_upload.last_upload_at, u.created_at)) ASC
       LIMIT ?`,
    )
    .bind(REMINDER_CAMPAIGN_KEY, `-${REMINDER_COOLDOWN_DAYS} days`, limit)
    .all<ReminderRecipient>();

  return result.results || [];
}

function buildReminderEmail(opts: {
  recipient: ReminderRecipient;
  baseUrl: string;
  from: string;
}): {
  to: string;
  from: { email: string; name: string };
  replyTo: string;
  subject: string;
  html: string;
  text: string;
  headers: Record<string, string>;
} {
  const firstName = firstNameFor(opts.recipient.name);
  const siteUrl = normalizeBaseUrl(opts.baseUrl);
  const uploadUrl = `${siteUrl}/en/`;
  const unsubscribeUrl = `${siteUrl}/email/unsubscribe?token=${encodeURIComponent(opts.recipient.unsubscribe_token)}`;
  const reasonLine =
    opts.recipient.reason === 'no_uploads'
      ? 'Your account is ready whenever you need a clean image link.'
      : 'It has been a little while since your last upload.';

  const text = [
    `Hi ${firstName},`,
    '',
    `${reasonLine} ImageToURL can turn a screenshot, product image, or email graphic into a shareable CDN link in seconds.`,
    '',
    `Upload an image: ${uploadUrl}`,
    '',
    'You are receiving this because you created an ImageToURL account.',
    `Unsubscribe from reminder emails: ${unsubscribeUrl}`,
  ].join('\n');

  const html = `<!doctype html>
<html>
  <body style="margin:0;background:#f8fafc;color:#18181b;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:600px;margin:0 auto;padding:32px 20px;">
      <div style="border:1px solid #e5e7eb;background:#ffffff;padding:28px;">
        <p style="margin:0 0 18px;font-size:14px;color:#71717a;">ImageToURL</p>
        <h1 style="margin:0 0 16px;font-size:28px;line-height:1.15;color:#111827;">Need a quick image link?</h1>
        <p style="margin:0 0 14px;font-size:16px;line-height:1.6;">Hi ${escapeHtml(firstName)},</p>
        <p style="margin:0 0 20px;font-size:16px;line-height:1.6;">${escapeHtml(reasonLine)} ImageToURL can turn a screenshot, product image, or email graphic into a shareable CDN link in seconds.</p>
        <p style="margin:28px 0;">
          <a href="${uploadUrl}" style="display:inline-block;background:#e11d48;color:#ffffff;text-decoration:none;padding:12px 18px;font-weight:700;">Upload an image</a>
        </p>
        <p style="margin:24px 0 0;font-size:13px;line-height:1.5;color:#71717a;">You are receiving this because you created an ImageToURL account.</p>
        <p style="margin:8px 0 0;font-size:13px;line-height:1.5;color:#71717a;">
          <a href="${unsubscribeUrl}" style="color:#be123c;">Unsubscribe from reminder emails</a>
        </p>
      </div>
    </div>
  </body>
</html>`;

  return {
    to: opts.recipient.email,
    from: { email: opts.from, name: REMINDER_FROM_NAME },
    replyTo: opts.from,
    subject: REMINDER_SUBJECT,
    html,
    text,
    headers: {
      'List-Unsubscribe': `<${unsubscribeUrl}>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      'X-Campaign-ID': REMINDER_CAMPAIGN_KEY,
    },
  };
}

async function logReminder(
  db: D1Database,
  recipient: ReminderRecipient,
  subject: string,
  status: string,
  providerMessageId?: string | null,
  error?: string | null,
): Promise<void> {
  await db
    .prepare(
      `INSERT INTO email_reminder_sends
         (user_id, email, campaign_key, subject, status, provider_message_id, error)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      recipient.id,
      recipient.email,
      REMINDER_CAMPAIGN_KEY,
      subject,
      status,
      providerMessageId || null,
      error ? error.slice(0, 1000) : null,
    )
    .run();
}

function firstNameFor(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return 'there';
  return trimmed.split(/\s+/)[0] || 'there';
}

function normalizeBaseUrl(url: string): string {
  return (url || 'https://imagetourl.cloud').replace(/\/+$/, '');
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
