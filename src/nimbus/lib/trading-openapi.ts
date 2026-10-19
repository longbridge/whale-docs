import en from "../../../openapi.trading.en.json";
import zhCN from "../../../openapi.trading.zh-CN.json";
import zhHK from "../../../openapi.trading.zh-HK.json";
import supplementEn from "../../../openapi.trading.supplement.en.json";
import supplementZhCN from "../../../openapi.trading.supplement.zh-CN.json";
import supplementZhHK from "../../../openapi.trading.supplement.zh-HK.json";
import { operationPath, type OpenApiDocument } from "./openapi";

export type TradingOperationRecord = {
  locale: "en" | "zh-CN" | "zh-HK";
  method: string;
  path: string;
  sourceFile: string;
  operation: Record<string, any>;
  document: OpenApiDocument;
};

type Locale = TradingOperationRecord["locale"];

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"];

// The upstream specs are regenerated from LBFrontendAPIGenerator. Operations that are not
// in the upstream source yet live in openapi.trading.supplement.*.json so a regeneration
// does not drop them. When an operation exists in both, the upstream definition wins.
const upstreamDocuments: Record<Locale, OpenApiDocument> = {
  en: en as OpenApiDocument,
  "zh-CN": zhCN as OpenApiDocument,
  "zh-HK": zhHK as OpenApiDocument,
};
const supplementDocuments: Record<Locale, OpenApiDocument> = {
  en: supplementEn as OpenApiDocument,
  "zh-CN": supplementZhCN as OpenApiDocument,
  "zh-HK": supplementZhHK as OpenApiDocument,
};

const sourceFiles = new Map<string, string>();

function mergeDocuments(locale: Locale): OpenApiDocument {
  const upstream = upstreamDocuments[locale];
  const supplement = supplementDocuments[locale];
  const paths: OpenApiDocument["paths"] = {};
  for (const [path, pathItem] of Object.entries(upstream.paths)) {
    paths[path] = { ...pathItem };
    for (const method of Object.keys(pathItem)) {
      sourceFiles.set(`${locale} ${method} ${path}`, `openapi.trading.${locale}.json`);
    }
  }
  for (const [path, pathItem] of Object.entries(supplement.paths ?? {})) {
    const merged = (paths[path] ??= {});
    for (const [method, operation] of Object.entries(pathItem)) {
      if (method in merged) continue;
      merged[method] = operation;
      sourceFiles.set(`${locale} ${method} ${path}`, `openapi.trading.supplement.${locale}.json`);
    }
  }
  const tagNames = new Set((upstream.tags ?? []).map((tag: { name: string }) => tag.name));
  return {
    ...upstream,
    tags: [...(upstream.tags ?? []), ...(supplement.tags ?? []).filter((tag: { name: string }) => !tagNames.has(tag.name))],
    components: {
      ...upstream.components,
      schemas: { ...supplement.components?.schemas, ...upstream.components?.schemas },
    },
    paths,
  };
}

const documents: Record<Locale, OpenApiDocument> = {
  en: mergeDocuments("en"),
  "zh-CN": mergeDocuments("zh-CN"),
  "zh-HK": mergeDocuments("zh-HK"),
};
const routeDocument = documents["zh-CN"];
const methodCounts = new Map(
  Object.entries(routeDocument.paths).map(([path, pathItem]) => [
    path,
    Object.keys(pathItem).filter((method) => HTTP_METHODS.includes(method)).length,
  ]),
);

export function allTradingOperations(): TradingOperationRecord[] {
  return (Object.entries(documents) as [Locale, OpenApiDocument][]).flatMap(([locale, document]) =>
    Object.entries(document.paths).flatMap(([path, pathItem]) =>
      Object.entries(pathItem)
        .filter(([method]) => HTTP_METHODS.includes(method))
        .map(([method, operation]) => ({
          locale,
          method,
          path,
          sourceFile: sourceFiles.get(`${locale} ${method} ${path}`) ?? `openapi.trading.${locale}.json`,
          operation: operation as Record<string, any>,
          document,
        })),
    ),
  );
}

export function tradingOperationRoutePath(method: string, path: string): string {
  const resourcePath = operationPath(path);
  // Astro collapses a trailing `/index` route segment, so such paths also get the method suffix.
  const needsMethod = (methodCounts.get(path) ?? 0) > 1 || /(^|\/)index$/.test(resourcePath);
  return needsMethod ? `${resourcePath}/${method.toLowerCase()}` : resourcePath;
}
