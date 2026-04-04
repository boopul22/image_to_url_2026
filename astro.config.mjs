// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config — imagetourl.cloud
export default defineConfig({
  site: 'https://imagetourl.cloud',
  adapter: cloudflare(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'es', 'fr', 'de', 'ja', 'zh'],
    routing: 'manual',
  },
  security: {
    checkOrigin: false,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
