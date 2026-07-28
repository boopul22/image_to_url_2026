export const prerender = false;

import type { APIRoute } from 'astro';

/**
 * Session introspection for first-party ImageToURL services.
 *
 * Authentication is still performed by the main site's middleware against the
 * existing users and sessions tables. This endpoint only exposes the resolved
 * account to server-side consumers such as pro.imagetourl.cloud.
 */
export const GET: APIRoute = async ({ locals }) => {
  const user = locals.user;

  if (!user) {
    return Response.json(
      { user: null },
      {
        status: 401,
        headers: { 'Cache-Control': 'private, no-store' },
      },
    );
  }

  return Response.json(
    {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl,
        role: user.role,
      },
    },
    {
      headers: { 'Cache-Control': 'private, no-store' },
    },
  );
};
