import { defineConfig } from "astro/config";
import { integrations, markdown, vite } from "./src/nimbus/astro-config.ts";
import { docsTheme } from "astro-theme-docs";

export default defineConfig({
  site: "https://docs.longportwhale.com",
  srcDir: "./src/nimbus",
  build: {
    format: "file",
  },
  markdown,
  integrations: [...integrations, docsTheme()],
  vite,
});
