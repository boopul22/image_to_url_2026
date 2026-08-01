interface Env {
	PRO_APP: Fetcher;
	MIGRATION_ACTIVE?: string;
}

const MAIN_PRO_ORIGIN = 'https://imagetourl.cloud';
const PRO_BASE_PATH = '/pro';

function isDocumentRequest(request: Request): boolean {
	if (request.method !== 'GET' && request.method !== 'HEAD') return false;
	return request.headers.get('Accept')?.includes('text/html') ?? false;
}

function mainProUrl(source: URL): URL {
	const alreadyPrefixed = source.pathname === PRO_BASE_PATH || source.pathname.startsWith(`${PRO_BASE_PATH}/`);
	const pathname = alreadyPrefixed
		? source.pathname
		: source.pathname === '/'
			? PRO_BASE_PATH
			: `${PRO_BASE_PATH}${source.pathname}`;
	const target = new URL(pathname, MAIN_PRO_ORIGIN);
	target.search = source.search;
	return target;
}

async function fetchProApp(request: Request, target: URL, env: Env): Promise<Response> {
	const headers = new Headers(request.headers);
	if (target.origin === MAIN_PRO_ORIGIN && headers.get('Origin') === 'https://pro.imagetourl.cloud') {
		headers.set('Origin', MAIN_PRO_ORIGIN);
	}
	const referer = headers.get('Referer');
	if (target.origin === MAIN_PRO_ORIGIN && referer?.startsWith('https://pro.imagetourl.cloud/')) {
		headers.set('Referer', referer.replace('https://pro.imagetourl.cloud', MAIN_PRO_ORIGIN));
	}
	const forwarded = new Request(target, request);
	return env.PRO_APP.fetch(new Request(forwarded, { headers }));
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const source = new URL(request.url);
		const target = mainProUrl(source);

		if (env.MIGRATION_ACTIVE === 'true') {
			if (isDocumentRequest(request)) return Response.redirect(target, 301);
			return fetchProApp(request, target, env);
		}

		// While the Pro app still serves root paths, this is a transparent pass-through.
		// After it moves under /pro, a 404 triggers a safe retry against the new main-domain path.
		const currentResponse = await fetchProApp(request, source, env);
		if (currentResponse.status !== 404) {
			if (source.pathname === PRO_BASE_PATH || source.pathname.startsWith(`${PRO_BASE_PATH}/`)) {
				if (isDocumentRequest(request)) {
					return Response.redirect(new URL(`${source.pathname}${source.search}`, MAIN_PRO_ORIGIN), 301);
				}
			}
			return currentResponse;
		}

		const migratedResponse = await fetchProApp(request, target, env);
		if (migratedResponse.status === 404) return currentResponse;

		// Browser pages move permanently to the approved main domain. Webhooks, APIs,
		// and historical file URLs are proxied so signatures and old links keep working.
		if (isDocumentRequest(request)) return Response.redirect(target, 301);
		return migratedResponse;
	},
};
