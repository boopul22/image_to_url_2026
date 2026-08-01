const ALLOWED_TYPES = new Map([
	['image/jpeg', 'jpg'],
	['image/png', 'png'],
	['image/webp', 'webp'],
	['image/gif', 'gif'],
	['image/avif', 'avif'],
]);

export function extensionForType(type: string): string | null {
	return ALLOWED_TYPES.get(type) ?? null;
}

export function isAllowedImageType(type: string): boolean {
	return ALLOWED_TYPES.has(type);
}

export function matchesFileSignature(type: string, bytes: Uint8Array): boolean {
	const text = new TextDecoder().decode(bytes);
	switch (type) {
		case 'image/jpeg':
			return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
		case 'image/png':
			return bytes.slice(0, 8).every((value, index) =>
				value === [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a][index],
			);
		case 'image/gif':
			return text.startsWith('GIF87a') || text.startsWith('GIF89a');
		case 'image/webp':
			return text.startsWith('RIFF') && text.slice(8, 12) === 'WEBP';
		case 'image/avif':
			return text.slice(4, 8) === 'ftyp' && /avif|avis/.test(text.slice(8, 24));
		default:
			return false;
	}
}

export function assetUrl(origin: string, id: string, name: string): string {
	const url = new URL(origin);
	const basePath = url.pathname.replace(/\/$/, '');
	url.pathname = `${basePath}/files/${encodeURIComponent(id)}/${encodeURIComponent(name)}`;
	return url.toString();
}

export function currentPeriodStart(): string {
	const now = new Date();
	return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-01`;
}

export function formatBytes(bytes: number): string {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(bytes < 10 * 1024 ? 1 : 0)} KB`;
	if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(bytes < 10 * 1024 ** 2 ? 1 : 0)} MB`;
	return `${(bytes / 1024 ** 3).toFixed(1)} GB`;
}

export function relativeAge(value: string): string {
	const seconds = Math.max(0, Math.floor((Date.now() - new Date(`${value}Z`).getTime()) / 1000));
	if (seconds < 60) return 'Just now';
	if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
	if (seconds < 86400) return `${Math.floor(seconds / 3600)} hr ago`;
	if (seconds < 172800) return 'Yesterday';
	return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(
		new Date(`${value}Z`),
	);
}
