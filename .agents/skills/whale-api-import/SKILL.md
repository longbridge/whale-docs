---
name: whale-api-import
description: |
  Incrementally import explicitly approved Broker APIs from the sibling
  whale-openapi-docs repository into this documentation site. Use when the user
  provides APIs confirmed safe to publish, asks which APIs belong with a
  template or DataTable screen, or asks to add approved APIs without changing
  previously published documentation.
---

# Import approved Whale Broker APIs

`../whale-openapi-docs` contains candidate API definitions, including APIs that
are not approved for public documentation. Import only APIs the user explicitly
confirms.

This is an incremental, review-gated workflow. Once an API is merged into this
repository, the committed OpenAPI and navigation content is the public source
of truth. A later import must not regenerate, replace, re-localize, reorder, or
delete previously published operations.

## Resolve approval identity

Resolve every approved API to:

```yaml
method: POST
path: /v1/datasets/broker_teams
operationId: broker_teams
```

Use `method + path` as the stable identity and `operationId` as a drift check.
Do not approve an API using only a filename, summary, or operationId.

If the operation already exists in `openapi.en.json`, `openapi.zh-CN.json`, or
`openapi.zh-HK.json`, treat it as already published and leave all three copies
unchanged. Report source drift instead of overwriting the committed copy.

## Discover related APIs from a template

Use `../fe-wealth-admin` only to understand which operations belong to the same
UI workflow. It is never an API definition source.

1. Search for the exact template string.
2. Trace it through `QueryTable`, `Table`, `DataTable`, `Detail`, or wrappers to
   the owning page and route.
3. Inspect directly owned expanded rows, drawers, modals, forms, row actions,
   toolbar actions, detail pages, services, and hooks.
4. Record related query templates, exports, and primary business actions.
5. Exclude authentication, permissions, telemetry, feature flags, localization,
   and incidental global helpers.
6. Resolve every candidate independently to exactly one YAML operation in
   `../whale-openapi-docs`.
7. Exclude anything missing or ambiguous in YAML. Never reconstruct an API from
   frontend code.

Classify candidates:

- **Include**: directly required by the approved screen workflow and uniquely
  defined in source YAML.
- **Review**: optional or conditionally reached APIs whose publication scope is
  unclear.
- **Exclude**: incidental infrastructure, unrelated navigation, missing YAML,
  or ambiguous matches.

Use this evidence chain:

```text
template → DataTable/page → action or child component
         → frontend service call → whale-openapi-docs YAML
         → METHOD /path + operationId
```

## Import new operations

For operations that do not yet exist in the public specs:

1. Read the complete source YAML operation and every referenced component.
2. Create localized copies in `openapi.en.json`, `openapi.zh-CN.json`, and
   `openapi.zh-HK.json`. Follow `COPYWRITING.md`; do not fall back from Hong
   Kong Traditional Chinese to Simplified Chinese.
3. Remove internal source extensions that are not part of the public contract.
   Preserve public permission and source metadata already used by the site.
4. Add only the new operations and required components. Do not rewrite the
   surrounding document or existing operations.
5. Add only the new base operations to the matching locale navigation in
   `docs.json`. Preserve all existing labels, ordering, icons, flatten settings,
   and manual groups.
6. Review the diff operation by operation. A valid import diff must not contain
   unrelated changes to already published APIs.

Do not use a bulk regeneration or synchronization script for this workflow.

## Pair Dataset exports

Treat `POST /v1/datasets/<name>` and
`POST /v1/datasets/<name>/download` as one feature when both are explicitly
approved and uniquely defined in source YAML.

- Keep both operations in the OpenAPI contract.
- Mark the base operation with `x-dataset-download`.
- Mark the download operation with `x-dataset-parent`.
- Add only the base Dataset operation to `docs.json`; do not create a separate
  Sidebar entry or standalone page for the paired download.
- Show the download endpoint, request, and response in the base page's Export
  section.
- Give the paired download the same `filters` schema as the base query and
  remove every other request property.
- Remove `orderBy` from newly imported Dataset and download schemas. It is not
  supported.
- Never synthesize a `/download` operation that is absent from approved YAML.

These rules apply while importing new operations. Do not reopen previously
published operations during a later import merely to normalize them.

## Verify

Run:

```bash
bun run check
```

Do not run the full build unless the user requests it or a production build is
essential. Before committing, confirm:

- every added operation was explicitly approved;
- every added contract came from a unique source YAML;
- no existing operation changed;
- paired downloads are absent from Sidebar navigation;
- newly imported request schemas contain no `orderBy`;
- all three locales contain equivalent API contracts and navigation.

## Editing published APIs

Corrections to an already published API are separate documentation edits. Make
them only when the user explicitly requests that specific correction, and keep
the change narrowly scoped. Never use `whale-api-import` as authority to refresh
an existing public operation from the candidate source repository.
