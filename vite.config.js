import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsx: {
        // Allow JSX text like "High Match Rate (>90%)" without errors
        throwIfNamespace: false
      }
    })
  ],
  server: {
    port: 3000, // Your existing dev port
  },
  build: {
    rollupOptions: {
      // Treat recharts as external to avoid bundling errors
      external: ['recharts']
    }
  }
});
