export const prerender = false;

import type { APIRoute } from 'astro';
import { getProEnv } from '../../lib/env';
import { isSameOriginMutation, json, requireUser } from '../../lib/http';

export const GET: APIRoute = async ({ locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	const preferences = await getProEnv().PRO_DB.prepare(
		`SELECT custom_domain, smart_optimization, keep_originals, private_default
		   FROM workspace_preferences WHERE user_id = ?`,
	)
		.bind(locals.proUser!.id)
		.first();
	return json({
		preferences: preferences ?? {
			custom_domain: null,
			smart_optimization: 0,
			keep_originals: 1,
			private_default: 0,
		},
	});
};

export const PUT: APIRoute = async ({ request, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const payload = await request.json().catch(() => null) as { privateDefault?: unknown } | null;
	const privateDefault = payload?.privateDefault === true ? 1 : 0;
	await getProEnv().PRO_DB.prepare(
		`INSERT INTO workspace_preferences
		   (user_id, custom_domain, smart_optimization, keep_originals, private_default)
		 VALUES (?, NULL, 0, 1, ?)
		 ON CONFLICT(user_id) DO UPDATE SET
		   private_default = excluded.private_default,
		   updated_at = datetime('now')`,
	)
		.bind(locals.proUser!.id, privateDefault)
		.run();
	return json({ ok: true, preferences: { privateDefault: Boolean(privateDefault) } });
};
