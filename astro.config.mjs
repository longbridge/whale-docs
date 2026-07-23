import { defineConfig } from "astro/config";
import { integrations, markdown, vite } from "./src/nimbus/astro-config.ts";

export default defineConfig({
  site: "https://docs.longportwhale.com",
  srcDir: "./src/nimbus",
  trailingSlash: "ignore",
  build: {
    format: "file",
  },
  redirects: {},
  markdown,
  integrations,
  vite,
});
