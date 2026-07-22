# Whale Docs

The unified documentation portal for the Longport Whale solution, built with [Mintlify](https://mintlify.com).

The target information architecture covers general product and implementation docs, WhaleSDK for iOS/Android/WebTrade, Broker API, Trading API, and OpenAPI. The current published content is the existing Broker API (`b-api`) corpus; the repository migration will be phased.

## Internal design documents

Whole-solution designs, information architecture, planning documents, and architectural decision records belong under `docs/internal/`. This directory is intentionally listed in `.gitignore`: its contents are local working material and must not be added to the public Mintlify navigation or committed to Git.

Legacy site: https://apidocs.longportwhale.com/whaleapi/

## Local development

```bash
npm i -g mint
mint dev
```

Open http://localhost:3000.

Enable the pre-commit hook once per clone so every commit regenerates the
site from `../whale-openapi-docs` and stages the diff:

```bash
git config core.hooksPath .githooks
```

Bypass ad-hoc with `git commit --no-verify` (e.g. doc-only edits or when the
sibling repo isn't checked out).

## Structure

Product entries per language, in fixed order: **Docs → WhaleSDK → Broker API → Trading API → OpenAPI** (external link to open.longportapp.com during migration).

```
docs.json                 # site config + per-language navigation (six product tabs)
openapi.{en,cn,zh-hant}.json  # per-language Broker API OpenAPI 3.0 specs
style.css                 # sidebar width, tabs row, try-it button styling
en/                       # English pages (default language; cn/ + zh-Hant/ mirror it)
  introduction.mdx        # Docs overview / portal landing
  docs/
    integration-options.mdx   # choose WhaleSDK vs Broker/Trading/OpenAPI
  whalesdk/overview.mdx       # skeleton (iOS/Android/WebTrade, under construction)
  broker-api/
    overview.mdx          # caller / authorization subject / data scope / envs
    get-started/          # quickstart, authentication, passthrough-headers
    operations.mdx        # error model / rate limits / deprecation — TBD markers
  trading-api/introduction.mdx  # availability page (planned Q4 2026)
  api-reference/data-porter/    # generated dataset pages (Broker API reference)
logo/                     # brand logo (light/dark) + favicon
```

## Internationalization

Three languages via `navigation.languages` in `docs.json`: `en` (default), `cn`, `zh-Hant` — matching the legacy site's `accept-language` values (`en` / `zh-CN` / `zh-HK`). Every guide page exists in all three directories with identical structure; keep them in sync when editing. The API Reference uses one spec per language (`openapi.en.json` / `openapi.cn.json` / `openapi.zh-hant.json`) so each language shows single-language content; keep the three specs in sync when endpoints change.

## Updating the API Reference

**Source of truth** lives in the sibling repo `../whale-openapi-docs`. This site is generated from it — do not hand-edit the generated files.

Two kinds of API pages:

1. **REST endpoints** — defined in the per-language specs `openapi.{en,cn,zh-hant}.json`; each operation is referenced in `docs.json` as a `"METHOD /path"` page entry inside the language's group (`openapi: {source, directory}`).
2. **datasets** — each dataset is served at `POST /v1/datasets/<name>` (dataset name from `templates/template_map.json` in the source repo). Every dataset gets an OpenAPI operation plus its own MDX page at `{lang}/api-reference/data-porter/<slug>.mdx` (frontmatter `openapi: post /v1/datasets/<name>`), one per language.

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
- `servers`: `https://b-api.longbridge.xyz` (test, playground default) and `https://b-api.lbkrs.com` (production).
- Security scheme: `Authorization` header carrying the broker-scoped `ACCESS_TOKEN`.
- The generator only owns the reference groups inside the Broker API tab; the Overview / Get Started / Operations groups are hand-maintained (see `BROKER_API_MANUAL_GROUPS` in `scripts/convert.py`).

## TODO

- [ ] Error codes page (not present in the legacy site export)
- [ ] Changelog page
- [ ] Future: FAQ / Q&A section (planned expansion)
