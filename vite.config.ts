import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Define your manual chunks here
          // Example: 'lodash': ['lodash'],
          // ...
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust this value if needed
  },
});
