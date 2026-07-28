import { defineMiddleware } from 'astro:middleware';
import { authenticateSession, createDevelopmentUser } from './lib/auth';
import { getProEnv } from './lib/env';
import { json } from './lib/http';

const PUBLIC_PATHS = new Set([
	'/',
	'/sign-in',
	'/sign-out',
	'/api/health',
	'/api/webhooks/paddle',
	'/pricing',
	'/privacy',
	'/terms',
	'/refund-policy',
	'/acceptable-use-policy',
	'/contact',
	'/favicon.ico',
	'/favicon.svg',
]);

function securityHeaders(response: Response, isDocument: boolean): Response {
	const headers = new Headers(response.headers);
	headers.set('X-Content-Type-Options', 'nosniff');
	headers.set('X-Frame-Options', 'DENY');
	headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
	if (isDocument) {
		headers.set(
			'Content-Security-Policy',
			"default-src 'self'; img-src 'self' data: blob: https:; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://cdn.paddle.com; connect-src 'self' https://imagetourl.cloud https://*.paddle.com; frame-src https://*.paddle.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self' https://imagetourl.cloud https://*.paddle.com",
		);
		headers.set('Cache-Control', 'private, no-store');
	}
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}

export const onRequest = defineMiddleware(async ({ request, cookies, locals, redirect }, next) => {
	const url = new URL(request.url);
	const isAsset = url.pathname.startsWith('/_astro/');
	const isPublicFile = url.pathname.startsWith('/files/');
	const env = getProEnv();

	try {
		if (import.meta.env.DEV) {
			locals.proUser = await createDevelopmentUser(env);
		} else if (!isPublicFile) {
			const token = cookies.get('session')?.value;
			if (token) locals.proUser = (await authenticateSession(env, token)) ?? undefined;
		}
	} catch (error) {
		console.error('Pro authentication failed', error);
	}

	if (
		!locals.proUser &&
		!isAsset &&
		!isPublicFile &&
		!PUBLIC_PATHS.has(url.pathname)
	) {
		if (url.pathname.startsWith('/api/')) {
			return json({ error: 'Authentication required' }, 401);
		}
		const returnTo = `${url.origin}${url.pathname}${url.search}`;
		const login = new URL('/sign-in', url.origin);
		login.searchParams.set('return_to', returnTo);
		return redirect(login.toString(), 302);
	}

	const response = await next();
	return securityHeaders(response, request.headers.get('Accept')?.includes('text/html') ?? false);
});
