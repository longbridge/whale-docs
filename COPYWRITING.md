# Whale Docs Copywriting Guide {/* whale-docs-copywriting-guide */}

This file is the shared standard for AI agents and human contributors who write, rewrite, translate, or review Whale Docs. It is based on this repository's existing documentation, OpenAPI structure, and component capabilities, and incorporates relevant content and formatting practices from Cloudflare Docs. Repository rules and verified product behavior always take precedence over external references.

The Cloudflare reference is pinned to commit `7aab48be1a0accec2f792739d3e7a9f2ccf596bc` of the official `cloudflare/cloudflare-docs` repository, reviewed on 2026-07-24. Pinning the commit keeps the basis of this guide reproducible as the upstream repository changes.

This guide applies to:

- Markdown and MDX under `docs/en/`, `docs/zh-CN/`, and `docs/zh-HK/`.
- Reader-facing copy in BrokerAPI and TradingAPI OpenAPI specifications.
- Tabs, groups, and navigation labels in `docs.json`.
- Public documentation created, translated, completed, reorganized, or reviewed by AI.

## 1. Goals and priorities {/* goals-and-priorities */}

Documentation should first help readers complete a task, understand a boundary, or resolve a problem. Do not write primarily to promote the product, enumerate features, or restate code.

Resolve conflicts in this order:

1. Verified product behavior, API contracts, security requirements, and project conventions.
2. This repository's `AGENTS.md`, build constraints, component APIs, and navigation structure.
3. This Whale Docs guide.
4. General content and formatting practices from Cloudflare Docs.
5. Local patterns in existing pages.

Existing content is useful evidence, but not every legacy pattern should be preserved. Correct duplicate titles, unstable URLs, vague descriptions, unsupported numbers, and localization mismatches instead of copying them.

## 2. Factual boundaries for AI {/* factual-boundaries-for-ai */}

AI must distinguish verified facts, recommendations, and information that still requires confirmation.

### 2.1 Source-of-truth order {/* source-of-truth-order */}

Use sources in this order:

1. Current source code, public interfaces, type definitions, tests, and approved product requirements.
2. Definitions in upstream OpenAPI or SDK source repositories.
3. Generated OpenAPI files and published documentation in this repository.
4. Requirements, design records, and delivery material confirmed by the project owner.
5. Official third-party documentation, such as documentation from Apple, Android, or a cloud provider.

Do not let search snippets, blogs, forums, old screenshots, or model memory override primary sources. When sources conflict, document the verifiable current behavior and report the conflict in the delivery note.

### 2.2 Do not guess {/* do-not-guess */}

Without evidence, do not invent:

- API paths, fields, enums, defaults, required fields, error codes, or response examples.
- SDK methods, parameters, return types, minimum system versions, or dependency versions.
- SLAs, performance, latency, capacity, rate limits, pricing, release dates, or compatibility promises.
- Test or production domains, credential procedures, security processes, or ownership boundaries.
- Features not yet implemented, automatic retries, idempotency, or eventual-consistency behavior.

If unverified information must remain, label it explicitly, for example: “The project team still needs to confirm this limit.” Do not hide missing evidence behind fluent prose. Public pages should not retain a `TODO` without an owner and a confirmation path.

### 2.3 Time-sensitive information {/* time-sensitive-information */}

For versions, historical performance, compatibility matrices, and statistics, state:

- The applicable version or time range.
- The test environment or conditions.
- Whether the value is an example, historical sample, target, or commitment.
- Where readers can find the current value.

Do not present historical samples as an SLA unless a contract or formal product policy defines them as one.

### 2.4 Security and privacy {/* security-and-privacy */}

Use fictional values or clear placeholders in examples. Never expose real tokens, keys, cookies, phone numbers, email addresses, identity documents, account numbers, or customer data. Show redaction in log examples. For writes, funds, trading, permissions, identity, and production cutovers, state the prerequisites, affected scope, failure handling, and verification method.

## 3. Choose a content type first {/* choose-a-content-type-first */}

