export const prerender = false;

import type { APIRoute } from 'astro';
import { getProEnv } from '../../lib/env';
import { requireProAccess } from '../../lib/entitlements';
import { isSameOriginMutation, json, requireUser, slugify } from '../../lib/http';

const MAX_FOLDERS_PER_USER = 100;

export const GET: APIRoute = async ({ locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	const rows = await getProEnv().PRO_DB.prepare(
		`SELECT f.id, f.name, f.slug, COUNT(a.id) AS asset_count
		   FROM folders f
		   LEFT JOIN assets a ON a.folder_id = f.id AND a.status = 'ready'
		  WHERE f.user_id = ?
		  GROUP BY f.id
		  ORDER BY f.name COLLATE NOCASE`,
	)
		.bind(locals.proUser!.id)
		.all();
	return json({ folders: rows.results });
};

export const POST: APIRoute = async ({ request, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const env = getProEnv();
	const entitlementError = await requireProAccess(env, locals.proUser!.id);
	if (entitlementError) return entitlementError;

	const payload = await request.json().catch(() => null) as { name?: unknown } | null;
	const name = typeof payload?.name === 'string' ? payload.name.trim().slice(0, 48) : '';
	if (!name) return json({ error: 'Enter a folder name' }, 400);

	const folderCount = await env.PRO_DB.prepare(
		'SELECT COUNT(*) AS count FROM folders WHERE user_id = ?',
	)
		.bind(locals.proUser!.id)
		.first<{ count: number }>();
	if (Number(folderCount?.count ?? 0) >= MAX_FOLDERS_PER_USER) {
		return json({ error: `You can create up to ${MAX_FOLDERS_PER_USER} folders` }, 409);
	}

	const id = crypto.randomUUID();
	const slug = slugify(name);
	try {
		await env.PRO_DB.prepare(
			'INSERT INTO folders (id, user_id, name, slug) VALUES (?, ?, ?, ?)',
		)
			.bind(id, locals.proUser!.id, name, slug)
			.run();
		return json({ ok: true, folder: { id, name, slug, assetCount: 0 } }, 201);
	} catch (error) {
		if (String(error).includes('UNIQUE')) {
			return json({ error: 'A folder with that name already exists' }, 409);
		}
		console.error('Folder creation failed', error);
		return json({ error: 'Could not create the folder' }, 500);
	}
};
