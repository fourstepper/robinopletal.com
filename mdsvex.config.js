import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  "extensions": [".md"],
  "layout": {
      _: "./src/lib/layouts/default.svelte"
  },

  "smartypants": {
    "dashes": "oldschool"
  },

  "remarkPlugins": [],
  "rehypePlugins": []
});

export default config;
