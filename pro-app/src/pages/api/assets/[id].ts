export const prerender = false;

import type { APIRoute } from 'astro';
import { currentPeriodStart } from '../../../lib/assets';
import { getProEnv } from '../../../lib/env';
import { isSameOriginMutation, json, requireUser } from '../../../lib/http';

export const DELETE: APIRoute = async ({ request, params, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const id = params.id;
	if (!id) return json({ error: 'Asset ID is required' }, 400);
	const env = getProEnv();
	const asset = await env.PRO_DB.prepare(
		`SELECT object_key, size_bytes
		   FROM assets
		  WHERE id = ? AND user_id = ? AND status = 'ready'
		  LIMIT 1`,
	)
		.bind(id, locals.proUser!.id)
		.first<{ object_key: string; size_bytes: number }>();
	if (!asset) return json({ error: 'Asset not found' }, 404);

	await env.PRO_STORAGE.delete(asset.object_key);
	await env.PRO_DB.batch([
		env.PRO_DB.prepare(
			`UPDATE assets SET status = 'deleted', updated_at = datetime('now')
			  WHERE id = ? AND user_id = ?`,
		).bind(id, locals.proUser!.id),
		env.PRO_DB.prepare(
			`UPDATE usage_monthly
			    SET storage_bytes = MAX(0, storage_bytes - ?),
			        updated_at = datetime('now')
			  WHERE user_id = ? AND period_start = ?`,
		).bind(asset.size_bytes, locals.proUser!.id, currentPeriodStart()),
	]);
	return json({ ok: true });
};
