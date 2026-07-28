const PRODUCTION_ORIGINS = new Set([
  'https://imagetourl.cloud',
  'https://pro.imagetourl.cloud',
]);

export function safeReturnTo(value: string | null | undefined, fallback = '/'): string {
  if (!value) return fallback;
  if (value.startsWith('/') && !value.startsWith('//')) return value;

  try {
    const url = new URL(value);
    const allowed =
      PRODUCTION_ORIGINS.has(url.origin) ||
      (import.meta.env.DEV &&
        ['http://localhost:4321', 'http://127.0.0.1:4321', 'http://127.0.0.1:4322'].includes(
          url.origin,
        ));
    if (!allowed || url.username || url.password) return fallback;
    return url.toString();
  } catch {
    return fallback;
  }
}
