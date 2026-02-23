import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: isSsrBuild ? false : 'esbuild',
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'lucide-vendor': ['lucide-react'],
            },
          },
        },
  },
}));
