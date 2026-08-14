// @ts-ignore - cloudflare:workers is a Workers-only built-in module
import { env } from 'cloudflare:workers';

function getBucket(): R2Bucket {
  return (env as unknown as { R2: R2Bucket }).R2;
}

export async function uploadToR2(opts: {
  key: string;
  body: Uint8Array;
  contentType: string;
  cacheControl?: string;
}): Promise<void> {
  await getBucket().put(opts.key, opts.body, {
    httpMetadata: {
      contentType: opts.contentType,
      cacheControl: opts.cacheControl ?? 'public, max-age=31536000, immutable',
    },
  });
}

export async function deleteFromR2(opts: {
  key: string;
}): Promise<void> {
  await getBucket().delete(opts.key);
}
