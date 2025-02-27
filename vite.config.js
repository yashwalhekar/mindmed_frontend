import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Moves dependencies to a separate chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // (Optional) Adjust chunk warning limit
  },
})
