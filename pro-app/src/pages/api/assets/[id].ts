export const prerender = false;

import type { APIRoute } from 'astro';
import {
	currentPeriodStart,
	extensionForType,
	isAllowedImageType,
	matchesFileSignature,
} from '../../../lib/assets';
import { getNumberEnv, getProEnv } from '../../../lib/env';
import { requireProAccess } from '../../../lib/entitlements';
import { isSameOriginMutation, json, requireUser, safeFilename } from '../../../lib/http';

export const PUT: APIRoute = async ({ request, params, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const id = params.id;
	if (!id) return json({ error: 'Asset ID is required' }, 400);
	const env = getProEnv();
	const entitlementError = await requireProAccess(env, locals.proUser!.id);
	if (entitlementError) return entitlementError;

	const form = await request.formData().catch(() => null);
	const file = form?.get('file');
	if (!(file instanceof File)) return json({ error: 'Choose a replacement image' }, 400);
	if (!isAllowedImageType(file.type)) {
		return json({ error: 'Supported formats: JPG, PNG, GIF, WebP, and AVIF' }, 415);
	}
	const maxBytes = getNumberEnv(env.MAX_UPLOAD_BYTES, 64 * 1024 * 1024);
	if (file.size > maxBytes) return json({ error: 'Images must be 64 MB or smaller' }, 413);
	if (file.size === 0) return json({ error: 'The selected file is empty' }, 400);
	const signature = new Uint8Array(await file.slice(0, 32).arrayBuffer());
	if (!matchesFileSignature(file.type, signature)) {
		return json({ error: 'The file contents do not match the selected image format' }, 415);
	}

	const asset = await env.PRO_DB.prepare(
		`SELECT object_key, original_name, size_bytes, visibility
		   FROM assets
		  WHERE id = ? AND user_id = ? AND status = 'ready'
		  LIMIT 1`,
	)
		.bind(id, locals.proUser!.id)
		.first<{
			object_key: string;
			original_name: string;
			size_bytes: number;
			visibility: 'private' | 'unlisted' | 'public';
		}>();
	if (!asset) return json({ error: 'Asset not found' }, 404);

	const extension = extensionForType(file.type);
	if (!extension) return json({ error: 'Unsupported image type' }, 415);
	const newObjectKey = `users/${locals.proUser!.id}/${new Date().toISOString().slice(0, 7)}/${id}-replacement-${crypto.randomUUID()}.${extension}`;
	await env.PRO_STORAGE.put(newObjectKey, file.stream(), {
		httpMetadata: {
			contentType: file.type,
			cacheControl: asset.visibility === 'private'
				? 'private, no-store'
				: 'public, max-age=60, must-revalidate',
		},
		customMetadata: {
			assetId: id,
			userId: locals.proUser!.id,
			originalName: asset.original_name,
			replaces: asset.object_key,
		},
	});

	try {
		const results = await env.PRO_DB.batch([
			env.PRO_DB.prepare(
				`UPDATE assets
				    SET object_key = ?, mime_type = ?, size_bytes = ?, width = NULL, height = NULL,
				        updated_at = datetime('now')
				  WHERE id = ? AND user_id = ? AND status = 'ready' AND object_key = ?`,
			).bind(newObjectKey, file.type, file.size, id, locals.proUser!.id, asset.object_key),
			env.PRO_DB.prepare(
				`INSERT INTO usage_monthly (user_id, period_start, storage_bytes)
				 SELECT ?, ?, MAX(0, ?)
				   FROM assets
				  WHERE id = ? AND user_id = ? AND object_key = ?
				 ON CONFLICT(user_id, period_start) DO UPDATE SET
				   storage_bytes = MAX(0, storage_bytes + ?),
				   updated_at = datetime('now')`,
			).bind(
				locals.proUser!.id,
				currentPeriodStart(),
				file.size - asset.size_bytes,
				id,
				locals.proUser!.id,
				newObjectKey,
				file.size - asset.size_bytes,
			),
		]);
		if (Number(results[0]?.meta.changes ?? 0) < 1) {
			await env.PRO_STORAGE.delete(newObjectKey);
			return json({ error: 'This image changed while it was being replaced. Try again.' }, 409);
		}
	} catch (error) {
		await env.PRO_STORAGE.delete(newObjectKey);
		console.error('Asset replacement failed', error);
		return json({ error: 'Could not replace the image' }, 500);
	}

	await env.PRO_STORAGE.delete(asset.object_key).catch((error) =>
		console.error('Old replacement object cleanup failed', error),
	);
	return json({
		ok: true,
		asset: {
			id,
			name: asset.original_name,
			mimeType: file.type,
			sizeBytes: file.size,
		},
	});
};

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
