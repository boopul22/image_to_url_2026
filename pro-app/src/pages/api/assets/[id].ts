export const prerender = false;

import type { APIRoute } from 'astro';
import { currentPeriodStart } from '../../../lib/assets';
import { getProEnv } from '../../../lib/env';
import { requireProAccess } from '../../../lib/entitlements';
import { isSameOriginMutation, json, requireUser, safeFilename } from '../../../lib/http';

export const PATCH: APIRoute = async ({ request, params, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const id = params.id;
	if (!id) return json({ error: 'Asset ID is required' }, 400);
	const env = getProEnv();
	const entitlementError = await requireProAccess(env, locals.proUser!.id);
	if (entitlementError) return entitlementError;

	const payload = await request.json().catch(() => null) as {
		name?: unknown;
		folderId?: unknown;
	} | null;
	if (!payload || (!Object.hasOwn(payload, 'name') && !Object.hasOwn(payload, 'folderId'))) {
		return json({ error: 'Choose a library change to save' }, 400);
	}

	const asset = await env.PRO_DB.prepare(
		`SELECT id, original_name, folder_id
		   FROM assets
		  WHERE id = ? AND user_id = ? AND status = 'ready'
		  LIMIT 1`,
	)
		.bind(id, locals.proUser!.id)
		.first<{ id: string; original_name: string; folder_id: string | null }>();
	if (!asset) return json({ error: 'Asset not found' }, 404);

	let name = asset.original_name;
	if (Object.hasOwn(payload, 'name')) {
		if (typeof payload.name !== 'string' || !payload.name.trim()) {
			return json({ error: 'Enter a file name' }, 400);
		}
		name = safeFilename(payload.name);
	}

	let folderId = asset.folder_id;
	if (Object.hasOwn(payload, 'folderId')) {
		if (payload.folderId !== null && typeof payload.folderId !== 'string') {
			return json({ error: 'Choose a valid folder' }, 400);
		}
		folderId = typeof payload.folderId === 'string' && payload.folderId ? payload.folderId : null;
		if (folderId) {
			const folder = await env.PRO_DB.prepare(
				'SELECT id FROM folders WHERE id = ? AND user_id = ? LIMIT 1',
			)
				.bind(folderId, locals.proUser!.id)
				.first();
			if (!folder) return json({ error: 'That folder is no longer available' }, 400);
		}
	}

	try {
		await env.PRO_DB.prepare(
			`UPDATE assets
			    SET original_name = ?, folder_id = ?, updated_at = datetime('now')
			  WHERE id = ? AND user_id = ? AND status = 'ready'`,
		)
			.bind(name, folderId, id, locals.proUser!.id)
			.run();
		return json({ ok: true, asset: { id, name, folderId } });
	} catch (error) {
		console.error('Asset organization failed', error);
		return json({ error: 'Could not update the asset' }, 500);
	}
};

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
