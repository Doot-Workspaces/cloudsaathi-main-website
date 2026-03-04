import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isSSR = process.argv.includes('--ssr')

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: isSSR ? false : 'esbuild',
    rollupOptions: isSSR
      ? {}
      : {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'lucide-vendor': ['lucide-react'],
            },
          },
        },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
