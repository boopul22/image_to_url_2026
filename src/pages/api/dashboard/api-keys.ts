export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../lib/db';
import { createApiKey, revokeApiKey, listApiKeys } from '../../../lib/api-key';

export const GET: APIRoute = async ({ locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);
  const keys = await listApiKeys(db, locals.user.id);

  return new Response(JSON.stringify({ keys }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name } = await request.json();
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return new Response(JSON.stringify({ error: 'Key name is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);
  const result = await createApiKey(db, locals.user.id, name.trim());

  return new Response(
    JSON.stringify({
      key: result.raw,
      id: result.id,
      prefix: result.prefix,
      name: name.trim(),
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};

export const DELETE: APIRoute = async ({ request, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { id } = await request.json();
  if (!id) {
    return new Response(JSON.stringify({ error: 'Key ID required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);
  const revoked = await revokeApiKey(db, id, locals.user.id);

  if (!revoked) {
    return new Response(JSON.stringify({ error: 'Key not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
