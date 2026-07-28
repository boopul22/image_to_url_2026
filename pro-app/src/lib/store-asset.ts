import { assetUrl, currentPeriodStart, extensionForType } from './assets';
import { workspaceStorageLimitBytes } from './billing';
import { assertProAccess } from './entitlements';
import type { ProEnv } from './env';
import { getNumberEnv } from './env';
import { safeFilename } from './http';
import type { ProUser } from './types';

interface StoreAssetInput {
	env: ProEnv;
	user: ProUser;
	body: ReadableStream | ArrayBuffer | ArrayBufferView;
	name: string;
	type: string;
	size: number;
	folderId?: string | null;
	visibility?: 'private' | 'unlisted' | 'public';
}

export interface StoredAsset {
	id: string;
	name: string;
	mimeType: string;
	sizeBytes: number;
	visibility: 'private' | 'unlisted' | 'public';
	url: string;
	createdAt: string;
}

export async function storeAsset(input: StoreAssetInput): Promise<StoredAsset> {
	const { env, user } = input;
	await assertProAccess(env, user.id);

	const extension = extensionForType(input.type);
	if (!extension) throw new Error('UNSUPPORTED_TYPE');

	const maxUploadBytes = getNumberEnv(env.MAX_UPLOAD_BYTES, 50 * 1024 * 1024);
	if (input.size <= 0) throw new Error('EMPTY_FILE');
	if (input.size > maxUploadBytes) throw new Error('FILE_TOO_LARGE');

	const recentUploads = await env.PRO_DB.prepare(
		`SELECT COUNT(*) AS count
		   FROM assets
		  WHERE user_id = ? AND created_at >= datetime('now', '-1 minute')`,
	)
		.bind(user.id)
		.first<{ count: number }>();
	if ((recentUploads?.count ?? 0) >= 20) throw new Error('RATE_LIMIT');

	const storageLimit = await workspaceStorageLimitBytes(env, user.id);
	const usage = await env.PRO_DB.prepare(
		`SELECT COALESCE(SUM(size_bytes), 0) AS bytes
		   FROM assets
		  WHERE user_id = ? AND status = 'ready'`,
	)
		.bind(user.id)
		.first<{ bytes: number }>();

	if ((usage?.bytes ?? 0) + input.size > storageLimit) throw new Error('STORAGE_LIMIT');

	const folderId = input.folderId || null;
	if (folderId) {
		const folder = await env.PRO_DB.prepare(
			'SELECT id FROM folders WHERE id = ? AND user_id = ? LIMIT 1',
		)
			.bind(folderId, user.id)
			.first();
		if (!folder) throw new Error('INVALID_FOLDER');
	}

	const id = crypto.randomUUID();
	const objectKey = `users/${user.id}/${new Date().toISOString().slice(0, 7)}/${id}.${extension}`;
	const name = safeFilename(input.name);
	const visibility = input.visibility ?? 'unlisted';
	const createdAt = new Date().toISOString();

	await env.PRO_STORAGE.put(objectKey, input.body, {
		httpMetadata: {
			contentType: input.type,
			cacheControl:
				visibility === 'private'
					? 'private, no-store'
					: 'public, max-age=31536000, immutable',
		},
		customMetadata: {
			assetId: id,
			userId: user.id,
			originalName: name,
		},
	});

	try {
		await env.PRO_DB.batch([
			env.PRO_DB.prepare(
				`INSERT INTO assets
				   (id, user_id, folder_id, original_name, object_key, mime_type, size_bytes, status, visibility)
				 VALUES (?, ?, ?, ?, ?, ?, ?, 'ready', ?)`,
			).bind(id, user.id, folderId, name, objectKey, input.type, input.size, visibility),
			env.PRO_DB.prepare(
				`INSERT INTO usage_monthly
				   (user_id, period_start, storage_bytes, uploads_count)
				 VALUES (?, ?, ?, 1)
				 ON CONFLICT(user_id, period_start) DO UPDATE SET
				   storage_bytes = storage_bytes + excluded.storage_bytes,
				   uploads_count = uploads_count + 1,
				   updated_at = datetime('now')`,
			).bind(user.id, currentPeriodStart(), input.size),
		]);
	} catch (error) {
		await env.PRO_STORAGE.delete(objectKey);
		throw error;
	}

	const origin = import.meta.env.DEV ? 'http://127.0.0.1:4322' : env.SITE_URL;
	return {
		id,
		name,
		mimeType: input.type,
		sizeBytes: input.size,
		visibility,
		url: assetUrl(origin, id, name),
		createdAt,
	};
}