Each page should have one primary purpose. Do not combine conceptual explanation, an end-to-end tutorial, a field dictionary, and troubleshooting without clear boundaries.

| Content type | Reader question | Preferred title | Required content |
| --- | --- | --- | --- |
| Overview | What is this, who is it for, and where do I go next? | Product name or short noun | One-sentence value, scope, capabilities, entry points, next step |
| Get started / Quickstart | How do I reach the first successful result quickly? | “Quickstart” or a goal phrase | Prerequisites, shortest path, runnable example, verification, next step |
| How-to | How do I complete a specific task? | Verb phrase | Prerequisites, ordered steps, result per step, final verification |
| Concept | Why is this designed this way, and how do the objects relate? | Short noun phrase | Context, objects or mechanism, boundaries, relationships, task links |
| Reference | What are the exact rules for this setting, field, or behavior? | Noun phrase | Scope, structured definitions, constraints, examples, related content |
| API reference | How do I call this operation? | Short action | Purpose, authentication, input, output, errors, examples, limits |
| Troubleshooting / FAQ | How do I diagnose and resolve this symptom? | Symptom or user question | Symptom, causes, diagnosis, resolution, verification, escalation |
| Implementation guide | How do I deliver and launch this across phases? | Goal or phase | Roles, dependencies, phases, deliverables, completion criteria, rollback or support |

Organize Whale Docs around the reader journey: understand, choose, integrate, verify, launch, and operate. Do not organize public documentation around internal teams or code modules.

### 3.1 Page scope {/* page-scope */}

Consider splitting a page when:

- It serves clearly different reader roles.
- A self-contained task needs a direct navigation entry.
- Large reference tables or code blocks interrupt the main task.
- Platform-specific flows are long and share little content.
- One title cannot accurately describe the whole page.

After splitting, add context and reciprocal links. Do not force readers to infer the path with the browser Back button.

## 4. Voice, terms, and sentences {/* voice-terms-and-sentences */}

### 4.1 Base voice {/* base-voice */}

Use a professional, direct, calm, and trustworthy voice:

- State the reader's goal before the action.
- Prefer active voice and present tense.
- Express one main idea per sentence.
- Explain why before introducing complex procedures.
- Put the primary answer in the body, not only in cards, accordions, or callouts.
- State limits and risks without marketing exaggeration or unsupported guarantees.

Avoid empty or dismissive terms such as “very simple,” “obviously,” “just,” “easy,” “powerful,” “revolutionary,” and “seamless.” Do not use words such as “supported,” “automatic,” “real-time,” or “secure” as undefined promises.

### 4.2 Audience and participants {/* audience-and-participants */}

Address the reader as “you” in instructions. Use established domain terms for responsibilities:

- `Broker`: the brokerage institution integrating with Whale.
- `Broker App`: the Broker's Customer-facing application.
- `Broker Server`: a server controlled by the Broker.
- `Customer`: the Broker's end customer.
- `Whale`: the Longport Whale product or system.

Do not interchange user, customer, member, and account within the same context. `open_id`, `member_id`, `application_id`, and `account_no` identify different objects and must remain distinct.

### 4.3 Language and localization {/* language-and-localization */}

- Use plain technical English. Avoid slang, cultural jokes, compressed colloquialisms, and contractions.
- Use terminology natural to Mainland China in Simplified Chinese.
- Use natural Hong Kong Traditional Chinese, not mechanical character conversion.
- Do not translate product names, class names, method names, field names, HTTP methods, or protocol names.
- Expand or immediately explain unfamiliar abbreviations on first use.
- Keep facts, limits, step order, and security warnings equivalent across all locales without requiring literal translation.

Maintain shared terminology in the locale's glossary. Decide translations for terms that affect multiple pages before expanding their use.

### 4.4 User-interface actions {/* user-interface-actions */}

- Bold buttons, menu items, tabs, and interactive UI labels: “Select **Settings** > **API tokens**.”
- Match the UI label and capitalization exactly.
- Prefer `select` in English unless the action specifically requires a mouse click.
- Avoid layout-dependent directions such as “above,” “below,” or “on the right.” Name the region or control.
- Say whether to turn a setting on or off; do not say only “toggle.”
- Format tools, commands, file paths, and configuration keys as inline code.

