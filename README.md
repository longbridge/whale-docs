# Whale Docs

The unified documentation portal for the Longport Whale solution, built with [Mintlify](https://mintlify.com).

The target information architecture covers general product and implementation docs, WhaleSDK for iOS/Android/WebTrade, Broker API, Trading API, and OpenAPI. The current published content is the existing Broker API (`b-api`) corpus; the repository migration will be phased.

## Internal design documents

Whole-solution designs, information architecture, planning documents, and architectural decision records belong under `docs/internal/`. This directory is intentionally listed in `.gitignore`: its contents are local working material and must not be added to the public Mintlify navigation or committed to Git.

Legacy site: https://apidocs.longbridgewhale.com/whaleapi/

## Local development

```bash
npm i -g mint
mint dev
```

Open http://localhost:3000.

## Structure

```
docs.json                 # site config + per-language navigation
openapi.{en,cn,zh-hant}.json  # per-language OpenAPI 3.0 specs (one per language tree)
en/                       # English pages (default language)
cn/                       # Simplified Chinese pages
zh-hant/                  # Traditional Chinese pages
  introduction.mdx        # landing page
  quickstart.mdx          # first request walkthrough
  essentials/
    authentication.mdx    # HMAC-SHA256 signing guide
    passthrough-headers.mdx
logo/                     # Longbridge brand logo (light/dark) + bars-mark favicon
```

## Internationalization

Three languages via `navigation.languages` in `docs.json`: `en` (default), `cn`, `zh-Hant` — matching the legacy site's `accept-language` values (`en` / `zh-CN` / `zh-HK`). Every guide page exists in all three directories with identical structure; keep them in sync when editing. The API Reference uses one spec per language (`openapi.en.json` / `openapi.cn.json` / `openapi.zh-hant.json`) so each language shows single-language content; keep the three specs in sync when endpoints change.

## Updating the API Reference

**Source of truth** lives in the sibling repo `../whale-openapi-docs`. This site is generated from it — do not hand-edit the generated files.

Two kinds of API pages:

1. **REST endpoints** — defined in the per-language specs `openapi.{en,cn,zh-hant}.json`; each operation is referenced in `docs.json` as a `"METHOD /path"` page entry inside the language's group (`openapi: {source, directory}`).
2. **data_porter templates** — `data_porter` is a multi-purpose query interface: one physical endpoint, many `template_id`s with different filters/response shapes. Each template gets its own MDX page at `{lang}/api-reference/data-porter/<slug>.mdx` (frontmatter `api: "GET .../data_porter/<template_id>/info"`), one per language.

Navigation is grouped **by business domain** (Cash Management / Risk Control / …), not by transport: REST operations (`"METHOD /path"` entries) and data_porter template pages (MDX paths) are mixed in the same domain group.

### Regenerate from whale-openapi-docs

```bash
python3 scripts/convert.py --dry-run   # inspect counts
python3 scripts/convert.py             # rewrite openapi.*.json + MDX + docs.json
mint dev                               # preview
```

The script is idempotent. Old generated MDX under `{lang}/api-reference/data-porter/` that no longer maps to a template is deleted. See `.claude/skills/whale-api-import/SKILL.md` for the design notes, mapping rules, and troubleshooting recipes.

Spec conventions:

- All operations must carry exactly one tag.
- `servers`: `https://b-api.lbkrs.com` (production) and `https://b-api.longbridge.xyz` (test).
- Security schemes: `X-Api-Key`, `Authorization`, `X-Timestamp`, `X-Api-Signature` headers.

## TODO

- [ ] Error codes page (not present in the legacy site export)
- [ ] Changelog page
- [ ] Future: FAQ / Q&A section (planned expansion)
