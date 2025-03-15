import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { compression } from "vite-plugin-compression2";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  plugins: [react(), ViteMinifyPlugin({}), compression(), ViteMinifyPlugin()],
  build: {
    rollupOptions: {
      treeshake: true,
    },
  },
});
