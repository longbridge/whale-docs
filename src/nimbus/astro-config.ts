import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig as defineAstroConfig } from "astro/config";
import icon from "astro-icon";
import nimbus, { defineConfig as defineNimbusConfig } from "nimbus-docs";
import { hastPlugins } from "./plugins/satteri";

type MarkdownConfig = NonNullable<Parameters<typeof defineAstroConfig>[0]["markdown"]>;

const nimbusConfig = defineNimbusConfig({
  site: "https://docs.longportwhale.com",
  title: "Whale Docs",
  description: "Longport Whale documentation",
  locale: "en",
  github: "https://github.com/longbridge/whale-docs",
  editPattern: "https://github.com/longbridge/whale-docs/edit/main/docs/{path}",
  search: false,
  sidebar: {
    items: [
      { label: "English", items: [{ autogenerate: { directory: "en" } }] },
      { label: "简体中文", items: [{ autogenerate: { directory: "zh-CN" } }] },
      { label: "繁體中文", items: [{ autogenerate: { directory: "zh-HK" } }] },
    ],
    overviewLabel: "Overview",
    indexDisplay: "overview-leaf",
    defaultCollapsed: true,
  },
});

export const markdown = {
  syntaxHighlight: {
    type: "shiki",
    excludeLangs: ["math", "mermaid"],
  },
  shikiConfig: {
    themes: {
      light: "github-light-high-contrast",
      dark: "github-light-high-contrast",
    },
    defaultColor: false,
    langAlias: {
      objc: "objective-c",
      "obj-c": "objective-c",
      kt: "kotlin",
      kts: "kotlin",
      agsl: "glsl",
    },
  },
} satisfies MarkdownConfig;

export const integrations = [icon(), react(), nimbus(nimbusConfig, {
  markdown: { hastPlugins },
  validateMdx: false,
  rules: {
    "nimbus/frontmatter-shape": "off",
    "nimbus/image-ref": "off",
    "nimbus/internal-link": "off",
  },
})];

export const vite = {
  plugins: [tailwindcss()],
  optimizeDeps: {
    noDiscovery: true,
    esbuildOptions: {
      // Astro's dev transform emits jsxDEV calls. Keep React's pre-bundled
      // development runtime in the same mode even when the parent process was
      // launched with NODE_ENV=production; otherwise jsxDEV is undefined and
      // every hydrated React island is cleared after its SSR HTML first paints.
      define: {
        "process.env.NODE_ENV": '"development"',
      },
    },
    include: [
      "react",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "react-dom",
      "react-dom/client",
      "use-sync-external-store/shim",
      "use-sync-external-store/shim/with-selector",
      "nimbus-docs/client",
      "tippy.js",
      "medium-zoom",
      "mermaid",
    ],
  },
  resolve: {
    alias: {
      "@": new URL("./", import.meta.url).pathname,
      "~": new URL("./", import.meta.url).pathname,
      "@components": new URL("../components/", import.meta.url).pathname,
    },
  },
};
