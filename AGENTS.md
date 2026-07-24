# Repository Guidelines

## Documentation copywriting

- Before creating, rewriting, translating, or reviewing public documentation, OpenAPI copy, or navigation labels, read and follow [`COPYWRITING.md`](./COPYWRITING.md).
- Treat `COPYWRITING.md` as the repository's writing, terminology, localization, formatting, and AI authoring standard.
- If instructions conflict, verified product behavior and this `AGENTS.md` take precedence over `COPYWRITING.md`.

## Stable documentation URLs

- Keep documentation filenames and URL segments short, simple, and durable.
- Name a page after its long-lived subject instead of its current implementation, document type, or integration method.
- Prefer `faq` over `technical-faq`, `ios` over `ios-integration`, `android` over `android-integration`, and `web` over `webtrade-integration`.
- Avoid qualifiers such as `technical`, `integration`, `implementation`, `guide`, `setup`, and version numbers unless they distinguish genuinely separate, long-lived concepts.
- Use the same slug for equivalent pages across `en`, `zh-CN`, and `zh-HK`.
- When an existing public slug must change, update navigation and internal links for every locale together.

## Stable heading anchors

- Every heading in documentation content under `docs/` must end with an explicit, durable English anchor in the form `## Visible title {/* stable-english-anchor */}`.
- Do not add these anchors to repository Markdown files outside `docs/` (for example `README.md`, `CONTRIBUTING.md`, or `COPYWRITING.md`).
- Use lowercase kebab-case English words for anchors. Keep equivalent headings aligned across `en`, `zh-CN`, and `zh-HK`.
- Treat the explicit anchor as a public URL. Do not change it merely because the visible title is reworded or translated.
- When an anchor genuinely must change, update inbound fragment links in every locale together.
- Run `bun run check:anchors` after adding or reorganizing documentation headings.

## Verification

- Do not run the full `bun run build` by default because it is expensive in this repository.
- Prefer targeted checks or `bun run check` while developing.
- Run `bun run build` only when the user explicitly requests it or when a full production build is essential to the requested task.

## Repository scripts

- Write new repository automation and maintenance scripts in TypeScript using the `.ts` extension.
- Run TypeScript scripts with Bun.
- Do not add new `.js`, `.mjs`, Ruby, Python, or shell scripts unless a required toolchain cannot support the task in TypeScript.
- Do not commit one-off migration, formatting, translation, or bulk-rewrite scripts.
- Use AI with `COPYWRITING.md` for documentation wording, translation, and Markdown formatting instead of encoding prose rewrites as transformation scripts.
- Keep a script only when it is a durable, repeatable maintenance entry point with a clear ongoing purpose.
