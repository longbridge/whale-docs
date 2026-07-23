# Whale Docs Design & Authoring System

> **Astro migration note (2026-07):** Whale Docs now runs on Astro, Starlight,
> and Bun. `README.md`, `astro.config.mjs`, and `src/styles/whale.css` are the
> implementation sources of truth. Content lives in `docs/en`, `docs/zh-CN`,
> and `docs/zh-HK`; generated specifications are
> `openapi.{en,zh-CN,zh-HK}.json`. References below to the former documentation
> runtime, `docs.json` styling values, root language folders, or legacy `style.css`
> describe the preserved visual intent only and do not override this
> architecture. `docs.json` remains solely as navigation-generation input.

## 1. Purpose and design direction

This is the implementation guide for **Whale Docs**, the unified documentation
portal for the Longport Whale solution, built with Astro and Starlight.
Documentation authors, product designers, and coding agents must
use it when creating or reviewing a page, changing site configuration, or
styling the portal.

> **Brand & tokens live in the Whale Design System.** For brand color, neutral
> and status colors, typography, radius, spacing, and icons, the source of truth
> is the [Whale Design System](/en/design-system/overview) foundation
> (`/en/design-system/*`). This document governs portal authoring and information
> architecture and defers all token *values* to that foundation.

Whale Docs serves broker decision makers, implementation and operations teams,
and developers integrating through three API paths. Readers scan for the
integration path that fits them, follow task-oriented guides, and look up
individual API operations. The portal prioritizes:

- a clear entry point that routes each audience to the right product;
- task-first guides that get the reader to a working request quickly;
- a stable, business-domain information architecture across three languages;
- a faithful, generated API reference with an interactive playground;
- quiet, content-forward pages where the documentation — not the chrome — is the
  product.

This document belongs to the Whale Design System family and consumes its shared
foundation. It applies that system's brand identity and discipline
(source-of-truth boundaries, restrained brand-color use, ownership boundaries, a
generic-template test, and an agent checklist), but every concrete rule here is
specific to a trilingual documentation portal — not to a product application. Do
not import product-application concepts (DataTables, Sheets, drawers,
master-detail, permission-aware routing) into this site.

### Source-of-truth boundary

This file is the single source of truth for **how Whale Docs looks and reads**.
It governs site configuration, information architecture, MDX authoring
conventions, brand-color use, layout overrides, dark-mode parity, and the
trilingual contract.

It does **not** duplicate what other files already own:

| Concern | Source of truth |
| --- | --- |
| Product & role terminology (Whale, Broker, Customer, …) | `CONTEXT.md` glossary |
| Repository structure, build, regeneration workflow | `README.md` |
| Site config values (colors, logo, nav, footer, playground) | `astro.config.mjs` |
| Layout/appearance overrides | `src/styles/whale.css` |
| Broker API reference content | generated from `../whale-openapi-docs` |
| Sync pipeline (YAML → specs + nav) | `.claude/skills/whale-api-import` |

When a rule here and a value in `astro.config.mjs` or `src/styles/whale.css` disagree, the config
file is authoritative for the value; this document is authoritative for the
*intent* and the constraints on changing it.

### Generated-vs-authored boundary

The site has two content classes, and design rules apply differently to each.

- **Authored** — hand-written MDX guides (`introduction`, product overviews,
  get-started, operations, changelog) and site config. These follow every rule
  in this document.
- **Generated** — the Broker API reference: `openapi.{en,zh-CN,zh-HK}.json`, the
  data-porter MDX pages, and the Broker API navigation groups in `docs.json`.
  These are produced from `../whale-openapi-docs`. **Never hand-edit generated
  files.** To change them, fix the source repo and re-run the import pipeline.
  Design work on generated content happens through the pipeline and through
  `src/styles/whale.css`, not by editing output.

## 2. UI style foundation

