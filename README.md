# whale-apidocs

Whale API documentation for SaaS tenants, built with [Mintlify](https://mintlify.com).

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
openapi.json              # Whale API OpenAPI 3.0 spec (drives API Reference tab, shared by all languages)
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

Three languages via `navigation.languages` in `docs.json`: `en` (default), `cn`, `zh-Hant` — matching the legacy site's `accept-language` values (`en` / `zh-CN` / `zh-HK`). Every guide page exists in all three directories with identical structure; keep them in sync when editing. The API Reference is generated from the shared `openapi.json` (spec descriptions are bilingual by origin).

## Updating the API Reference

The API Reference tab is generated from `openapi.json` (grouped by tags). To update endpoints, replace/edit `openapi.json` and the pages regenerate automatically.

Spec conventions:

- All operations must carry exactly one tag (untagged operations were re-tagged on import; keep it that way).
- `servers` is set to `https://openapi.longbridge.com`.
- Security schemes: `X-Api-Key`, `Authorization`, `X-Timestamp`, `X-Api-Signature` headers.

## TODO

- [ ] Error codes page (not present in the legacy site export)
- [ ] Changelog page
- [ ] Future: FAQ / Q&A section (planned expansion)
