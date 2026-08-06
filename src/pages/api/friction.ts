export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../lib/db';

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function id(): string {
  return crypto.randomUUID().replace(/-/g, '').slice(0, 16);
}

/** Lightweight post-upload friction answers for CRO (win 17). */
export const POST: APIRoute = async ({ request, locals }) => {
  let payload: { answer?: unknown; path?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid request' }, 400);
  }

  const answer = typeof payload.answer === 'string' ? payload.answer.trim().slice(0, 200) : '';
  if (answer.length < 2) return json({ error: 'Answer required' }, 400);
  const path = typeof payload.path === 'string' ? payload.path.trim().slice(0, 200) : null;

  try {
    const db = getDB(locals);
    await db
      .prepare(
        `CREATE TABLE IF NOT EXISTS friction_feedback (
          id TEXT PRIMARY KEY,
          answer TEXT NOT NULL,
          path TEXT,
          created_at TEXT DEFAULT (datetime('now'))
        )`,
      )
      .run();
    await db
      .prepare(`INSERT INTO friction_feedback (id, answer, path) VALUES (?, ?, ?)`)
      .bind(id(), answer, path)
      .run();
  } catch (err) {
    console.error('friction feedback write failed', err);
    // Still ACK — CRO capture should never block the upload UX.
  }

  return json({ ok: true });
};
