# Repository Guidelines

## Stable documentation URLs

- Keep documentation filenames and URL segments short, simple, and durable.
- Name a page after its long-lived subject instead of its current implementation, document type, or integration method.
- Prefer `faq` over `technical-faq`, `ios` over `ios-integration`, `android` over `android-integration`, and `web` over `webtrade-integration`.
- Avoid qualifiers such as `technical`, `integration`, `implementation`, `guide`, `setup`, and version numbers unless they distinguish genuinely separate, long-lived concepts.
- Use the same slug for equivalent pages across `en`, `zh-CN`, and `zh-HK`.
- When an existing public slug must change, update navigation and internal links for every locale together.

## Verification

- Do not run the full `bun run build` by default because it is expensive in this repository.
- Prefer targeted checks or `bun run check` while developing.
- Run `bun run build` only when the user explicitly requests it or when a full production build is essential to the requested task.
