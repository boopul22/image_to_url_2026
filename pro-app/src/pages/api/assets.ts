export const prerender = false;

import type { APIRoute } from 'astro';
import { assetUrl } from '../../lib/assets';
import { getProEnv } from '../../lib/env';
import { json, requireUser } from '../../lib/http';

interface AssetCursor {
	createdAt: string;
	id: string;
}

interface AssetRow {
	id: string;
	folder_id: string | null;
	folder_name: string | null;
	original_name: string;
	mime_type: string;
	size_bytes: number;
	visibility: 'private' | 'unlisted' | 'public';
	created_at: string;
}

function decodeCursor(value: string | null): AssetCursor | null {
	if (!value) return null;
	if (value.length > 512) return null;
	try {
		const parsed = JSON.parse(atob(value)) as Partial<AssetCursor>;
		if (
			typeof parsed.createdAt !== 'string' ||
			typeof parsed.id !== 'string' ||
			parsed.createdAt.length > 40 ||
			parsed.id.length > 64
		) return null;
		return { createdAt: parsed.createdAt, id: parsed.id };
	} catch {
		return null;
	}
}

function encodeCursor(asset: AssetRow): string {
	return btoa(JSON.stringify({ createdAt: asset.created_at, id: asset.id } satisfies AssetCursor));
}

export const GET: APIRoute = async ({ url, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;

	const search = (url.searchParams.get('search') ?? '').trim().slice(0, 80);
	const escaped = search.replace(/[\\%_]/g, (value) => `\\${value}`);
	const folder = (url.searchParams.get('folder') ?? '').trim().slice(0, 64);
	const cursorValue = url.searchParams.get('cursor');
	const cursor = decodeCursor(cursorValue);
	if (cursorValue && !cursor) return json({ error: 'Invalid library cursor' }, 400);
	const requestedLimit = Number(url.searchParams.get('limit') ?? 40);
	const limit = Math.min(
		100,
		Math.max(1, Number.isFinite(requestedLimit) ? Math.trunc(requestedLimit) : 40),
	);
	const db = getProEnv().PRO_DB;
	const where = [`a.user_id = ?`, `a.status = 'ready'`];
	const bindings: Array<string | number> = [locals.proUser!.id];
	if (search) {
		where.push(`a.original_name LIKE ? ESCAPE '\\'`);
		bindings.push(`%${escaped}%`);
	}
	if (folder === 'unfiled') {
		where.push('a.folder_id IS NULL');
	} else if (folder) {
		where.push('a.folder_id = ?');
		bindings.push(folder);
	}
	const countWhere = [...where];
	const countBindings = [...bindings];
	if (cursor) {
		where.push('(a.created_at < ? OR (a.created_at = ? AND a.id < ?))');
		bindings.push(cursor.createdAt, cursor.createdAt, cursor.id);
	}

	const [result, count] = await Promise.all([
		db.prepare(
			`SELECT a.id, a.folder_id, f.name AS folder_name, a.original_name,
			        a.mime_type, a.size_bytes, a.visibility, a.created_at
			   FROM assets a
			   LEFT JOIN folders f ON f.id = a.folder_id AND f.user_id = a.user_id
			  WHERE ${where.join(' AND ')}
			  ORDER BY a.created_at DESC, a.id DESC
			  LIMIT ?`,
		).bind(...bindings, limit + 1).all<AssetRow>(),
		db.prepare(
			`SELECT COUNT(*) AS count FROM assets a WHERE ${countWhere.join(' AND ')}`,
		).bind(...countBindings).first<{ count: number }>(),
	]);
	const rows = result.results ?? [];
	const hasMore = rows.length > limit;
	const page = hasMore ? rows.slice(0, limit) : rows;
	const origin = import.meta.env.DEV
		? new URL(import.meta.env.BASE_URL, url.origin).toString()
		: getProEnv().SITE_URL;
	return json({
		assets: page.map((asset) => ({
			id: asset.id,
			folderId: asset.folder_id,
			folderName: asset.folder_name,
			name: asset.original_name,
			mimeType: asset.mime_type,
			sizeBytes: asset.size_bytes,
			visibility: asset.visibility,
			createdAt: asset.created_at,
			url: assetUrl(origin, asset.id, asset.original_name),
		})),
		total: Number(count?.count ?? 0),
		nextCursor: hasMore && page.length > 0 ? encodeCursor(page[page.length - 1]) : null,
	});
};
