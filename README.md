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
docs.json                 # site config + navigation
openapi.json              # Whale API OpenAPI 3.0 spec (drives API Reference tab)
introduction.mdx          # landing page
quickstart.mdx            # first request walkthrough
essentials/
  authentication.mdx      # HMAC-SHA256 signing guide
  passthrough-headers.mdx # gateway passthrough headers
logo/                     # placeholder logo/favicon (replace with brand assets)
```

## Updating the API Reference

The API Reference tab is generated from `openapi.json` (grouped by tags). To update endpoints, replace/edit `openapi.json` and the pages regenerate automatically.

Spec conventions:

- All operations must carry exactly one tag (untagged operations were re-tagged on import; keep it that way).
- `servers` is set to `https://openapi.longbridge.com`.
- Security schemes: `X-Api-Key`, `Authorization`, `X-Timestamp`, `X-Api-Signature` headers.

## TODO

- [ ] Replace placeholder logo/favicon with official Whale brand assets
- [ ] Error codes page (not present in the legacy site export)
- [ ] Changelog page
- [ ] Future: FAQ / Q&A section (planned expansion)
