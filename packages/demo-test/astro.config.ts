import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import nimbus, { defineConfig as defineNimbusConfig } from "nimbus-docs";
import { hastPlugins } from "@longbridge/astro-theme-docs/markdown";
import { docsTheme } from "@longbridge/astro-theme-docs";

const nimbusConfig = defineNimbusConfig({
  site: "https://example.com",
  title: "Theme Demo",
  description: "Demo site for @longbridge/astro-theme-docs",
  locale: "en",
  search: false,
  sidebar: { items: [{ autogenerate: { directory: "." } }] },
});

export default defineConfig({
  integrations: [
    react(),
    nimbus(nimbusConfig, { markdown: { hastPlugins: hastPlugins() }, validateMdx: false }),
    docsTheme({ customStyles: ["./src/styles/brand.css"] }),
  ],
  vite: { plugins: [tailwindcss()] },
});
