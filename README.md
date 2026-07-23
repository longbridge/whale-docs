# Whale Docs

Documentation for Longport Whale, built with Astro and Bun.

The site covers Docs, WhaleSDK, BrokerAPI, TradingAPI, and OpenAPI in English,
Simplified Chinese, and Traditional Chinese.

## Development

```bash
bun install
bun run dev
```

The local server starts at <http://localhost:4321>. To build and preview the
production output:

```bash
bun run build
bun run preview
```

## Repository structure

```text
astro.config.mjs                # Astro entrypoint
docs.json                       # Product and sidebar navigation source
openapi.{en,zh-CN,zh-HK}.json  # BrokerAPI specifications
docs/en/                        # English source documents
docs/zh-CN/                     # Simplified Chinese source documents
docs/zh-HK/                     # Traditional Chinese source documents
src/nimbus/                     # Nimbus application shell and Whale adapters
src/nimbus/styles/              # Design tokens, prose, and component styles
```

Source Markdown and MDX files remain unchanged under `docs/`. Public locale
routes are `/en/`, `/zh-CN/`, and `/zh-HK/`.

## Updating BrokerAPI

The API source lives in the sibling `../whale-openapi-docs` repository. Do not
edit the generated OpenAPI JSON files directly.

```bash
python3 scripts/convert.py --dry-run
python3 scripts/convert.py
bun run build
```

The import updates all three specifications and the business-domain navigation
in `docs.json`. Enable the repository hook in each clone when automatic API sync
is required:

```bash
git config core.hooksPath .githooks
```

## UI foundation

The UI uses the Nimbus documentation application as its foundation with Whale
branding and navigation. See [NOTICE.md](./NOTICE.md) for attribution.

Keep internal drafts and decision records in the ignored `docs/internal/`
directory. They must not appear in public navigation or Git history.
