import { readFile } from "node:fs/promises";

// openapi.trading.supplement.*.json holds TradingAPI operations that the upstream
// LBFrontendAPIGenerator source does not provide yet. This check keeps the supplement
// consistent across locales, flags operations that upstream has since absorbed, and
// makes sure every supplement operation is reachable from the sidebar.

const LOCALES = ["en", "zh-CN", "zh-HK"] as const;
const HTTP_METHODS = ["get", "post", "put", "patch", "delete"];

type Spec = { paths: Record<string, Record<string, any>>; tags?: { name: string }[] };

async function readJson<T>(file: string): Promise<T> {
  return JSON.parse(await readFile(new URL(`../${file}`, import.meta.url), "utf8")) as T;
}

function operationKeys(spec: Spec): Set<string> {
  const keys = new Set<string>();
  for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const method of Object.keys(pathItem)) {
      if (HTTP_METHODS.includes(method)) keys.add(`${method.toUpperCase()} ${path}`);
    }
  }
  return keys;
}

function collectTradingPages(node: unknown, pages: Set<string>[]): void {
  if (Array.isArray(node)) {
    for (const child of node) collectTradingPages(child, pages);
    return;
  }
  if (!node || typeof node !== "object") return;
  const record = node as Record<string, unknown>;
  if (record.tab === "TradingAPI") {
    const set = new Set<string>();
    pages.push(set);
    collectPages(record.groups, set);
    return;
  }
  for (const value of Object.values(record)) collectTradingPages(value, pages);
}

function collectPages(node: unknown, set: Set<string>): void {
  if (Array.isArray(node)) {
    for (const child of node) {
      if (typeof child === "string") set.add(child);
      else collectPages(child, set);
    }
  } else if (node && typeof node === "object") {
    for (const value of Object.values(node as Record<string, unknown>)) collectPages(value, set);
  }
}

const errors: string[] = [];
const supplements = new Map<string, Spec>();
const upstreams = new Map<string, Spec>();
for (const locale of LOCALES) {
  supplements.set(locale, await readJson<Spec>(`openapi.trading.supplement.${locale}.json`));
  upstreams.set(locale, await readJson<Spec>(`openapi.trading.${locale}.json`));
}

const reference = operationKeys(supplements.get("zh-CN")!);
for (const locale of LOCALES) {
  const keys = operationKeys(supplements.get(locale)!);
  for (const key of reference) if (!keys.has(key)) errors.push(`${locale} supplement is missing ${key}`);
  for (const key of keys) if (!reference.has(key)) errors.push(`${locale} supplement has ${key}, which zh-CN does not`);

  const upstreamKeys = operationKeys(upstreams.get(locale)!);
  for (const key of keys) {
    if (upstreamKeys.has(key)) {
      errors.push(`${locale}: ${key} is now in the upstream spec; remove it from the supplement`);
    }
  }

  const tagNames = new Set([
    ...(upstreams.get(locale)!.tags ?? []).map((tag) => tag.name),
    ...(supplements.get(locale)!.tags ?? []).map((tag) => tag.name),
  ]);
  for (const [path, pathItem] of Object.entries(supplements.get(locale)!.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.includes(method)) continue;
      for (const tag of operation.tags ?? []) {
        if (!tagNames.has(tag)) errors.push(`${locale}: ${method.toUpperCase()} ${path} uses undeclared tag "${tag}"`);
      }
    }
  }
}

for (const locale of LOCALES) {
  const supplement = supplements.get(locale)! as Spec & { components?: { schemas?: Record<string, unknown> } };
  const upstream = upstreams.get(locale)! as Spec & { components?: { schemas?: Record<string, unknown> } };
  const schemaNames = new Set([
    ...Object.keys(upstream.components?.schemas ?? {}),
    ...Object.keys(supplement.components?.schemas ?? {}),
  ]);
  const refs = JSON.stringify(supplement).matchAll(/"#\/components\/schemas\/([^"]+)"/g);
  for (const [, name] of refs) {
    if (!schemaNames.has(name)) errors.push(`${locale} supplement references missing schema ${name}`);
  }
}

const operationIds = new Map<string, string>();
for (const spec of [upstreams.get("zh-CN")!, supplements.get("zh-CN")!]) {
  for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.includes(method) || !operation.operationId) continue;
      const key = `${method.toUpperCase()} ${path}`;
      const existing = operationIds.get(operation.operationId);
      if (existing && existing !== key) errors.push(`operationId ${operation.operationId} is used by ${existing} and ${key}`);
      operationIds.set(operation.operationId, key);
    }
  }
}

const tradingTabs: Set<string>[] = [];
collectTradingPages(await readJson<unknown>("docs.json"), tradingTabs);
if (tradingTabs.length !== LOCALES.length) {
  errors.push(`expected ${LOCALES.length} TradingAPI tabs in docs.json, found ${tradingTabs.length}`);
}
tradingTabs.forEach((pages, index) => {
  for (const key of reference) {
    if (!pages.has(key)) errors.push(`docs.json TradingAPI tab #${index + 1} does not list ${key}`);
  }
});

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  console.error(`\nTradingAPI supplement check failed with ${errors.length} problem(s).`);
  process.exit(1);
}
console.log(`TradingAPI supplement check passed (${reference.size} supplement operation(s)).`);
