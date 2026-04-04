export const prerender = false;

import type { APIRoute } from 'astro';

const DISABLED = JSON.stringify({ error: 'API access is currently disabled.' });
const HEADERS = { 'Content-Type': 'application/json' };

export const GET: APIRoute = async () => {
  return new Response(DISABLED, { status: 403, headers: HEADERS });
};

export const POST: APIRoute = async () => {
  return new Response(DISABLED, { status: 403, headers: HEADERS });
};

export const DELETE: APIRoute = async () => {
  return new Response(DISABLED, { status: 403, headers: HEADERS });
};
