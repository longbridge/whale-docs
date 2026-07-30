import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import { docsTheme } from "@longbridge/astro-theme-docs";

export default defineConfig({
  integrations: [
    react(),
    mdx(),
    docsTheme(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
