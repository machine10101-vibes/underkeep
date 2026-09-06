import { defineConfig } from 'vite';

export default defineConfig({
  base: '/underkeep/',
  root: '.',
  publicDir: 'public',
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
  },
});
