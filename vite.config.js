import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Must match your GitHub repo name exactly
  base: '/rihan-portfolio/',
  plugins: [
    tailwindcss(),
  ],
});