### 4.5 Chinese copy basics {/* chinese-copy-basics */}

Chinese documentation and UI copy should be formal, restrained, and concise. Check typos, omissions, duplicated words, terminology, and punctuation before publishing.

- Do not use homophonic misspellings or short-lived internet slang.
- Remove words and sentences that do not affect meaning, without sacrificing accuracy.
- Avoid humor, puns, and cultural references in technical documentation.
- Do not overuse large text, color, backgrounds, italics, or underlining. Prefer headings, paragraphs, lists, tables, and limited bold text.
- Use “的”, “地”, and “得” correctly.
- Never omit conditions, risks, units, or outcomes merely to shorten copy.

### 4.6 Chinese, English, and number spacing {/* chinese-english-number-spacing */}

Normally insert one half-width space between Chinese text and English words or numbers:

```diff
+ 系统支持 iOS 和 Android 平台。
- 系统支持iOS和Android平台。
+ 请求将在 2 秒后超时。
- 请求将在2秒后超时。
```

Do not add a space:

- Around Chinese punctuation.
- Between a number and `%` or `°C`.
- Between a number and a multiplier written without spacing, such as `2x`.
- Where code formatting, a link boundary, or official product spelling already defines the boundary.

Insert a space between a number and a normal unit or currency code:

```diff
+ 文件大小上限为 500 MB。
- 文件大小上限为 500MB。
+ 示例金额为 1,000 USD。
- 示例金额为 1,000USD。
+ 成功率为 99.9%。
- 成功率为 99.9 %。
```

Chinese prose may use Chinese numerals when precision and scanning do not suffer. Use Arabic numerals for interface values, versions, dates, times, amounts, percentages, measurements, step numbers, and statistics.

### 4.7 Proper nouns and capitalization {/* proper-nouns-and-capitalization */}

Follow official spelling for brands, platforms, protocols, and products, including `Android`, `iOS`, `iPhone`, `Google`, `Apple`, `GitHub`, `OpenAPI`, `HTTP`, `IPO`, and `ETF`. Verify uncertain spelling against the owner's official source. Preserve source capitalization for code identifiers.

### 4.8 Chinese punctuation {/* chinese-punctuation */}

Use full-width Chinese punctuation in Chinese sentences and Chinese-dominant mixed-language sentences. Use half-width punctuation in complete English sentences.

```diff
+ 请求失败时，请检查状态码：`401` 表示凭证无效。
- 请求失败时,请检查状态码: `401` 表示凭证无效.
```

Do not add spaces around Chinese punctuation. Avoid exclamation marks and never repeat them. Avoid redundant punctuation before parentheses:

```diff
+ 请求可能需要 1-2 分钟（具体时间取决于数据量）。
- 请求可能需要 1-2 分钟，（具体时间取决于数据量）。
```

### 4.9 Brackets and title marks {/* brackets-and-title-marks */}

Do not insert spaces immediately inside parentheses:

```diff
+ 任务完成后（通常需要 1-2 分钟）刷新页面。
- 任务完成后（ 通常需要 1-2 分钟 ）刷新页面。
```

Choose punctuation by content:

- Use full-width `（）` for an all-Chinese aside.
- Use half-width `()` when the contents are primarily English, numbers, code, or a security symbol. Insert a space before the opening parenthesis in Chinese prose.
- Do not use the visually heavy `【】` for ordinary labels. Prefer `「」` for natural-language labels and `[]` for machine syntax.
- Markdown links, arrays, optional parameters, and code syntax follow their own grammar.

## 5. Files, URLs, and navigation {/* files-urls-and-navigation */}

### 5.1 Stable slugs {/* stable-slugs */}

Keep filenames and URL segments short, simple, durable, and based on a long-lived subject:

- Prefer `faq` to `technical-faq`.
- Prefer `ios`, `android`, and `web` to slugs ending in `-integration`.
- Avoid `technical`, `integration`, `implementation`, `guide`, `setup`, and version numbers unless they distinguish separate long-lived concepts.
- Use lowercase `kebab-case`.
- Use the same slug for equivalent pages in `en`, `zh-CN`, and `zh-HK`.

