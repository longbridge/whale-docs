import react from "@astrojs/react";
import icon from "astro-icon";
import nimbus, { defineConfig as defineNimbusConfig } from "nimbus-docs";

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
    type: "shiki" as const,
    excludeLangs: ["math", "mermaid"],
  },
};

export const integrations = [icon(), react(), nimbus(nimbusConfig, {
  validateMdx: false,
  rules: {
    "nimbus/frontmatter-shape": "off",
    "nimbus/image-ref": "off",
    "nimbus/internal-link": "off",
  },
})];

export const vite = {
  optimizeDeps: {
    noDiscovery: true,
    include: ["react", "react-dom", "nimbus-docs/client", "tippy.js", "medium-zoom", "mermaid"],
  },
  resolve: {
    alias: {
      "@": new URL("./", import.meta.url).pathname,
      "~": new URL("./", import.meta.url).pathname,
    },
  },
};
