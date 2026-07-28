---
name: whale-api-import
description: |
  Publish an explicitly approved allowlist of Broker APIs from the sibling
  whale-openapi-docs repository into this documentation site. Use when the user
  provides APIs that are confirmed safe to publish, asks to approve or publish
  Broker APIs, or asks to regenerate the approved API reference.
---

# Publish approved Whale Broker APIs

`../whale-openapi-docs` contains candidate API definitions, including APIs that
are not approved for public documentation. Never publish every source API.
`api-publication.yaml` is the approval boundary and must be treated as an
allowlist.

## Approval identity

Each approved API must include all three fields:

```yaml
- method: POST
  path: /v1/datasets/broker_teams
  operationId: broker_teams
```

`method + path` is the stable identity. `operationId` is an additional drift
check. Do not approve an API using only a filename, summary, or operationId.

When the user gives operationIds or informal API names:

1. Search the source YAML files.
2. Resolve every item to an exact `METHOD /path` and `operationId`.
3. If an item has no match or multiple matches, report the candidates and stop.
4. Show the resolved list before treating it as approved if resolving it
   required non-trivial interpretation.
5. Add only the APIs the user confirmed to `api-publication.yaml`.

Do not infer approval from `x-verified`, the current generated OpenAPI files, or
the fact that an API exists in the source repository.

## Publish workflow

Use the TypeScript command:

```bash
bun run api:publish:dry-run
bun run api:publish
bun run check
```

The source defaults to `../whale-openapi-docs`. Override it when necessary:

```bash
bun run api:publish -- --source /absolute/path/to/whale-openapi-docs
```

The command:

- scans the source OpenAPI YAML files;
- rejects missing, duplicated, or changed approved operations;
- extracts only approved operations and the components they reference;
- generates `openapi.en.json`, `openapi.zh-CN.json`, and
  `openapi.zh-HK.json`;
- replaces generated BrokerAPI navigation while preserving manual groups;
- writes final outputs only after all inputs have been validated.

An empty allowlist is rejected so an accidental run cannot erase the existing
API reference.

## Verification

Run the targeted tests after changing the publisher:

```bash
bun test scripts/approved-api-publisher.test.ts
```

Run `bun run check` after changing the approval list or generated outputs. Do
not run the full build unless the user requests it or a production build is
essential.

## Source-of-truth rules

- Fix API contract or translation problems in `whale-openapi-docs`.
- Do not hand-edit generated OpenAPI operations or generated BrokerAPI
  navigation.
- Keep `api-publication.yaml` in this repository so approval changes are
  reviewable in Git.
- A newly discovered source API is excluded until explicitly approved.
- If an approved API disappears or its identity changes, stop instead of
  silently removing or replacing it.
