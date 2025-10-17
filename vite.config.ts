import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [sveltekit()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${fileURLToPath(new URL("./src/variables.scss", import.meta.url))}" as *;`,
        api: "modern-compiler"
      }
    }
  },

  build: {
    rollupOptions: {
      external: ['pg']
    }
  }
});
