// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: served under /rasid-download/
export default defineConfig({
  site: 'https://mahmoudmamdouh2270-lgtm.github.io',
  base: '/rasid-download',
  trailingSlash: 'ignore',
  build: {
    // اطبع السكربتات كملفات خارجية (مش inline) ليتوافق الموقع مع CSP الصارم بلا 'unsafe-inline'
    assets: '_astro',
  },
  vite: {
    build: {
      // يمنع inline الأصول الصغيرة (السكربتات/الصور) — كل شيء يصبح ملفًا من نفس الأصل
      assetsInlineLimit: 0,
    },
  },
});