Treat a public slug as an API. When it changes, update navigation, internal links, and required redirects for all locales.

### 5.2 Navigation labels {/* navigation-labels */}

Navigation labels should:

- Express the same subject as the page title.
- Use a product, task, or concept readers recognize.
- Maintain parallel grammar among siblings.
- Avoid internal team names, project codes, or service names.
- Avoid placing the same page in multiple locations; use a link page if necessary.

An OpenAPI navigation entry in the form `METHOD /path` must match a real operation in the specification.

## 6. Frontmatter {/* frontmatter */}

Standard public MDX frontmatter:

```yaml
---
title: Quickstart
description: Send and verify your first authenticated BrokerAPI request
---
```

Rules:

- `title` and `description` are required.
- Keep the title short, unique, and scannable. Do not add a period or repeat hierarchy already clear from navigation.
- Write a self-contained one- or two-sentence description that explains the subject and what the reader will accomplish or understand.
- Do not begin with “This page describes” or “Learn more.”
- Do not repeat an H1 in the body; frontmatter renders the page title.
- Add schema-supported fields such as `openapi`, `wide`, or `feedback` only when rendering behavior requires them.
- Do not copy Cloudflare-specific fields such as `pcx_content_type`, `products`, or `weight`.

Localize titles and descriptions while preserving the same information scope.

## 7. Page opening and information order {/* page-opening-and-information-order */}

After frontmatter, begin with a short introduction that answers:

1. What problem does this page solve?
2. Who is it for?
3. What result will the reader get?

Put required credentials, permissions, environments, dependencies, or knowledge in a “Before you begin” section before the first task step.

Recommended order for task pages:

1. Introduction.
2. Before you begin.
3. Procedure.
4. Verification.
5. Errors and boundaries.
6. Next steps.

For concept pages, explain context, core objects, relationships, boundaries, and related tasks. For reference pages, state scope, definitions, limits, exact examples, and related operations.

## 8. Headings and stable anchors {/* headings-and-stable-anchors */}

Every Markdown or MDX heading must end with an explicit stable English anchor:

```md
## Obtain credentials {/* obtain-credentials */}

### Handle an expired token {/* handle-expired-token */}
```

Rules:

- Use lowercase English `kebab-case`.
- Describe the long-lived subject, not wording that may change.
- Align anchors for equivalent headings across locales.
- Do not change an anchor when translating or polishing the visible title.
- Do not skip heading levels.
- Prefer short nouns or verb phrases over vague headings such as “More” or “Other.”
- Use numbered headings only for genuinely sequential tasks or phases.

When an anchor must change, update inbound fragment links in all locales. Run:

```bash
bun run check:anchors
```

## 9. Paragraphs, lists, and procedures {/* paragraphs-lists-and-steps */}

### 9.1 Paragraphs {/* paragraphs */}

- Keep each paragraph to one subject, usually one to three sentences.
- Put the conclusion or condition first.
- Do not repeat the title in an empty introduction.
- Do not use manual line breaks to control visual width.
- Separate paragraphs with one blank line and do not indent them.
- Prefer a list or table when more than three parallel items need scanning.

### 9.2 Lists {/* lists */}

- End complete sentences with periods; short labels and noun phrases may omit punctuation.
- Keep grammar parallel within a list.
- Use ordered lists for sequence or dependency and unordered lists for independent conditions, choices, or features.
- Do not create a one-item list.
- Do not use lists for data that requires column comparison.
- Use `1. `, `2. `, and `3. ` for Markdown ordered lists and `- ` for unordered lists.

### 9.3 Procedures {/* procedures */}

Start each step with a clear action and include an observable result where possible. Use a Markdown ordered list for simple tasks and components for steps containing substantial code or notes:

```mdx
<Steps>
  <Step title="Set the access token">Save the token in `ACCESS_TOKEN`.</Step>
  <Step title="Send the request">Run the command and confirm that `code` is `0`.</Step>
</Steps>
```