Whale Docs uses Astro's content pipeline and Starlight integrations underneath a
fully custom Whale presentation layer. The visible shell and documentation
primitives are adapted from the CC BY 4.0 Cloudflare Nimbus implementation; no
unthemed Starlight page chrome should remain visible. Nimbus supplies the layout,
prose, sidebar, table, callout, step, pagination, and state patterns. Whale
tokens and the established information architecture supply the identity.
Reusable interactive component structures follow ReUI, and all interface icons
come from Lucide. Do not introduce a second component or icon vocabulary.
The implementation source of truth is `astro.config.mjs`, custom components in
`src/components`, and `src/styles/whale.css`.

| Property | Current standard |
| --- | --- |
| Platform | Astro + Starlight, run with Bun |
| Site name | `Whale Docs` |
| Brand color | Whale Violet `#7245F2` — see [Design System → Color](/en/design-system/color) |
| Color mode | Light **and** dark, at full parity |
| Icon family | Lucide — see [Design System → Iconography](/en/design-system/iconography) |
| Typography | Whale compact scale and families per [Design System → Typography](/en/design-system/typography) |
| Logo | `logo/whale-light.png`, `logo/whale-dark.png`; favicon `whale-mark.png` |
| API playground | Interactive (`api.playground.display: "interactive"`) |
| Page action | Copy the current document body with localized success/error feedback |
| Languages | `en` (default), `zh-CN`, `zh-HK` |

The product Design System's `13px` base applies to dense financial application
interfaces. Documentation is a reading surface and uses a `15px` body size,
with `32px` / `24px` / `20px` for page, section, and subsection headings.
Navigation and metadata may remain at `12–14px` to keep the shell compact.

### Documentation component contract

Documentation primitives inherit the vendored Cloudflare Nimbus contract. The
contract is implemented as `--nb-*` custom properties in
`src/styles/cloudflare/globals.css`; Whale-specific changes are limited to the
brand adapter in `src/styles/whale.css`.

| Token | Standard | Used by |
| --- | --- | --- |
| `--nb-content-max` | `43.5rem`, `52rem` at ≥1536px | reading column |
| `--nb-sidebar-width` | `18.75rem` | desktop navigation rail |
| `--nb-toc-width` | `18rem` | on-page navigation rail |
| `--nb-h1-size` | `2.1875rem` | page titles |
| `--nb-h2-size` | `1.3rem` | section headings |
| `--nb-h3-size` | `1.1rem` | subsection headings |
| `--nb-font-sans` | Inter Variable stack | prose and interface text |
| `--nb-font-mono` | JetBrains Mono stack | code and technical tokens |
| `--nb-border` | semantic neutral | component hairlines |
| `--nb-card` | semantic surface | code, cards and overlays |

Component appearance follows these rules:

- **Code blocks** use the card surface, one neutral hairline border, the shared
  surface radius, no shadow, and a compact bordered copy control in the upper
  corner. They never imitate a dark IDE window in light mode.
- **Callouts** use the same radius and padding as code blocks. Status color is
  limited to the icon, border, and a very light semantic tint; title and body
  retain the normal text hierarchy.
- **Cards, accordions, and diagrams** use the same neutral hairline and surface
  radius. Elevation comes from contrast, not drop shadows.
- **Tables** remain flat reading surfaces with horizontal separators. They do
  not become cards and do not use vertical grid lines.
- **Interactive controls** use the shared control radius, Lucide icons, visible
  focus rings, and ReUI/shadcn state behavior.

### Nested radii

Keep nested rounded surfaces concentric:

`inner radius = outer radius - inset`

- Derive the inner radius with `calc()` from the outer radius token and the
  actual padding or inset.
- Do not choose an unrelated fixed radius for a nested surface.
- Apply this relationship to cards, framed controls, badges inside containers,
  overlays, and every other radius-stacking case.

Compose the Whale Nimbus primitives before introducing any new rule. The custom
theme owns component geometry, typography, spacing, and states; authors own
content and structure.

### Ownership boundary

This document defines the portal's information architecture and authoring
language, not a parallel UI kit.

