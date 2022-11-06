import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  define: {
    "process.env": {},
  },

  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
    },
  },
});
