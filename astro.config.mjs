// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config — imagetourl.cloud
export default defineConfig({
  site: 'https://imagetourl.cloud',
  trailingSlash: 'ignore',
  adapter: cloudflare({
    // Local miniflare bindings by default — no Cloudflare login needed, so a
    // content contributor can run `npm run dev` with zero credentials.
    // Set REMOTE_BINDINGS=1 (npm run dev:remote) to proxy D1/R2/KV/IMAGES to the
    // live account for real-data work. The `remote = true` flag on the D1 binding
    // in wrangler.toml only takes effect when this is enabled.
    remoteBindings: process.env.REMOTE_BINDINGS === '1',
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'ja', 'zh-Hans'],
    routing: 'manual',
  },
  security: {
    checkOrigin: false,
  },
  build: {
    // Inline stylesheets into the HTML to eliminate the render-blocking
    // Layout.css request. Brotli-compressed HTML makes the duplicate-per-page
    // cost small; the saved round-trip beats the repeat-visit cache.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/__cdn': {
          target: 'https://cdn.imagetourl.cloud',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/__cdn/, ''),
        },
      },
    },
  }
});
