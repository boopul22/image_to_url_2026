export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../lib/db';
import { upsertReview, getUserReview } from '../../lib/reviews';

const MIN_BODY = 12;
const MAX_BODY = 600;
const MAX_ROLE = 40;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Returns the signed-in user's existing review (so the form can prefill / show status).
export const GET: APIRoute = async ({ locals }) => {
  if (!locals.user) return json({ error: 'Sign in required' }, 401);
  const db = getDB(locals);
  const review = await getUserReview(db, locals.user.id);
  return json({ review });
};

// Submit (or update) the signed-in user's review. Always lands as 'pending'.
export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) return json({ error: 'Sign in required' }, 401);

  let payload: { rating?: unknown; role?: unknown; body?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid request' }, 400);
  }

  const rating = Number(payload.rating);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return json({ error: 'Please choose a rating from 1 to 5 stars.' }, 400);
  }

  const body = typeof payload.body === 'string' ? payload.body.trim() : '';
  if (body.length < MIN_BODY) {
    return json({ error: `Your review is a little short — at least ${MIN_BODY} characters.` }, 400);
  }
  if (body.length > MAX_BODY) {
    return json({ error: `Please keep your review under ${MAX_BODY} characters.` }, 400);
  }

  let role: string | null =
    typeof payload.role === 'string' && payload.role.trim() ? payload.role.trim() : null;
  if (role && role.length > MAX_ROLE) role = role.slice(0, MAX_ROLE);

  const db = getDB(locals);
  await upsertReview(db, { userId: locals.user.id, rating, role, body });

  return json({ ok: true, message: 'Thanks! Your review was submitted and will appear once approved.' });
};
