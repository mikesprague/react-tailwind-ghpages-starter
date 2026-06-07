import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../build',
  },
  publicDir: '../public',
  base: './',
  appType: 'spa',
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
    }),
    react({
      // Use React plugin in all *.tsx files
      include: '**/*.{tsx}',
    }),
  ],
});
