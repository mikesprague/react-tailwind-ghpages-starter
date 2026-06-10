import path from 'node:path';

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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  appType: 'spa',
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
    }),
    react({
      include: 'src/**/*.tsx',
    }),
  ],
});
