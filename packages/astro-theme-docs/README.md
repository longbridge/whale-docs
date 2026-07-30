# @longbridge/astro-theme-docs

An Astro documentation theme: layouts, UI components, and a Markdown pipeline,
built on top of [`nimbus-docs`](https://github.com/cloudflare/nimbus).

The split of responsibilities is deliberate. `nimbus-docs` owns the **data**
layer — content schema, sidebar/breadcrumb/TOC computation, and the types. This
theme owns the **visual** layer. It does not wrap or re-export nimbus, so you
configure nimbus directly and there is only ever one place your site's
configuration lives.

## Install

```sh
npm install @longbridge/astro-theme-docs
```

Peer dependencies you must also have — the theme does not bundle them:

```sh
npm install astro nimbus-docs tailwindcss @tailwindcss/vite \
            react react-dom @astrojs/react @base-ui/react
```

Optional, per feature. Nothing breaks if you leave them out; the corresponding
feature just stays off.

| Package | Enables |
|---|---|
| `@pagefind/default-ui` | the `DocSearch` component (also needs `pagefind` run over `dist` after build) |
| `tippy.js` | footnote and scroll-to-top tooltips |
| `medium-zoom` | click-to-zoom on content images |
| `mermaid` | ```` ```mermaid ```` diagram rendering |
| `@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono` | the default type stack (otherwise it falls back to system fonts) |

## Minimal setup

Four files. This is the whole thing.

**`astro.config.ts`**

```ts
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import nimbus, { defineConfig as defineNimbusConfig } from "nimbus-docs";
import { hastPlugins } from "@longbridge/astro-theme-docs/markdown";
import { docsTheme } from "@longbridge/astro-theme-docs";

const nimbusConfig = defineNimbusConfig({
  site: "https://docs.example.com",
  title: "Acme Docs",
  description: "Documentation for Acme",
  locale: "en",
  sidebar: { items: [{ autogenerate: { directory: "." } }] },
});

export default defineConfig({
  integrations: [
    react(),
    nimbus(nimbusConfig, { markdown: { hastPlugins: hastPlugins() } }),
    docsTheme({ customStyles: ["./src/styles/brand.css"] }),
  ],
  vite: { plugins: [tailwindcss()] },
});
```

**`src/content.config.ts`** — content lives in `src/content/docs/` by default.

```ts
import { defineCollection } from "astro:content";
import { docsCollection } from "nimbus-docs/content";

export const collections = {
  docs: defineCollection(docsCollection({ base: "docs" })),
};
```

**`src/styles/site.css`** — **required, and the one thing that is easy to get
wrong.** Tailwind v4 roots its content scan at the package containing the CSS
entry. Import the theme's `globals.css` directly and that root becomes the
theme, so every utility used only by *your* files is silently purged — no error,
just missing styles. Re-export it from your own entry and declare your sources:

```css
@import "@longbridge/astro-theme-docs/styles/globals.css";

@source "../";          /* your components, layouts, pages */
@source "../content";   /* MDX — class names appear in the content too */
```

**`src/pages/[...slug].astro`**

```astro
---
import { getCollection, render } from "astro:content";
import { getTOC, getPrevNext, getBreadcrumbs } from "nimbus-docs";
import DocsLayout from "@longbridge/astro-theme-docs/layouts/DocsLayout";
import { mdxComponents } from "@longbridge/astro-theme-docs/components";
import "../styles/site.css";
import "@longbridge/astro-theme-docs/styles/prose.css";
import "@longbridge/astro-theme-docs/styles/markdown-pipeline.css";

export async function getStaticPaths() {
  const entries = await getCollection("docs");
  return entries.map((entry) => ({
    params: { slug: entry.id.replace(/\.mdx?$/, "").replace(/\/?index$/, "") || undefined },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content, headings } = await render(entry);
---

<DocsLayout
  title={entry.data.title}
  description={entry.data.description}
  sidebar={/* SidebarItem[] — see "Sidebar data" below */}
  headings={getTOC(headings)}
  breadcrumbs={getBreadcrumbs(entry.id, { collection: "docs" })}
  prevNext={getPrevNext(entry.id, { sidebarTree: sidebar })}
  siteTitle="Acme Docs"
>
  <Content components={mdxComponents} />
</DocsLayout>
```

## Sidebar data

The theme renders a `SidebarItem[]` (type from `nimbus-docs/types`); it does not
compute one. Two ways to produce it:

- **nimbus autogenerate** — `getSidebar()` from `nimbus-docs`, driven by the
  `sidebar.items` config plus each page's `sidebar:` frontmatter. Start here.
- **Your own function** — when navigation comes from somewhere else (a JSON
  manifest, an OpenAPI spec). Return `SidebarItem[]` and the theme is happy.

## Theming

Every design token is a CSS custom property. Override the brand ones in the
stylesheet you pass to `customStyles` — a whole rebrand is usually this short:

```css
:root {
  --nb-primary: #0d9488;
  --nb-primary-hover: #0f766e;
  --nb-primary-foreground: #ffffff;
}
[data-mode="dark"] {
  --nb-primary: #2dd4bf;
  --nb-primary-hover: #5eead4;
}
```

Dark mode keys off `[data-mode="dark"]` on `<html>`, applied pre-paint by
BaseLayout's inline script (reading `localStorage["ui-mode"]`: `light` | `dark` |
`auto`). Other token groups: surfaces (`--nb-background`, `--nb-card`,
`--nb-muted`, `--nb-accent`), borders, status colors (`--nb-info`,
`--nb-success`, `--nb-warning`, `--nb-danger`, each with a `-muted` pair),
layout (`--nb-shell-max`, `--nb-sidebar-width`, `--nb-toc-width`,
`--nb-content-max`), radii, type scale, and shadows. Read
`src/styles/globals.css` — it is meant to be read.

## Layouts

| Import | Purpose |
|---|---|
| `.../layouts/BaseLayout` | html/head/body shell: theme bootstrap, SEO head, view transitions, client scripts |
| `.../layouts/DocsLayout` | three-column docs page: sidebar, content, TOC |

`DocsLayout` takes `DocsPageProps` (`nimbus-docs/types`) plus:

| Prop | Default | Notes |
|---|---|---|
| `siteTitle` | `""` | shown in the mobile sidebar header |
| `variant` | `"prose"` | `"compact"` tightens the heading and description — for dense generated reference pages |
| `wide` | `false` | widens the content column |
| `lang` | `"en"` | `<html lang>`; the theme never guesses this from the URL |
| `reportIssueUrl` | — | omit and the "Report an issue" link is hidden |
| `labels` | — | `{ navigation }` |

`header` and `footer` are named slots that fall back to the theme's own, so
zero config still gives you working chrome:

```astro
<DocsLayout {...props}>
  <MyHeader slot="header" />
  <MyFooter slot="footer" />
  <Content />
</DocsLayout>
```

**A note on owning your CSS entry.** Because Tailwind's scan root follows the
CSS entry (see `site.css` above), the layout that imports your stylesheets
belongs in your project. If you need heavy customisation, copy `DocsLayout` into
your site and compose the UI components directly — that is a supported path, not
a fallback.

## Chrome

`.../chrome/Header`, `.../chrome/Footer`, `.../chrome/PageHead`. All branding
arrives as props; the theme hardcodes no logo, no site name, no favicon.

`Header`: `tabs` (`{label, icon?, href, sections, aside?}[]`), `languageOptions`
(`{label, href, active}[]` — empty means no language menu), `logoLightSrc` /
`logoDarkSrc` / `logoHref`, `githubHref`, `activeSection`, `showSidebar`. Search
goes in the `search` slot:

```astro
<Header tabs={tabs} githubHref="https://github.com/acme/docs">
  <DocSearch slot="search" />
</Header>
```

`Footer`: `siteHref`, `logoLightSrc` / `logoDarkSrc` / `logoAlt`, `siteName`
(also the copyright name), `siteEmail`, `phones`. Link columns go in the default
slot, legal links in `bottom-links`.

`PageHead`: pass `siteName` for a `Title · Site` suffix and `faviconHref` for an
icon. Neither is injected unless you ask.

## Components

MDX prose components, ready to hand to `<Content components={…} />`:

```ts
import { mdxComponents } from "@longbridge/astro-theme-docs/components";
// Accordion, AccordionGroup, Card, Note, Tip, Warning
```

UI primitives, one import per directory:

```ts
import { Tabs, TabItem } from "@longbridge/astro-theme-docs/ui/tabs";
```

| Subpath | Exports |
|---|---|
| `ui/aside` | `Aside` |
| `ui/badge` | `Badge` |
| `ui/banner` | `Banner` |
| `ui/breadcrumbs` | `Breadcrumbs` |
| `ui/button` | `Button` |
| `ui/card` | `Card` |
| `ui/card-grid` | `CardGrid` |
| `ui/checkbox` | `Checkbox`, `CheckboxGroup` |
| `ui/code` | `Code` |
| `ui/collapsible` | `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` |
| `ui/combobox` | `Combobox`, `ComboboxOption`, `ComboboxGroup`, `ComboboxGroupLabel` |
| `ui/dialog` | `Dialog`, `DialogContent`, `DialogClose` |
| `ui/file-tree` | `FileTree` |
| `ui/icon` | `LucideIcon` |
| `ui/layer-card` | `LayerCard`, `LayerCardHeader`, `LayerCardContent` |
| `ui/link-button` | `LinkButton` |
| `ui/package-managers` | `PackageManagers` |
| `ui/page-actions` | `PageActions`, `PageActionLinks` |
| `ui/pagination` | `Pagination` |
| `ui/scroll-to-top` | `ScrollToTop` |
| `ui/search` | `DocSearch` |
| `ui/sidebar` | `Sidebar`, `SidebarFilter`, `SidebarProductNav`, `SidebarGroup`, `SidebarLink`, `SidebarStateRestore` |
| `ui/steps` | `Steps`, `Step` |
| `ui/tabs` | `Tabs`, `TabItem`, `TabsList`, `TabsTrigger`, `TabsContent` |
| `ui/theme-toggle` | `ThemeToggle` |
| `ui/toc` | `TOC`, `MobileTOC` |

There is no all-components barrel on purpose: Astro pulls every imported
component's scoped `<style>` into the page's module graph, so a single entry
would put all 26 components' CSS on every page.

## Markdown pipeline

```ts
import { hastPlugins } from "@longbridge/astro-theme-docs/markdown";
nimbus(config, { markdown: { hastPlugins: hastPlugins() } });
```

Heading slugs (with `{/* custom-id */}` overrides), autolinked heading anchors,
mermaid fence extraction, scrollable table wrappers, empty-table-header removal,
plus nimbus's own external-link and title-figure plugins. Order matters and is
fixed. Individual plugins are exported too, if you are assembling your own list.

Mermaid needs two matching pieces: `mermaid` installed, and
`markdown.syntaxHighlight.excludeLangs` including `"mermaid"` so Shiki leaves
the fence alone.

## API reference rendering

Generic OpenAPI helpers, for building API docs from a spec you parse yourself.
Loading and assembling the document is yours — that part is too project-specific
to generalise.

```ts
import { resolveSchema, operationPath } from "@longbridge/astro-theme-docs/api";
```

`resolveSchema(document, schema)` follows `$ref` and flattens `allOf`.
`operationPath(path)` turns `/v1/users/{id}` into a URL slug.

```astro
import ApiResponseSchema from "@longbridge/astro-theme-docs/api/ApiResponseSchema";
import ApiSchemaFields from "@longbridge/astro-theme-docs/api/ApiSchemaFields";
import ApiEndpointCopy from "@longbridge/astro-theme-docs/api/ApiEndpointCopy";
```

`ApiResponseSchema` recognises an envelope — a wrapper whose real payload sits
in one field — and expands the payload. Configure it for your API:
`envelope={["code", "message", "data"]}` (the default), `payloadKey="data"`, or
`envelope={false}` to always render flat.

All copy is passed in, not derived from a locale:

```astro
<ApiSchemaFields
  schema={schema}
  document={document}
  labels={{ required: "必填", childAttributes: "子属性" }}
/>
```

## Search

`DocSearch` wraps Pagefind. Install `@pagefind/default-ui`, run
`pagefind --site dist` after `astro build`, and place it in Header's `search`
slot. Skip all three and you have a site without search — nothing else changes.

## License

MIT
