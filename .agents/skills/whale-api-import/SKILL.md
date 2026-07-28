---
name: whale-api-import
description: |
  Publish an explicitly approved allowlist of Broker APIs from the sibling
  whale-openapi-docs repository into this documentation site. Use when the user
  provides APIs that are confirmed safe to publish, asks to approve or publish
  Broker APIs, asks which APIs belong with a template or DataTable screen, or
  asks to regenerate or organize the approved API reference, including Dataset
  export operations.
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

## Discover related APIs from a template

When the user supplies a template, do not limit the analysis to the matching
dataset operation. Use `../fe-wealth-admin` to understand the complete UI
surface that starts from that template.

`fe-wealth-admin` is evidence of relationship only. It is never an API
definition source. Never copy a path, method, schema, description, or
operationId from it into the public specification.

Follow this investigation sequence:

1. Search `../fe-wealth-admin` for the exact template string. Ignore unrelated
   template systems such as audit-log or message-rendering templates.
2. Find where the template is passed into the table stack. The component may be
   named `QueryTable`, `Table`, `DataTable`, `Detail`, or a local wrapper.
   Follow imports, aliases, variables, and wrapper props instead of relying on
   a single component name.
3. Identify the owning page and route. Treat that page, its table, expanded
   rows, drawers, modals, forms, row actions, toolbar actions, and directly
   reached detail/edit pages as the UI investigation boundary.
4. Trace the page's imports into services and hooks. Record:
   - the starting query template;
   - other table/query templates on the same UI surface;
   - export or download templates;
   - REST calls used by primary actions such as create, update, delete,
     confirm, revoke, or detail;
   - calls made by directly owned child components.
5. Exclude shared infrastructure such as authentication, permissions, feature
   flags, telemetry, localization, generic upload helpers, and global lookup
   calls unless the screen's documented business workflow cannot function
   without that specific API.
6. For every candidate, independently search `../whale-openapi-docs` and
   resolve it to exactly one YAML-defined operation. Match using the strongest
   available evidence: exact template/operationId, then exact method and path,
   then service-function evidence. Inspect the YAML itself before accepting the
   match.
7. Exclude and report any candidate that has no unique operation in
   `whale-openapi-docs`. A frontend call is never sufficient authority to
   create, reconstruct, or guess an API definition.

Classify the result before changing the allowlist:

- **Include**: the starting operation and uniquely defined APIs directly needed
  for the same screen's primary business workflow.
- **Review**: uniquely defined APIs reached only through optional actions,
  conditional variants, or a separate detail/edit route whose publication
  scope is unclear.
- **Exclude**: infrastructure, incidental shared calls, unrelated navigation
  targets, and anything not uniquely defined in `whale-openapi-docs`.

For each Include or Review item, retain a short evidence chain:

```text
template → DataTable/page → action or child component
         → frontend service call → whale-openapi-docs YAML
         → METHOD /path + operationId
```

Apply the user's confirmed publication scope to the starting template. Add
derived **Include** items only when the relationship is direct and the
`whale-openapi-docs` match is unique. Present **Review** items for confirmation;
do not silently approve them.

## Pair Dataset exports

Treat `POST /v1/datasets/<name>` and
`POST /v1/datasets/<name>/download` as one public feature when both operations
are approved and uniquely defined in `whale-openapi-docs`.

- Keep both operations in the generated OpenAPI contract.
- Mark the base operation with `x-dataset-download` and the download operation
  with `x-dataset-parent`.
- Add only the base Dataset operation to `docs.json` navigation. Never create a
  separate Sidebar entry or page for a paired `/download` operation.
- Render the download endpoint, request, and response inside the base Dataset
  page's Export section.
- Publish only `filters` in a paired download request body. The filters must
  use the same schema as the base Dataset query.
- Remove `orderBy` from every published request schema. Dataset sorting through
  `orderBy` is not supported, including on `/download`.
- Do not synthesize a download operation. Pair it only when the exact
  `/download` path exists in approved source YAML.

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
- pairs approved Dataset downloads with their base operations;
- removes unsupported `orderBy` fields and limits download bodies to `filters`;
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
