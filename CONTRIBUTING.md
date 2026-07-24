# Contributing to Whale Docs {/* contributing-to-whale-docs */}

This guide covers local development and repository maintenance. Read
`AGENTS.md` for repository-specific agent rules and `COPYWRITING.md` for
documentation standards.

## Local development {/* local-development */}

Install dependencies and start the development server:

```bash
bun install
bun run dev
```

The local site is available at <http://localhost:4321>.

## Repository structure {/* repository-structure */}

```text
astro.config.mjs                       Astro entry point
docs.json                              Product and sidebar navigation
docs/en/                               English documentation
docs/zh-CN/                            Simplified Chinese documentation
docs/zh-HK/                            Traditional Chinese documentation
openapi.{en,zh-CN,zh-HK}.json         BrokerAPI specifications
openapi.trading.{en,zh-CN,zh-HK}.json TradingAPI specifications
scripts/                               Durable maintenance and validation tools
src/nimbus/                            Application shell and Whale adapters
```

Keep internal drafts and decision records in the ignored `docs/internal/`
directory. Do not add them to public navigation or Git history.

## Documentation changes {/* documentation-changes */}

Before editing public content:

1. Read `COPYWRITING.md`.
2. Verify product and API facts against primary sources.
3. Find equivalent pages in all three locales.
4. Preserve stable filenames, URL segments, and explicit heading anchors.
5. Update navigation and internal links for every affected locale.

Do not edit generated API reference copy only in this repository when an
authoritative upstream source exists. Fix the source and regenerate all locale
specifications so the change is reproducible.

## BrokerAPI updates {/* broker-api-updates */}

The authoritative BrokerAPI source is maintained in the sibling
`../whale-openapi-docs` repository. This repository does not currently contain
a supported BrokerAPI importer. The former `scripts/convert.py` workflow is no
longer available and must not be referenced or run.

Make BrokerAPI copy and schema corrections in the upstream source. When an
importer is restored, regenerate the three locale specifications and their
navigation as one reviewed change. Until then, coordinate generated-file
updates with the project owner and verify all locale specifications and
`docs.json` together. Do not treat a direct patch to one generated file as a
permanent fix.

## TradingAPI updates {/* trading-api-updates */}

The authoritative TradingAPI source is maintained in the sibling
`../LBFrontendAPIGenerator` repository. The capture workflow can retrieve
current read-only response examples through the MR capture proxy.

Store its credential only in the ignored `.env` file:

```bash
x-bridge-token=<MR_BRIDGE_TOKEN>
```

Run the refresh workflow in this order:

```bash
bun run capture:trading-api:dry-run
bun run capture:trading-api
bun run check:trading-api-captures
bun run check
```

The capture script sanitizes examples and must never write `x-bridge-token` to
generated specifications. Use `COPYWRITING.md` when localizing new response
text, and keep machine-readable values aligned across locales.

Do not add `POST`, `PUT`, `PATCH`, or `DELETE` operations to automatic capture.
Capturing a state-changing operation requires explicit approval for the target
test account and a separate reviewed workflow.

## Verification {/* verification */}

Run the smallest relevant check while developing. For most documentation
changes, run:

```bash
bun run check
```

For TradingAPI capture changes, also run:

```bash
bun run check:trading-api-captures
```

Do not run the full build by default. Run it only when a production build is
essential or explicitly requested:

```bash
bun run build
bun run preview
```

Before committing, review the diff for unrelated files, generated secrets,
local-only paths, and accidental changes to stable URLs or heading anchors.
