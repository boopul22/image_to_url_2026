export const prerender = false;

import type { APIRoute } from 'astro';
import { assetUrl } from '../../lib/assets';
import { getProEnv } from '../../lib/env';
import { json, requireUser } from '../../lib/http';

export const GET: APIRoute = async ({ url, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;

	const search = (url.searchParams.get('search') ?? '').trim().slice(0, 80);
	const escaped = search.replace(/[\\%_]/g, (value) => `\\${value}`);
	const limit = Math.min(100, Math.max(1, Number(url.searchParams.get('limit') ?? 40) || 40));
	const db = getProEnv().PRO_DB;
	const query = search
		? db.prepare(
			`SELECT id, original_name, mime_type, size_bytes, visibility, created_at
			   FROM assets
			  WHERE user_id = ? AND status = 'ready'
			    AND original_name LIKE ? ESCAPE '\\'
			  ORDER BY created_at DESC LIMIT ?`,
		).bind(locals.proUser!.id, `%${escaped}%`, limit)
		: db.prepare(
			`SELECT id, original_name, mime_type, size_bytes, visibility, created_at
			   FROM assets
			  WHERE user_id = ? AND status = 'ready'
			  ORDER BY created_at DESC LIMIT ?`,
		).bind(locals.proUser!.id, limit);
	const result = await query.all<Record<string, unknown>>();
	const origin = import.meta.env.DEV
		? new URL(import.meta.env.BASE_URL, url.origin).toString()
		: getProEnv().SITE_URL;
	return json({
		assets: result.results.map((asset) => ({
			...asset,
			url: assetUrl(origin, String(asset.id), String(asset.original_name)),
		})),
	});
};
