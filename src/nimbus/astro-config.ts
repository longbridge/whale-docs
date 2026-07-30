import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig as defineAstroConfig } from "astro/config";
import icon from "astro-icon";
import nimbus, { defineConfig as defineNimbusConfig } from "nimbus-docs";
import { hastPlugins } from "@longbridge/astro-theme-docs/markdown";

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
    // Explicit light + dark palettes. A custom theme pair keeps Shiki tokens
    // inline (--shiki-light / --shiki-dark on each span); globals.css then
    // switches token color by `data-mode`. Nimbus' alternative "classed" path
    // (nb-shiki-* + a generated _nimbus/shiki.css) isn't wired into this app,
    // so inline is what actually paints colors — hence the explicit themes.
    themes: {
      light: "github-light-high-contrast",
      dark: "github-dark-high-contrast",
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
  markdown: { hastPlugins: hastPlugins() },
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
    rolldownOptions: {
      // Astro's dev transform emits jsxDEV calls. Keep React's pre-bundled
      // development runtime in the same mode even when the parent process was
      // launched with NODE_ENV=production; otherwise jsxDEV is undefined and
      // every hydrated React island is cleared after its SSR HTML first paints.
      transform: {
        define: {
          "process.env.NODE_ENV": '"development"',
        },
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