Do not mix numbering systems. Label optional steps explicitly. Combine login with opening the destination when login is only a prerequisite. End with verification or a next step.

## 10. Links {/* links */}

Link text must identify the destination. Do not use “click here,” “more,” or a bare URL.

- Use locale-prefixed root-relative URLs for internal links.
- Link headings by their explicit stable anchors.
- Link each locale to a target in the same locale.
- Do not link to missing, unnavigated, or local-only pages.
- Prefer official primary sources for external links.
- Avoid repeating the same destination in adjacent sentences.
- Search for and update inbound links when renaming or moving a page or anchor.
- In Chinese prose, normally insert a half-width space around a link, with sentence-ending punctuation immediately after it.
- Display domains in lowercase and omit meaningless `www.`, trailing slashes, or capitalization variants.

## 11. Code, commands, and examples {/* code-commands-and-examples */}

### 11.1 Inline code {/* inline-code */}

Use backticks for filenames, paths, commands, environment variables, classes, methods, functions, parameters, fields, enum values, HTTP methods, status codes, and short header values. Do not use code formatting for product names, ordinary technical concepts, or natural-language UI labels.

### 11.2 Code blocks {/* code-blocks */}

Give every code block an accurate lowercase language; use `txt` when no language applies.

Examples must:

- Be copyable and runnable in reasonable context.
- Contain only code required for the task.
- Use variable names consistent with the prose.
- Distinguish test and production environments.
- Inject credentials safely rather than hard-coding secrets.
- Include an expected result or verification method.
- Match current SDK and API signatures.

Use uppercase snake case for shell environment variables, such as `$ACCESS_TOKEN`, and clear placeholders such as `<ACCOUNT_NO>`. Do not mix placeholder styles without reason. JSON must be valid unless explicitly labeled as pseudocode.

Do not include `$`, `%`, or `PS>` prompts in command blocks. Put output in a separate `txt` block. Use reserved example domains and documentation IP ranges. Protect `{}` and `<>` from MDX parsing with code formatting or escaping.

### 11.3 Output and error examples {/* output-and-error-examples */}

Keep only fields required to verify the task and state when output is abbreviated. For errors, explain:

- The trigger.
- The relationship between HTTP status and business `code`.
- Whether retrying is safe.
- What to query or correct before retrying.
- When to stop and escalate.

Do not imply that every non-`200` response has the same structure unless OpenAPI defines it.

## 12. Tables, diagrams, and images {/* tables-diagrams-and-images */}

### 12.1 Tables {/* tables */}

Use tables for exact comparisons of fields, responsibilities, states, or options.

- Introduce a table with a complete sentence.
- Use short headers and include units.
- Give every column a header; do not merge cells.
- Keep cells concise and move long procedures to prose.
- Right-align numeric columns.
- Separate required status, defaults, limits, and examples instead of hiding them in “Description.”
- Use an em dash (`—`) for no value.
- Sort by business logic or, if none exists, by name.
- Confirm the table remains understandable on narrow screens.

### 12.2 Mermaid diagrams {/* mermaid-diagrams */}

Use Mermaid when it explains relationships, state, or cross-system sequence more clearly than prose. Keep node names short, include critical conditions and failures, and explain the reader's action after the diagram. A diagram must not be the only source of a fact. Keep logic aligned across locales.

### 12.3 Images and screenshots {/* images-and-screenshots */}

- Add a screenshot only when visual position or output is hard to explain in text.
- Provide concise, meaningful alt text.
- Crop irrelevant areas and redact personal data, customer data, account details, and credentials.
- Avoid screenshots of rapidly changing UI when stable prose or code is sufficient.
- Do not communicate critical information only through color, arrows, or small text in an image.

## 13. MDX components {/* mdx-components */}

The repository provides `Note`, `Tip`, `Warning`, `Steps`, `Step`, `CardGroup`, `Card`, `AccordionGroup`, `Accordion`, `Update`, and `Mermaid` without per-page imports.

