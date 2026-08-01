export const prerender = false;

import type { APIRoute } from 'astro';
import { getProEnv } from '../../../lib/env';
import { requireProAccess } from '../../../lib/entitlements';
import { isSameOriginMutation, json, requireUser, slugify } from '../../../lib/http';

export const PATCH: APIRoute = async ({ request, params, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const id = params.id;
	if (!id) return json({ error: 'Folder ID is required' }, 400);

	const env = getProEnv();
	const entitlementError = await requireProAccess(env, locals.proUser!.id);
	if (entitlementError) return entitlementError;

	const payload = await request.json().catch(() => null) as { name?: unknown } | null;
	const name = typeof payload?.name === 'string' ? payload.name.trim().slice(0, 48) : '';
	if (!name) return json({ error: 'Enter a folder name' }, 400);

	const folder = await env.PRO_DB.prepare(
		'SELECT id FROM folders WHERE id = ? AND user_id = ? LIMIT 1',
	)
		.bind(id, locals.proUser!.id)
		.first();
	if (!folder) return json({ error: 'Folder not found' }, 404);

	try {
		await env.PRO_DB.prepare(
			`UPDATE folders
			    SET name = ?, slug = ?, updated_at = datetime('now')
			  WHERE id = ? AND user_id = ?`,
		)
			.bind(name, slugify(name), id, locals.proUser!.id)
			.run();
		return json({ ok: true, folder: { id, name, slug: slugify(name) } });
	} catch (error) {
		if (String(error).includes('UNIQUE')) {
			return json({ error: 'A folder with that name already exists' }, 409);
		}
		console.error('Folder rename failed', error);
		return json({ error: 'Could not rename the folder' }, 500);
	}
};

export const DELETE: APIRoute = async ({ request, params, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const id = params.id;
	if (!id) return json({ error: 'Folder ID is required' }, 400);
	const env = getProEnv();

	const folder = await env.PRO_DB.prepare(
		'SELECT id, name FROM folders WHERE id = ? AND user_id = ? LIMIT 1',
	)
		.bind(id, locals.proUser!.id)
		.first<{ id: string; name: string }>();
	if (!folder) return json({ error: 'Folder not found' }, 404);

	try {
		await env.PRO_DB.batch([
			env.PRO_DB.prepare(
				`UPDATE assets
				    SET folder_id = NULL, updated_at = datetime('now')
				  WHERE folder_id = ? AND user_id = ?`,
			).bind(id, locals.proUser!.id),
			env.PRO_DB.prepare(
				'DELETE FROM folders WHERE id = ? AND user_id = ?',
			).bind(id, locals.proUser!.id),
		]);
		return json({ ok: true, folder: { id: folder.id, name: folder.name }, assetsMovedToRoot: true });
	} catch (error) {
		console.error('Folder deletion failed', error);
		return json({ error: 'Could not delete the folder' }, 500);
	}
};
