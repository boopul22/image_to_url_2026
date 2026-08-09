export const prerender = false;

import type { APIRoute } from 'astro';
import { isAllowedImageType, matchesFileSignature } from '../../lib/assets';
import { getProEnv } from '../../lib/env';
import { requireProAccess } from '../../lib/entitlements';
import { isSameOriginMutation, json, requireUser, safeFilename } from '../../lib/http';
import { storeAsset } from '../../lib/store-asset';

const REMOTE_IMPORT_LIMIT = 10 * 1024 * 1024;
const MAX_REDIRECTS = 5;

function isPrivateIpv4(hostname: string): boolean {
	const parts = hostname.split('.');
	if (parts.length !== 4 || !parts.every((part) => /^\d{1,3}$/.test(part))) return false;
	const octets = parts.map(Number);
	if (octets.some((part) => part > 255)) return true;
	const [first, second] = octets;
	return first === 0 ||
		first === 10 ||
		first === 127 ||
		(first === 100 && second >= 64 && second <= 127) ||
		(first === 169 && second === 254) ||
		(first === 172 && second >= 16 && second <= 31) ||
		(first === 192 && second === 0) ||
		(first === 192 && second === 168) ||
		(first === 198 && (second === 18 || second === 19)) ||
		first >= 224;
}

function isPrivateIpv6(hostname: string): boolean {
	const normalized = hostname.replace(/^\[|\]$/g, '').toLowerCase();
	if (!normalized.includes(':')) return false;
	if (normalized === '::' || normalized === '::1') return true;
	if (normalized.startsWith('fc') || normalized.startsWith('fd')) return true;
	if (/^fe[89ab]/.test(normalized)) return true;
	const mappedIpv4 = normalized.match(/(?:^|:)ffff:(\d+\.\d+\.\d+\.\d+)$/)?.[1];
	return mappedIpv4 ? isPrivateIpv4(mappedIpv4) : false;
}

function isPublicHttpUrl(source: URL): boolean {
	if (!['https:', 'http:'].includes(source.protocol) || source.username || source.password) return false;
	const hostname = source.hostname.replace(/\.$/, '').toLowerCase();
	if (
		!hostname ||
		hostname === 'localhost' ||
		hostname.endsWith('.localhost') ||
		hostname.endsWith('.local') ||
		hostname.endsWith('.internal') ||
		hostname.endsWith('.home.arpa')
	) return false;
	return !isPrivateIpv4(hostname) && !isPrivateIpv6(hostname);
}

async function fetchPublicImage(source: URL): Promise<Response> {
	let current = source;
	for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects += 1) {
		if (!isPublicHttpUrl(current)) throw new Error('PRIVATE_NETWORK');
		const response = await fetch(current, {
			headers: { Accept: 'image/avif,image/webp,image/png,image/jpeg,image/gif' },
			redirect: 'manual',
		});
		if (![301, 302, 303, 307, 308].includes(response.status)) return response;
		if (redirects === MAX_REDIRECTS) throw new Error('TOO_MANY_REDIRECTS');
		const location = response.headers.get('Location');
		await response.body?.cancel();
		if (!location) throw new Error('INVALID_REDIRECT');
		current = new URL(location, current);
	}
	throw new Error('TOO_MANY_REDIRECTS');
}

async function readWithLimit(response: Response): Promise<Uint8Array> {
	if (!response.body) throw new Error('EMPTY_FILE');
	const reader = response.body.getReader();
	const chunks: Uint8Array[] = [];
	let size = 0;

	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		size += value.byteLength;
		if (size > REMOTE_IMPORT_LIMIT) {
			await reader.cancel();
			throw new Error('FILE_TOO_LARGE');
		}
		chunks.push(value);
	}

	const result = new Uint8Array(size);
	let offset = 0;
	for (const chunk of chunks) {
		result.set(chunk, offset);
		offset += chunk.byteLength;
	}
	return result;
}

export const POST: APIRoute = async ({ request, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const env = getProEnv();
	const entitlementError = await requireProAccess(env, locals.proUser!.id);
	if (entitlementError) return entitlementError;

	const payload = await request.json().catch(() => null) as {
		url?: unknown;
		visibility?: unknown;
		folderId?: unknown;
	} | null;
	if (typeof payload?.url !== 'string') return json({ error: 'Enter a direct image URL' }, 400);

	let source: URL;
	try {
		source = new URL(payload.url);
	} catch {
		return json({ error: 'Enter a valid image URL' }, 400);
	}

	if (!isPublicHttpUrl(source)) {
		return json({ error: 'Only public HTTP or HTTPS image URLs are supported' }, 400);
	}

	try {
		const remote = await fetchPublicImage(source);
		if (!remote.ok) return json({ error: `The source returned HTTP ${remote.status}` }, 400);

		const type = (remote.headers.get('Content-Type') ?? '').split(';')[0].trim().toLowerCase();
		if (!isAllowedImageType(type)) return json({ error: 'The URL did not return a supported image' }, 415);

		const declaredSize = Number(remote.headers.get('Content-Length') ?? 0);
		if (declaredSize > REMOTE_IMPORT_LIMIT) {
			return json({ error: 'Remote images must be 10 MB or smaller' }, 413);
		}

		const bytes = await readWithLimit(remote);
		if (!matchesFileSignature(type, bytes.slice(0, 32))) {
			return json({ error: 'The remote file contents do not match its image format' }, 415);
		}
		const finalUrl = new URL(remote.url || source);
		const rawName = decodeURIComponent(finalUrl.pathname.split('/').pop() || 'imported-image');
		const name = safeFilename(rawName.includes('.') ? rawName : `${rawName}.${type.split('/')[1]}`);
		const visibilityValue = String(payload.visibility ?? 'unlisted');
		const visibility = ['private', 'unlisted', 'public'].includes(visibilityValue)
			? (visibilityValue as 'private' | 'unlisted' | 'public')
			: 'unlisted';

		const asset = await storeAsset({
			env,
			user: locals.proUser!,
			origin: import.meta.env.DEV
				? new URL(import.meta.env.BASE_URL, new URL(request.url).origin).toString()
				: env.SITE_URL,
			body: bytes,
			name,
			type,
			size: bytes.byteLength,
			folderId: typeof payload.folderId === 'string' ? payload.folderId : null,
			visibility,
		});
		return json({ ok: true, asset }, 201);
	} catch (error) {
		console.error('Remote import failed', error);
		const reason = error instanceof Error ? error.message : '';
		if (reason === 'PRO_REQUIRED') {
			return (await requireProAccess(env, locals.proUser!.id)) ??
				json({ error: 'An active Pro plan is required to import images', code: 'PRO_REQUIRED' }, 402);
		}
		if (reason === 'RATE_LIMIT') return json({ error: 'Import limit reached. Try again in one minute.' }, 429);
		if (reason === 'FILE_TOO_LARGE') return json({ error: 'Remote images must be 10 MB or smaller' }, 413);
		if (reason === 'PRIVATE_NETWORK') {
			return json({ error: 'Only public HTTP or HTTPS image URLs are supported' }, 400);
		}
		return json({ error: 'That image could not be imported safely' }, 400);
	}
};