- Keep the primary answer and required steps in the body.
- Use `Note` for supplemental context, not long tangents.
- Use `Tip` only for optional advice.
- Make a `Warning` state the concrete consequence and prevention.
- Do not stack callouts.
- Use `Accordion` for independent FAQs or secondary details, not required flow.
- Make card titles and descriptions understandable without surrounding prose.

Do not copy Cloudflare-specific component names. First check for an equivalent Whale Docs component; otherwise prefer standard Markdown unless new interaction is genuinely required.

## 14. OpenAPI copywriting {/* openapi-copywriting */}

OpenAPI is an API contract, not ordinary prose. BrokerAPI generated files are imported from an upstream source repository. Fix copy in the source and regenerate instead of maintaining direct edits here.

### 14.1 Info, servers, and tags {/* openapi-info-servers-and-tags */}

- Use the formal product name in `info.title`.
- Use one sentence in `info.description` to state the audience, calling boundary, and core purpose.
- Use `info.version` for the documented API version, not a date.
- Give each server an accurate URL and clear environment name.
- Use stable business domains for tags, not internal services or teams.
- Keep tag scope and order aligned across locales.

### 14.2 Operations {/* openapi-operations */}

Every operation should include:

- A unique, stable, readable `operationId`.
- A short action-and-object `summary` without version or implementation details.
- A `description` covering purpose, use case, side effects, asynchronous semantics, and important limits.
- Correct tags, authentication, and parameter locations.
- Every response that callers meaningfully need to handle.

Do not repeat `summary` as `description`. Avoid empty prefixes such as “This interface is used to”; state the result directly.

### 14.3 Parameters and schemas {/* openapi-parameters-and-schemas */}

Field descriptions should explain the field's meaning, format, unit, time zone, precision, case rules, range, length, pattern, default, enum meanings, conditional requirements, lifecycle, and stability where applicable.

Express machine constraints through OpenAPI keywords such as `type`, `format`, `enum`, `minimum`, `maximum`, `minLength`, `pattern`, and `deprecated`.

List multiple enum or status values separately, using backticks and ` - `:

```markdown
Call contract supports extended sessions:

- `1` - Supported
- `0` - Not supported
```

Reject low-quality descriptions such as duplicated field names, “Data,” “Status,” untranslated fragments, or “Success” without explaining returned data or business completion.

### 14.4 Requests and responses {/* openapi-requests-and-responses */}

- Specify the correct media type.
- Describe the purpose of the whole request body and the meaning of each field.
- Distinguish request acceptance from final business completion.
- Use HTTP status according to protocol semantics and document business `code` separately.
- Give callers an action for each error.
- Define page or cursor behavior, size limits, ordering, and `has_more` for pagination.
- Define query identifiers, processing states, terminal states, and timeout handling for asynchronous work.
- Define partial success, per-item errors, and atomicity for batch operations.
- Document idempotency keys, duplicate requests, and timeout retry semantics for writes; do not assume unknown behavior.

### 14.5 Examples {/* openapi-examples */}

Provide at least one representative success example and important failure or boundary examples as needed. Examples must validate against the schema.

- Use related identifiers consistently between request and response.
- Use valid enum, date, timestamp, amount, and quantity formats.
- Never use real customer data.
- Choose informative values instead of filling everything with `string`, `0`, or an empty object.
- Do not include response fields absent from the schema.
- Translate explanatory prose but keep machine values aligned across locales.

For cURL, use the complete API URL, clear environment variables, `Authorization` before `Content-Type`, valid two-space JSON, and single quotes around the full `--data` value. Do not add `--request POST` when a body already implies `POST`; specify methods without a body when needed.

### 14.6 Deprecation and versioning {/* deprecation-and-versioning */}

For deprecated operations or fields:

- Set `deprecated: true`.
- Name the replacement.
- Explain migration differences and the deadline; say when a deadline is not decided.
- Keep old links reachable during the support period.
- Do not use versioned page slugs as a substitute for a versioning strategy.

## 15. FAQ, troubleshooting, and operations {/* faq-troubleshooting-and-operations */}

