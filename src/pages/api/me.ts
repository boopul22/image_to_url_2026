import type { APIRoute } from 'astro';
import { getDB } from '../../lib/db';
import { getUploadUsage } from '../../lib/upload-limits';

export const prerender = false;

export const GET: APIRoute = async ({ locals, request }) => {
  const u = locals.user;

  // Report the caller's current upload quota so the uploader can pre-slice a
  // bulk selection to what fits (extras get labelled "skipped" up front). The
  // server still enforces per file — this is UX only. Computed with the SAME
  // 24h/branded_of query the enforcer uses, so it can't drift.
  let upload = null;
  try {
    upload = await getUploadUsage(getDB(locals), u, request);
  } catch {
    // Best-effort — if the count fails the client falls back to pure server
    // enforcement (treats remaining as unknown).
  }

  const body = {
    user: u ? { name: u.name, avatarUrl: u.avatarUrl, role: u.role } : null,
    upload,
  };

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, no-store',
    },
  });
};
