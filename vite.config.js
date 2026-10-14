import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — rarely changes, long-lived cache
          'vendor-react': ['react', 'react-dom'],
          // Router
          'vendor-router': ['react-router-dom'],
          // Animation library (heavy ~70KB gzip, used everywhere)
          'vendor-motion': ['framer-motion'],
          // Icons (tree-shaken but still significant)
          'vendor-icons': ['lucide-react', 'react-icons'],
          // Carousel (used on homepage and features)
          'vendor-slick': ['react-slick', 'slick-carousel'],
        }
      }
    },
    chunkSizeWarningLimit: 600,
  }
});