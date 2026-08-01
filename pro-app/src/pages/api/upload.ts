export const prerender = false;

import type { APIRoute } from 'astro';
import { isAllowedImageType, matchesFileSignature } from '../../lib/assets';
import { getProEnv, getNumberEnv } from '../../lib/env';
import { requireProAccess } from '../../lib/entitlements';
import { isSameOriginMutation, json, requireUser } from '../../lib/http';
import { storeAsset } from '../../lib/store-asset';

export const POST: APIRoute = async ({ request, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const env = getProEnv();
	const entitlementError = await requireProAccess(env, locals.proUser!.id);
	if (entitlementError) return entitlementError;

	const form = await request.formData().catch(() => null);
	const file = form?.get('file');
	if (!(file instanceof File)) return json({ error: 'Choose an image to upload' }, 400);

	if (!isAllowedImageType(file.type)) {
		return json({ error: 'Supported formats: JPG, PNG, GIF, WebP, and AVIF' }, 415);
	}

	const maxBytes = getNumberEnv(env.MAX_UPLOAD_BYTES, 50 * 1024 * 1024);
	if (file.size > maxBytes) return json({ error: 'Images must be 50 MB or smaller' }, 413);
	if (file.size === 0) return json({ error: 'The selected file is empty' }, 400);

	const signature = new Uint8Array(await file.slice(0, 32).arrayBuffer());
	if (!matchesFileSignature(file.type, signature)) {
		return json({ error: 'The file contents do not match the selected image format' }, 415);
	}

	const visibilityValue = String(form?.get('visibility') ?? 'unlisted');
	const visibility = ['private', 'unlisted', 'public'].includes(visibilityValue)
		? (visibilityValue as 'private' | 'unlisted' | 'public')
		: 'unlisted';

	try {
		const asset = await storeAsset({
			env,
			user: locals.proUser!,
			origin: import.meta.env.DEV
				? new URL(import.meta.env.BASE_URL, new URL(request.url).origin).toString()
				: env.SITE_URL,
			body: file.stream(),
			name: file.name,
			type: file.type,
			size: file.size,
			folderId: String(form?.get('folderId') ?? '') || null,
			visibility,
		});
		return json({ ok: true, asset }, 201);
	} catch (error) {
		console.error('Pro upload failed', error);
		const reason = error instanceof Error ? error.message : '';
		if (reason === 'PRO_REQUIRED') {
			return (await requireProAccess(env, locals.proUser!.id)) ??
				json({ error: 'An active Pro plan is required to upload images', code: 'PRO_REQUIRED' }, 402);
		}
		if (reason === 'RATE_LIMIT') return json({ error: 'Upload limit reached. Try again in one minute.' }, 429);
		if (reason === 'STORAGE_LIMIT') return json({ error: 'Your Pro storage allowance is full' }, 413);
		if (reason === 'INVALID_FOLDER') return json({ error: 'That folder is no longer available' }, 400);
		return json({ error: 'Upload failed. Please try again.' }, 500);
	}
};
