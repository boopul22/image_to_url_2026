export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';
import {
  listReviewsForAdmin,
  setReviewStatus,
  setReviewFeatured,
  deleteReview,
} from '../../../lib/reviews';

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function requireAdmin(locals: App.Locals): Response | null {
  if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Forbidden' }, 403);
  return null;
}

export const GET: APIRoute = async ({ url, locals }) => {
  const forbidden = requireAdmin(locals);
  if (forbidden) return forbidden;
  const db = getDB(locals);
  const status = url.searchParams.get('status');
  const reviews = await listReviewsForAdmin(db, status);
  return json({ reviews });
};

export const PATCH: APIRoute = async ({ request, locals }) => {
  const forbidden = requireAdmin(locals);
  if (forbidden) return forbidden;

  const { id, action } = await request.json();
  if (!id || !action) return json({ error: 'id and action required' }, 400);

  const db = getDB(locals);
  switch (action) {
    case 'approve':
      await setReviewStatus(db, id, 'approved');
      break;
    case 'reject':
      await setReviewStatus(db, id, 'rejected');
      break;
    case 'pending':
      await setReviewStatus(db, id, 'pending');
      break;
    case 'feature':
      await setReviewFeatured(db, id, true);
      break;
    case 'unfeature':
      await setReviewFeatured(db, id, false);
      break;
    case 'delete':
      await deleteReview(db, id);
      break;
    default:
      return json({ error: 'Invalid action' }, 400);
  }
  return json({ ok: true });
};
