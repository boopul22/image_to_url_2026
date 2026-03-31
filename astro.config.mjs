// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config — imagetourl.cloud
export default defineConfig({
  site: 'https://imagetourl.cloud',
  adapter: cloudflare(),
  security: {
    checkOrigin: false,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});