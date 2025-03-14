import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'import.meta.env': env, // Directly pass env variables (no need for JSON.stringify)
    },
    plugins: [react()],
    server: {
      watch: {
        usePolling: true, // Fixes potential Vite file-watching issues on some systems
      },
      host: true, // Allows network access (useful for testing on mobile devices)
      port: 5173, // Ensures a fixed port (change if needed)
      strictPort: true, // Prevents Vite from picking a random port if 5173 is in use
    },
    optimizeDeps: {
      exclude: ['react-router-dom'], // Ensures smooth builds when using React Router
    },
  };
});
