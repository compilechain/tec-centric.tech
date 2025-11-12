import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://blog.tec-centric.tech",
  integrations: [mdx(), sitemap()],
  build: { format: "directory" }
});
