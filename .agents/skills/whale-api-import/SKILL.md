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
method: GET
path: /v1/datasets/broker_teams
operationId: broker_teams
```

Use `method + path` as the stable identity and `operationId` as a drift check.
Do not approve an API using only a filename, summary, or operationId.

Broker API specifications live under `broker-api/` as localized `.yml` files:

- `whaleapi.<locale>.yml` contains the operations migrated from the original
  monolithic public specification;
- `account-assets.<locale>.yml` contains Asset Account operations;
- `misc.<locale>.yml` contains shared and miscellaneous operations.

Add future domains as separate, stable YAML files instead of rebuilding a
monolithic specification. If the operation already exists in any published
Broker API YAML file, treat it as already published and leave all localized
copies unchanged. Report source drift instead of overwriting the committed
copy.

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
2. Create localized copies in the matching `broker-api/<domain>.<locale>.yml`
   files. Follow `COPYWRITING.md`; do not fall back from Hong Kong Traditional
   Chinese to Simplified Chinese.
   Keep a half-width space before reader-facing API version markers, for
   example `获取账户列表 V2`, `獲取賬戶列表 V2`, and
   `Query Account List V2`.
   Preserve official capitalization and Chinese spacing for product names and
   initialisms. Use the exact public forms `HashKey`, `IPO`, `PI`, `CRS`,
   `CCASS`, `ATM`, and `Ref`. Apply the same terminology to `summary`,
   `x-mint.metadata.sidebarTitle`, and operation descriptions without changing
   paths, operation IDs, schema keys, or `$ref`.
3. Remove internal source extensions that are not part of the public contract.
   Preserve public permission and source metadata already used by the site.
   Remove internal frontend component names such as `QueryTable`, `DataTable`,
   page components, and service wrappers from public summaries and
   descriptions. Describe the business capability instead.
4. Add only the new operations and required components. Do not rewrite the
   surrounding document or existing operations.
5. Add only the new base operations to the matching locale navigation in
   `docs.json`. Preserve all existing labels, ordering, icons, flatten settings,
   and manual groups.
6. Review the diff operation by operation. A valid import diff must not contain
   unrelated changes to already published APIs.

Do not use a bulk regeneration or synchronization script for this workflow.

## Navigation structure and grouping

Build the navigation to mirror the source menu hierarchy, not a flat list.
Each source operation carries `x-menu-path` (e.g.
`[业务参数设置 (Service Parameter), 计费管理 (Billing Management), 客户端展示 (Client-side Display)]`).
Nest `docs.json` groups to match: place a new domain's operations under the
existing top-level menu group they belong to, subdivided by the deeper
`x-menu-path` levels — do not dump a whole domain flat under one new
top-level group. If a top-level menu group already exists (for example a
`Service Parameter` group carrying whaleapi operations), nest the new domain's
subgroups under it and keep any pages already there, rather than creating a
second group with the same display name.

How navigation resolves operations (do not misuse the `openapi` field):

- Operation entries are strings of the form `METHOD /path`. `allOperations()`
  merges every published spec and resolves each entry **globally by
  `method + path`** — the entry is looked up across all documents regardless of
  which group it sits in.
- A group's `openapi: { source, directory }` field does **not** scope which spec
  an operation comes from. It only sets the default-collapsed state of that
  group's operation subgroups (`Boolean(group.openapi)` in
  `whale-navigation.ts`).
- Therefore **nested subgroups do not need — and should not carry — their own
  `openapi` source**. Set `openapi` only on the top-level group (matching the
  primary spec for that menu), and leave nested subgroups with just `group` and
  `pages`. Operations from a different spec file still resolve correctly when
  listed inside such a subgroup.

The sidebar label and method badge for an operation entry come from the
operation's real `summary` and real HTTP method, keyed as
`${locale}:${METHOD} ${path}` in `operationTitles`. If the `docs.json` entry's
method does not match the operation's actual method, the lookup misses: the
badge shows the wrong method and the label falls back to the raw path slug
(e.g. `booking packages`). Always write the entry with the operation's real
primary method — see the Dataset rule below.

## Watch for stale source names

Source `.ts` template `name` fields and source `.json` summaries are copied
verbatim into `summary`. Some carry legacy or wrong labels — e.g. a template
literally named `用户费率 (作废)` ("... (Deprecated)") that no longer matches
what the API does. Do not publish such names blindly. When a resolved summary
contains a deprecation marker (`作废` / `作廢` / `Deprecated`) or a name that
contradicts its menu group, flag it to the user as a **Review** item and, once
they confirm a replacement, correct it in the localized `.yml` (source `.ts`
is read-only). A `作废`/`Void` marker that names a genuine void operation
(e.g. `合单规则作废`, `PUT /billing/market_rule_void`) is correct — keep it.

## Pair Dataset exports

Treat `GET /v1/datasets/<name>` and
`POST /v1/datasets/<name>/download` as one feature when both are explicitly
approved and uniquely defined in source YAML.

Dataset query operations are read-only and use `GET` as the documented primary
method. Mark them with `x-post-fallback: true`: if the encoded filters and other
query parameters are too large for a practical URL query string, callers may
send the same parameters as a JSON body with `POST` to the same path. Neither
method changes business data. Keep export `/download` operations as `POST`.

- Keep both operations in the OpenAPI contract.
- Mark the base operation with `x-dataset-download`.
- Mark the download operation with `x-dataset-parent`.
- Add only the base Dataset operation to `docs.json`; do not create a separate
  Sidebar entry or standalone page for the paired download.
- Write the base Dataset navigation entry as `GET /v1/datasets/<name>`, matching
  its documented primary method — never `POST`. The paired download is `POST`,
  but it is filtered out of navigation, so a `POST /v1/datasets/<name>` entry
  would resolve to nothing: the sidebar would show a `POST` badge and fall back
  to the raw slug while the link still opens the `GET` page. This mismatch is a
  common regression; grep `docs.json` for `POST /v1/datasets/` before committing
  and confirm every dataset query entry is `GET`.
- Show one reusable, collapsible Export section directly below the base API
  path. Do not create a standalone page for the paired download.
- Give the paired download the same `filters` schema as the base query. Besides
  `filters`, retain only these export-specific properties when present in the
  approved YAML: `mode`, `ext`, `file_name`, `down_fields`,
  `ticket_content`, `ticket_preview_url`, and `hide`.
- In the collapsed Export section, do not repeat `filters` or the response
  schema. Show only the endpoint and export-specific properties.
- Link the Export section to the shared export record and asynchronous download
  documentation under Misc.
- Remove `orderBy` from newly imported Dataset and download schemas. It is not
  supported.
- Never synthesize a `/download` operation that is absent from approved YAML.

The shared export operations are:

- `GET /v1/datasets/download_records`: query export records. `template_id` is
  a `filters` property used to limit records to a Dataset template.
- `GET /v1/datasets/download/{id}`: query an asynchronous export task and obtain
  its download URL.

Publish these operations under **Misc → Dataset Export** only after explicit
approval. Dataset Export sections may then link to these common pages.

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
- every operation present on the merge-base branch is still present with the
  same method, path, and operationId;
- paired downloads are absent from Sidebar navigation;
- every dataset query navigation entry is `GET /v1/datasets/<name>`, not `POST`;
- new operations are nested under the correct menu group per `x-menu-path`, and
  nested subgroups carry no redundant `openapi` field;
- no published summary carries an unreviewed deprecation marker or a name that
  contradicts its menu group;
- newly imported request schemas contain no `orderBy`;
- all three locales contain equivalent API contracts and navigation.

## Editing published APIs

Corrections to an already published API are separate documentation edits. Make
them only when the user explicitly requests that specific correction, and keep
the change narrowly scoped. Never use `whale-api-import` as authority to refresh
an existing public operation from the candidate source repository.
