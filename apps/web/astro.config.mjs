import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.evolutionmakers.plus',
  trailingSlash: 'never',
  build: { format: 'file' }
});
