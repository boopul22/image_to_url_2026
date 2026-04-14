import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = ({ locals }) => {
  const u = locals.user;
  const body = u
    ? { user: { name: u.name, avatarUrl: u.avatarUrl, role: u.role } }
    : { user: null };

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, no-store',
    },
  });
};
