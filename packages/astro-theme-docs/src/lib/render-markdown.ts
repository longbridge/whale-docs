import { marked } from "marked";

export function renderMarkdown(value?: string): string {
  if (!value) return "";
  return marked.parse(value, { async: false }) as string;
}

export function renderInlineMarkdown(value?: string): string {
  if (!value) return "";
  return marked.parseInline(value, { async: false }) as string;
}
