import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow, so the site
// works both on <user>.github.io/<repo>/ and on the custom domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.sneberg.cz',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
