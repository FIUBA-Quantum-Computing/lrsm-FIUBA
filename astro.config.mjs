// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://fiuba-quantum-computing.github.io/lrsm-FIUBA/
  site: 'https://fiuba-quantum-computing.github.io',
  base: '/lrsm-FIUBA',
  vite: {
    plugins: [tailwindcss()],
  },
});