Write FAQ headings as complete questions readers would search. Lead each answer with the conclusion, followed by conditions and actions.

Structure troubleshooting content as:

1. Observable symptom and error message.
2. Affected scope.
3. Likely causes ordered by verification cost or probability.
4. Diagnostic steps for each cause.
5. Resolution.
6. Verification.
7. Redacted information required for escalation.

Do not use “retry” or “contact support” as an answer without diagnostic information. Operations pages should define evidence such as trace ID, business identifier, time range, environment, and reproduction steps, while prohibiting secrets and personal data.

## 16. Localization parity {/* localization-parity */}

Equivalent pages across all locales must preserve:

- The same slug and directory level.
- The same section count and stable English anchors.
- The same facts, steps, code behavior, links, and risk warnings.
- The same API fields, enums, paths, and machine values.
- The same navigation position.

Adjust sentence order, punctuation, and title length naturally, but do not make one locale a reduced summary. Search all locales and OpenAPI variants when changing a shared fact. Revalidate code and links after translation.

## 17. AI writing workflow {/* ai-writing-workflow */}

### 17.1 Before writing {/* before-writing */}

1. Read `AGENTS.md` and instructions for the target directory.
2. Confirm the audience, task, content type, and page scope.
3. Find primary sources and record unresolved facts.
4. Search existing pages, glossaries, navigation, inbound links, and locale equivalents.
5. Check OpenAPI or SDK signatures to avoid duplicating generated reference material.
6. Prefer improving an existing page when a new page is unnecessary.

### 17.2 While writing {/* while-writing */}

1. State the page purpose and successful outcome.
2. Write the shortest usable main path.
3. Add prerequisites, boundaries, failure handling, and next steps.
4. Use stable anchors and accurate internal links.
5. Add tables, diagrams, callouts, or components only when they reduce effort.
6. Recheck the source for every number, promise, and security statement.
7. Keep terminology aligned across locales.

### 17.3 While reviewing {/* while-reviewing */}

Review in four passes:

1. **Facts:** Verify APIs, code, states, ownership, security, and numbers.
2. **Task:** Confirm readers can complete the task in order and recognize success.
3. **Structure:** Check content type, headings, links, callouts, and navigation.
4. **Language:** Check clarity, consistency, translatability, and marketing filler.

Report unresolved facts instead of silently completing them.

## 18. Page templates {/* page-templates */}

### 18.1 How-to template {/* how-to-template */}

```mdx
---
title: Configure event forwarding
description: Forward Whale events to Broker Server and verify the result
---

Configure event forwarding so Broker Server can receive and process Whale events.

## Before you begin {/* before-you-begin */}

- Prepare test-environment credentials.
- Confirm that the callback URL is available over HTTPS.

## Configure forwarding {/* configure-forwarding */}

<Steps>
  <Step title="Create the receiving endpoint">Implement request verification and idempotent processing.</Step>
  <Step title="Submit the configuration">Provide the verified endpoint information to the project team.</Step>
</Steps>

## Verify the result {/* verify-the-result */}

Send a test event and confirm that the service returns the agreed success response and processes the event only once.

## Next steps {/* next-steps */}

Read [Operations and support](/en/docs/operations-support) to configure logging and alerts.
```

### 18.2 Concept template {/* concept-template */}

```mdx
---
title: Sessions and accounts
description: Understand the relationship between Customer sessions, Whale users, and brokerage accounts
---

These objects have different identifiers and lifecycles. Distinguishing them prevents incorrect authorization and resource association.

## Core objects {/* core-objects */}

Define each object, identifier, creator, and persistence responsibility.

## Object relationships {/* object-relationships */}

Explain relationships, state changes, and authorization boundaries.

## Next steps {/* next-steps */}

Link to a task the reader can perform.
```

### 18.3 API operation template {/* api-operation-template */}

```yaml
summary: Query account cash balances
description: >-
  Returns cash balances for the specified brokerage account. The response
  includes one entry per currency available to the account.
```

Define required fields, formats, enums, and constraints in the schema. Define success and error semantics in responses. Use examples that reflect a valid, verifiable structure.

