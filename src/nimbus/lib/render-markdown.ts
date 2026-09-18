import { marked } from "marked";

// Turn inline-code references to a data-dictionary endpoint, e.g.
// `GET /v1/datasets/refs/broker_accounts`, into a link to that endpoint's own doc page.
function linkifyDatasetRefs(md: string, locale?: string): string {
  if (!locale) return md;
  const lp = locale.toLowerCase();
  return md.replace(
    /`(GET\s+)?(\/v1\/datasets\/refs\/([A-Za-z0-9_]+))`/g,
    (_m, get, path, name) => `[\`${get ?? ""}${path}\`](/${lp}/broker-api/v1/datasets/refs/${name})`,
  );
}

export function renderMarkdown(value?: string, locale?: string): string {
  if (!value) return "";
  return marked.parse(linkifyDatasetRefs(value, locale), { async: false }) as string;
}

export function renderInlineMarkdown(value?: string, locale?: string): string {
  if (!value) return "";
  return marked.parseInline(linkifyDatasetRefs(value, locale), { async: false }) as string;
}
