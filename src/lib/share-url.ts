// Shared validation for the share widget's `?u=` / showSharePanel() URL.
// Used both server-side (src/pages/share.astro) and in the client bundle
// (src/components/SharePanel.astro). Only render image URLs that belong to us —
// prevents reflected content / XSS via an attacker-supplied URL that ends up in
// an <img src>, in copy-paste snippets, and in the QR code.
export const ALLOWED_HOSTS = ['imagetourl.cloud', 'cdn.imagetourl.cloud'];

export function getValidUrl(raw: string | null | undefined): string | null {
  if (!raw) return null;
  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    return null;
  }
  if (parsed.protocol !== 'https:') return null;
  if (!ALLOWED_HOSTS.includes(parsed.hostname)) return null;
  return parsed.href;
}

// Batch variant for the multi-image share view: validate each URL, drop the
// invalid ones, and dedupe by normalized href while preserving order. The
// caller (share.astro) applies the count cap, not this function.
export function getValidUrls(rawList: (string | null | undefined)[]): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const raw of rawList) {
    const v = getValidUrl(raw);
    if (v && !seen.has(v)) {
      seen.add(v);
      out.push(v);
    }
  }
  return out;
}
