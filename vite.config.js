import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Ensure Render finds the correct folder
    chunkSizeWarningLimit: 2000, // Adjust warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Separate vendor files
          }
        },
      },
    },
  },
});
