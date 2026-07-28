import type { ProUser } from './types';

export const JSON_HEADERS = {
	'Content-Type': 'application/json; charset=utf-8',
	'Cache-Control': 'private, no-store',
	'X-Content-Type-Options': 'nosniff',
};

export function json(data: unknown, status = 200): Response {
	return new Response(JSON.stringify(data), {
		status,
		headers: JSON_HEADERS,
	});
}

export function isSameOriginMutation(request: Request): boolean {
	if (!['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method)) return true;
	const origin = request.headers.get('Origin');
	if (!origin) return false;
	return origin === new URL(request.url).origin;
}

export function requireUser(user: ProUser | undefined): Response | null {
	return user ? null : json({ error: 'Authentication required' }, 401);
}

export function safeFilename(value: string): string {
	const normalized = value.normalize('NFKC').replace(/[\u0000-\u001f\u007f]/g, '');
	return normalized.replace(/[\\/:"*?<>|]/g, '-').trim().slice(0, 120) || 'image';
}

export function slugify(value: string): string {
	return value
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 48) || 'folder';
}
