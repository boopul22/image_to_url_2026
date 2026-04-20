// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config — imagetourl.cloud
export default defineConfig({
  site: 'https://imagetourl.cloud',
  trailingSlash: 'ignore',
  adapter: cloudflare({
    remoteBindings: true,
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'es', 'fr', 'de', 'ja', 'zh-Hans', 'id', 'vi', 'pt-BR', 'tr', 'tl', 'pl', 'nl', 'it', 'ar', 'bn', 'fa', 'ur', 'ru', 'th', 'ko', 'sw', 'ms', 'ta', 'mr', 'te', 'zh-Hant'],
    routing: 'manual',
  },
  security: {
    checkOrigin: false,
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
