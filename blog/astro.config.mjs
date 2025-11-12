import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://blog.tec-centric.tech",
  integrations: [sitemap()],
  build: { format: "directory" }
});
