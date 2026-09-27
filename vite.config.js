import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2019',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          fiber: ['@react-three/fiber', '@react-three/drei'],
          gsap: ['gsap']
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 4173
  }
});
