// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://boulangerie-dupont.fr',
  vite: {
    plugins: [tailwindcss()]
  }
});