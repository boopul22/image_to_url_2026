/// <reference types="astro/client" />

type D1Database = import('@cloudflare/workers-types').D1Database;
type R2Bucket = import('@cloudflare/workers-types').R2Bucket;
type ImagesBinding = import('@cloudflare/workers-types/experimental').ImagesBinding;

// Workers-runtime global (workerd only; absent in plain Node). Declared
// minimally against the DOM Response so middleware can use it without pulling
// workers-types' conflicting Response/Request globals into scope.
interface MinimalHTMLRewriter {
  on(
    selector: string,
    handlers: {
      element?(el: { append(content: string, options?: { html?: boolean }): void }): void;
    },
  ): MinimalHTMLRewriter;
  transform(response: Response): Response;
}
declare const HTMLRewriter: { new (): MinimalHTMLRewriter };

declare namespace App {
  interface Locals {
    runtime: {
      env: {
        DB: D1Database;
        R2: R2Bucket;
        IMAGES: ImagesBinding;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        AUTH_SECRET: string;
        CLOUDFLARE_ACCOUNT_ID: string;
        R2_ACCESS_KEY_ID: string;
        R2_SECRET_ACCESS_KEY: string;
        R2_BUCKET_NAME: string;
        R2_ENDPOINT: string;
        R2_PUBLIC_URL: string;
      };
      ctx: {
        waitUntil: (promise: Promise<unknown>) => void;
      };
    };
    user?: {
      id: string;
      googleId: string;
      name: string;
      email: string;
      avatarUrl: string;
      role: 'user' | 'admin';
    };
    locale: import('./i18n/config').Locale;
  }
}