- **Whale Docs owns**: product tab order, navigation grouping, page anatomy,
  content voice, the brand token, cross-linking conventions, and the deliberate
  custom page shell and layout rules in `src/styles/whale.css`.
- **The Whale Nimbus layer owns**: visible component geometry and behavior —
  cards, callouts, accordions, tables, code blocks, sidebar, tabs, search,
  navbar, pagination, and footer, including hover, focus, and dark-mode states.
  Starlight remains an implementation dependency for routing, search, and API
  reference generation, not the visual theme. Custom Whale wrappers may reuse
  its search, locale, theme-state, edit-link, and last-updated behavior, provided
  their visible geometry and states are fully controlled by Whale tokens.
- **Pages compose** documented platform MDX components with their standard
  props. They must not reproduce a component with hand-styled markup or inline
  CSS.
- **Do not** reproduce component geometry in authored MDX. Reusable components
  and `src/styles/whale.css` remain authoritative as the platform evolves.

### `src/styles/whale.css` discipline

`src/styles/whale.css` is the Whale Nimbus theme layer. It maps the design-system
tokens to the documentation shell and neutralizes any remaining Starlight
defaults. The current, sanctioned responsibilities are:

- **Wider sidebar** (`20rem` at `lg+`) — deeply nested, localized navigation
  titles need the room; content padding is matched so nothing overlaps.
- **Full-width layout** — the shell centers content in a capped column with
  large dead margins on wide screens; both content and footer stretch to the
  viewport. Center-mode pages (changelog) are widened to `72rem` instead.
- **Slim tabs row** (`36px`) and removed inter-row divider — tighten the
  header for a docs site.
- **Compact footer** — replace marketing-scale padding; hide the platform
  attribution bar and the theme switch in the footer.
- **Method-tinted "Try it" button** — the playground button is tinted to match
  the current request method's color chip (GET green, POST blue, PUT yellow,
  PATCH orange, DELETE red), with lifted alpha and brighter text in dark mode.

Rules for changing it:

- Add a rule only when it expresses a reusable Whale token, Nimbus primitive,
  or structural/layout requirement. Never add one-off per-page decoration.
- Every rule is **scoped and commented** with what it targets and why. Match the
  existing comment style; unexplained selectors are not accepted.
- Prefer Astro configuration or a reusable component over a fragile selector.
- Any color used in an override must have a light-mode and a dark-mode value.

## 3. Brand color