## 19. Pre-publication checklist {/* pre-publication-checklist */}

### Content and facts {/* content-and-facts */}

- [ ] The page has one clear purpose and audience.
- [ ] The primary answer, prerequisites, successful result, and next step are easy to find.
- [ ] Primary sources verify product behavior, APIs, SDKs, versions, and numbers.
- [ ] Unknowns, historical samples, and recommendations are not presented as commitments.
- [ ] Security, permission, data-impact, and irreversible operations are explicit.
- [ ] No real secrets, personal data, or customer data appear.

### Structure and format {/* structure-and-format */}

- [ ] Filenames and URLs are short and stable, with aligned locale slugs.
- [ ] `title` and `description` are accurate and self-contained.
- [ ] The body does not repeat an H1.
- [ ] Every heading has a stable English anchor and valid hierarchy.
- [ ] Links identify their targets and use the correct locale and anchor.
- [ ] Lists, steps, tables, and MDX components fit their content.
- [ ] Images have alt text, and diagrams are not the only source of facts.

### Code and API {/* code-and-api */}

- [ ] Every code block has the correct language and is copyable.
- [ ] Variables, placeholders, environments, and expected results are clear.
- [ ] Examples contain no secrets and match current API or SDK signatures.
- [ ] OpenAPI examples validate against the schema.
- [ ] Writes describe side effects, asynchronous states, retry behavior, or idempotency boundaries.

### Localization and verification {/* localization-and-verification */}

- [ ] Facts, anchors, code, and warnings match across locales.
- [ ] Simplified and Traditional Chinese have been edited naturally.
- [ ] `docs.json` navigation and internal links are updated.
- [ ] `bun run check:anchors` has passed.
- [ ] A relevant targeted check, normally `bun run check`, has passed.
- [ ] The expensive full build was not run unless explicitly requested or essential.

## 20. Cloudflare reference boundary {/* cloudflare-reference-boundary */}

This guide adopts these general Cloudflare Docs principles:

- Organize content around user goals and journeys.
- Use stable content types to define page purpose.
- Use plain language, active voice, present tense, and consistent terms.
- Keep the primary answer in the body and reveal complexity progressively.
- Make page descriptions independently explain the subject and reader benefit.
- Make headings, links, alt text, and procedures accessible.
- Give concept, task, reference, and troubleshooting content distinct purposes.
- Use code, tables, callouts, and screenshots only when they help readers complete a task.

It does not copy these Cloudflare-specific implementations:

- Frontmatter such as `pcx_content_type`, `products`, and `weight`.
- Cloudflare product names, terminology, directory structure, or internal review processes.
- Astro or MDX components specific to the Cloudflare repository.
- Formats that conflict with Whale Docs generation, localization, or explicit-anchor requirements.

External references:

- [Cloudflare Docs snapshot](https://github.com/cloudflare/cloudflare-docs/tree/7aab48be1a0accec2f792739d3e7a9f2ccf596bc)
- [Style Guide source](https://github.com/cloudflare/cloudflare-docs/tree/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide)
- [Writing guidelines source](https://github.com/cloudflare/cloudflare-docs/blob/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide/documentation-content-strategy/writing-guidelines.mdx)
- [Content types source](https://github.com/cloudflare/cloudflare-docs/tree/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide/documentation-content-strategy/content-types)
- [File conventions source](https://github.com/cloudflare/cloudflare-docs/blob/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide/documentation-content-strategy/file-conventions.mdx)
- [Code block guidelines source](https://github.com/cloudflare/cloudflare-docs/blob/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide/formatting/code-block-guidelines.mdx)
- [API content strategy source](https://github.com/cloudflare/cloudflare-docs/tree/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/content/docs/style-guide/api-content-strategy)
- [Frontmatter schema source](https://github.com/cloudflare/cloudflare-docs/blob/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/src/schemas/base.ts)
- [Cloudflare Docs CI source](https://github.com/cloudflare/cloudflare-docs/blob/7aab48be1a0accec2f792739d3e7a9f2ccf596bc/.github/workflows/ci.yml)
