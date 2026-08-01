export const PRO_BASE_PATH = '/pro';

export function proPath(path = '/'): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return normalized === '/' ? PRO_BASE_PATH : `${PRO_BASE_PATH}${normalized}`;
}

export function stripProBase(pathname: string): string | null {
	if (pathname === PRO_BASE_PATH || pathname === `${PRO_BASE_PATH}/`) return '/';
	if (!pathname.startsWith(`${PRO_BASE_PATH}/`)) return null;
	return pathname.slice(PRO_BASE_PATH.length) || '/';
}

export function proAbsoluteUrl(path = '/', origin = 'https://imagetourl.cloud'): string {
	return new URL(proPath(path), origin).toString();
}