The brand color is **Whale Violet `#7245F2`**, the canonical primary defined by
the [Whale Design System](/en/design-system/color#primary-ramp). In this portal
it is declared as the `--nb-primary` semantic token in
`src/styles/whale.css` (with light/dark variants drawn from the primary ramp)
and applied to links, active navigation, primary buttons, and accents.

The foundation owns the value and its ramp; this section only governs how the
portal applies it. Do not redefine the brand hex here or approximate a shade.

### Usage rules

- The brand color is applied **by the Whale Nimbus theme**. Authors do
  not paint brand color onto page content.
- Let links, active nav, and the primary theme controls carry brand identity.
  Body copy, headings, code, and data stay in the theme's neutral text colors.
- Do not introduce raw hex values (`#7245F2`, `rgb(...)`) in MDX or in
  `src/styles/whale.css` for decoration. The only place a brand hex belongs is
  the semantic token declaration in `src/styles/whale.css`.
- Never use purple to convey status. Keep success, warning, and error meaning on
  the platform's semantic callouts (`Note`, `Tip`, `Warning`) and the method
  colors on API chips.
- Do not add purple rules, tints, or per-page accents outside the semantic tokens.

## 4. Information architecture and navigation

Whale Docs has one fixed, business-shaped IA repeated identically across three
languages.

### 4.1 Product tabs

Product entries per language, in **fixed order**:

**Docs → WhaleSDK → Broker API → Trading API → OpenAPI**

- The order is a deliberate reader journey (understand → operate → embed →
  integrate server-side → integrate client-side → open platform). Do not
  reorder tabs to reflect implementation status.
- OpenAPI is an external link to `open.longportapp.com` during migration.
- A product that is not yet built keeps its tab with a skeleton or availability
  page (Section 5.6/5.7). Never drop the tab.

### 4.2 Sidebar groups — by business domain

Within a product, group the sidebar **by business domain** (Cash Management,
Risk Control, …), not by transport or by generated/authored origin.

- In the Broker API reference, REST operations (`"METHOD /path"` entries) and
  data-porter dataset pages (MDX paths) are mixed inside the same domain group.
  The reader thinks in domains, not in how an endpoint is implemented.
- Broker API navigation is generated. Hand-maintained groups (Overview, Get
  Started, Operations) are protected by `BROKER_API_MANUAL_GROUPS` in the import
  pipeline and are concatenated around the generated groups on every re-run.
- Top-level group titles use the `中文(English)` bracketed convention so the
  pipeline can split them per language.

### 4.3 Three navigation layers

Keep these layers distinct; do not duplicate destinations across them.

1. **Product tabs** — which product am I in.
2. **Sidebar groups** — which business domain / topic within the product.
3. **In-page headings (`##`/`###`)** — which part of this page, surfaced as the
   on-page table of contents.

## 5. Page archetypes and authoring conventions

All authored pages are MDX with required frontmatter. Choose the archetype that
matches the page's job before writing.

### Frontmatter contract

Every authored page starts with:

```mdx
---
title: <concise page title>
description: <one sentence stating the page's job>
---
```

- `title` names the page; `description` states its single job in one sentence.
- Data-porter reference pages additionally carry `openapi: post /v1/datasets/<name>`.
  These are generated — do not author them by hand.

### Component vocabulary

Use the theme's MDX components for their documented purpose. Current, sanctioned
usage:

| Component | Use for |
| --- | --- |
| `Card` / `CardGroup` | A small set of parallel destinations (product hub, entry points). Give each an accurate Lucide `icon`. |
| Table | "At a glance" facts and side-by-side comparison. The default for structured key/value and role→task→destination content. |
| Numbered list | Ordered task steps (quickstart, get-started sequences). |
| `Note` | Neutral, easily-missed context. The default callout. |
| `Tip` | Optional best-practice advice. |
| `Warning` | A real consequence — data, auth, or irreversible impact. |
| `Accordion` / `AccordionGroup` | Progressive disclosure of secondary detail. |
| `Update` | Dated changelog entries (changelog page only). |

- Prefer a **table** over a card grid for facts and comparisons. Reserve
  `CardGroup` for navigation to a handful of parallel destinations.
- Callouts are scarce. Do not stack multiple callouts or wrap ordinary prose in
  a `Note`. Reserve `Warning` for genuine consequence.
- Icons are Lucide and must carry meaning (`server`, `smartphone`, `plug`).
  Do not decorate every card or heading with an icon.

### Cross-linking

- Internal links are language-absolute: `/en/broker-api/overview/` (and the `zh-CN`
  / `zh-HK` mirrors). Never link across languages.
- Mark external links with a trailing `↗`, e.g. `[OpenAPI ↗](https://open.longportapp.com)`.
- Link to the concept's own page rather than restating it; this portal has one
  home for each concept.

### 5.1 Portal landing / hub

`introduction.mdx`. Routes each audience to the right product.

- Lead with one sentence on what Longport Whale is and what this portal covers.
- Use a `CardGroup` for the product set and a **role → primary task → start
  here** table as the router.
- End with a short numbered "Next steps".

### 5.2 Product overview

e.g. `broker-api/overview.mdx`. Orients a reader who has picked a product.

- Open with one paragraph on the caller and authorization model.
- Use an "At a glance" table (caller, authorization subject, data scope, form).
- Include a "Not for" section that redirects mismatched readers to the right
  product.
- List environments (test/production base URLs) in a table.
- End with a numbered "Get started" path into the guides.

### 5.3 Get-started / task guide

`get-started/*` (quickstart, authentication, passthrough-headers). Gets the
reader to a working request.

- One task per page; state it in the first sentence.
- Use numbered steps with runnable code blocks; show real base URLs and header
  names.
- Put required-header and credential facts in tables.
- Keep prerequisites at the top and the "what next" link at the bottom.

### 5.4 Conceptual / operations reference

e.g. `operations.mdx` (error model, rate limits, deprecation). Explains
cross-cutting rules.

- Prefer tables for enumerable facts (error codes, limits).
- Mark not-yet-final sections with an explicit TBD marker rather than omitting
  them silently.

### 5.5 API reference (generated) — boundary

The Broker API reference and data-porter pages are generated. Authors do not
edit them. When reference content is wrong, fix `../whale-openapi-docs` and
re-import. The playground, method tinting, and grouping are governed here but
implemented through config and pipeline (Section 6).

### 5.6 Under-construction skeleton

e.g. `whalesdk/overview.mdx`. A product whose docs
are not written yet keeps a real skeleton page: state what the product is, who
it is for, and that content is in progress. Do not leave a dead tab or a blank
page.

### 5.7 Availability / coming-soon

e.g. `trading-api/introduction.mdx`. A planned product states its purpose,
audience, and expected availability (e.g. "planned to start in Q4 2026"), and
links to the alternative available today. Convert relative dates to absolute.

### 5.8 Changelog

Center-mode page using dated `Update` components. `src/styles/whale.css` widens center-mode
pages to `72rem`; keep entries reverse-chronological and concise.

## 6. API reference, playground, and examples

- The playground is **interactive** (`api.playground.display`), with servers
  `https://b-api.longbridge.xyz` (test) and `https://b-api.lbkrs.com`
  (production) declared in the generated OpenAPI specifications.
- The "Try it" button is tinted per request method by `src/styles/whale.css`. If the
  platform changes the method chip classes, update the scoped selectors — do not
  hardcode a single color.
- Example requests in authored guides must use a **real, stable dataset** so
  they keep working as the source repo evolves; the current convention is
  `account_cash_balances` (a core, stable dataset). When the source repo renames
  or removes a dataset, update every authored example that references it
  (quickstart, authentication, changelog).
- Authentication in the reference is `bearerAuth` → `Authorization: Bearer
  <ACCESS_TOKEN>`. Keep the authored Authentication page consistent with what
  the specs declare.

## 7. Trilingual contract

- Three languages: `en` (default), `zh-CN`, `zh-HK`,
  matching the legacy `accept-language` values (`en` / `zh-CN` / `zh-HK`).
- Every authored page exists in all three directories (`docs/en/`, `docs/zh-CN/`, `docs/zh-HK/`)
  with **identical structure**. Editing one means editing all three.
- The API reference ships one spec per language
  (`openapi.{en,zh-CN,zh-HK}.json`) so each language shows single-language
  content. Keep the three specs in sync — this is handled by the import
  pipeline, not by hand.
- Never mix languages on a page and never cross-link between language trees.
- Terminology in each language follows the `CONTEXT.md` glossary, including its
  `Avoid` lists. Do not invent alternate product or role names.

## 8. Content voice

- Write for a professional integrator: direct, task-first, no marketing tone.
- Lead with what the reader does or needs to know; put background after.
- Preserve original casing for identifiers, header names, URLs, tokens, and
  code. Do not sentence-case technical values.
- Name products and roles exactly as defined in `CONTEXT.md`.
- Keep pages single-purpose; if a page is trying to do two jobs, split it.

## 9. Layout and responsive behavior

- The site runs **full-width** by deliberate override; do not reintroduce the
  theme's capped, centered column.
- The sidebar is `20rem` at `lg+` to fit nested localized titles; content
  padding is matched. Do not narrow it without also fixing the offset.
- Below `lg`, the custom shell collapses the sidebar behind its trigger — keep that
  behavior; do not add a second navigation control.
- Tables are the primary dense-content device. Keep them readable; do not force
  wide comparison tables into narrow columns.
- The footer is compact and full-width, with the platform attribution bar and
  in-footer theme switch hidden by design.

## 10. Dark mode

Whale Docs ships **light and dark at full parity** — this is a hard difference
from light-only internal Whale surfaces. The foundation treats
light as the authoritative baseline; see
[Design System → Color modes](/en/design-system/color#color-modes).

- Every logo, color, and `src/styles/whale.css` rule must have a working dark-mode
  form. The logo already ships `light`/`dark` variants; brand colors already
  declare `light`/`dark`.
- Any new override that sets a color must define both modes (follow the existing
  `[data-theme="dark"]` pattern in `src/styles/whale.css`).
- Do not remove or hide the theme's dark-mode toggle from the reading area
  (only the redundant in-footer switch is hidden).

## 11. Do and do not

### Do

- Choose the archetype (Section 5) before writing MDX.
- Keep the six product tabs in fixed order and mirror every authored page across
  all three languages.
- Group navigation by business domain; mix REST and dataset pages by domain.
- Prefer tables for facts and comparisons; reserve card grids for parallel
  navigation.
- Fix API reference content at the source repo and re-import — never in place.
- Keep brand color in semantic theme tokens; keep `src/styles/whale.css` structural, scoped,
  commented, and dark-mode-complete.
- Preserve original casing for all technical values.

### Do not

- Do not hand-edit generated files (`openapi.*.json`, data-porter MDX, generated
  nav groups).
- Do not add one-off colors, fonts, gradients, shadows, or decorative CSS.
- Do not put raw brand hex values in MDX or outside the token block in `src/styles/whale.css`.
- Do not use purple to signal status, or callouts to decorate ordinary prose.
- Do not reorder or drop product tabs, cross-link between languages, or let the
  three language trees drift apart.
- Do not import CRM-app patterns (DataTable, Sheet, drawer, master-detail,
  permission routing) — they do not exist on this site.
- Do not narrow the sidebar or re-cap the content width without matching every
  dependent override.

### The generic-docs test

Before accepting a page, imagine the Whale logo and purple accent removed. If
what remains is a plausible, well-structured Whale Docs page — right audience,
right archetype, faithful terminology, trilingual-ready — it passes. If it reads
like a default platform starter with product nouns pasted in (a card grid where
a table belongs, decorative callouts, an icon on every heading, marketing tone),
it fails.

## 12. Agent implementation guide

When implementing or changing a page:

1. Identify the audience and the single job of the page.
2. Select one archetype from Section 5.
3. Confirm whether content is authored or generated — stop and use the pipeline
   if generated.
4. Write the frontmatter, then compose with the sanctioned component vocabulary.
5. Use language-absolute links and the `↗` external convention.
6. Mirror the page across `docs/en/`, `docs/zh-CN/`, `docs/zh-HK/` with identical structure.
7. Verify light and dark mode.
8. Check against the Do / Do not rules and the review checklist.

For a configuration or style change:

1. Prefer Astro configuration or a reusable component over CSS selectors.
2. If `src/styles/whale.css` is required, scope the selector, comment the intent, and
   provide both color modes.
3. Preview with `bun run dev` and confirm no layout regression on wide and narrow
   viewports, both themes.

### Review checklist

- Does the page have one audience and one job stated in the first sentence?
- Is it the right archetype, with the sanctioned components (table over card
  grid where appropriate)?
- Is authored vs generated respected — no hand-edits to generated files?
- Are links language-absolute, with `↗` on external links?
- Does the page exist identically in all three languages?
- Does it use `CONTEXT.md` terminology, honoring the `Avoid` lists?
- Is brand color consumed through semantic tokens, with no raw hex in content?
- Are callouts scarce and meaningful, and casing preserved on technical values?
- Do light and dark both render correctly?
- If `src/styles/whale.css`/`astro.config.mjs` changed: is it scoped, commented, dark-complete,
  and free of one-off decoration?
