export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../lib/db';

export const GET: APIRoute = async ({ url, locals }) => {
  const token = url.searchParams.get('token') || '';
  if (!/^[a-f0-9]{48}$/i.test(token)) {
    return htmlPage('Invalid unsubscribe link', 'This unsubscribe link is invalid or incomplete.', 400);
  }

  const db = getDB(locals);
  const result = await db
    .prepare(
      `UPDATE email_preferences
       SET marketing_opt_in = 0,
           reminder_opt_in = 0,
           marketing_declined_at = COALESCE(marketing_declined_at, datetime('now')),
           unsubscribed_at = COALESCE(unsubscribed_at, datetime('now')),
           updated_at = datetime('now')
       WHERE unsubscribe_token = ?`,
    )
    .bind(token)
    .run();

  if (!result.meta.changes) {
    return htmlPage('Already handled', 'This unsubscribe link was not found. You may already be unsubscribed.', 404);
  }

  return htmlPage(
    'You are unsubscribed',
    'Reminder and marketing emails from ImageToURL have been turned off for this account.',
  );
};

function htmlPage(title: string, message: string, status = 200): Response {
  const escapedTitle = escapeHtml(title);
  const escapedMessage = escapeHtml(message);
  return new Response(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapedTitle} - ImageToURL</title>
  </head>
  <body style="margin:0;background:#fafafa;color:#18181b;font-family:Arial,Helvetica,sans-serif;">
    <main style="min-height:100vh;display:grid;place-items:center;padding:24px;">
      <section style="max-width:520px;border:1px solid #e5e7eb;background:#fff;padding:28px;">
        <p style="margin:0 0 12px;color:#71717a;font-size:14px;">ImageToURL</p>
        <h1 style="margin:0 0 12px;font-size:28px;line-height:1.15;">${escapedTitle}</h1>
        <p style="margin:0 0 22px;color:#52525b;line-height:1.6;">${escapedMessage}</p>
        <a href="/en/" style="color:#be123c;font-weight:700;">Return to ImageToURL</a>
      </section>
    </main>
  </body>
</html>`, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
