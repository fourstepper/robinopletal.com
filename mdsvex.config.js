import { defineMDSveXConfig as defineConfig } from "mdsvex";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from "rehype-slug";

const config = defineConfig({
  "extensions": [".md"],
  "layout": {
      _: "./src/lib/layouts/default.svelte"
  },

  "smartypants": {
    "dashes": "oldschool"
  },

  "remarkPlugins": [],
  "rehypePlugins": [rehypeSlug, rehypeAutolinkHeadings]
});

export default config;
