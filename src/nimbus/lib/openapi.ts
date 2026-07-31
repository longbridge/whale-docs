// Whale-specific OpenAPI plumbing: loads the three-locale broker-api YAML,
// merges the domain documents, and resolves the x-dataset-download extension.
//
// The generic parts — $ref/allOf resolution and path-to-slug — live in the
// theme and are re-exported here so existing call sites keep working with a
// single implementation.
export {
  resolveSchema,
  operationPath,
} from "@longbridge/astro-theme-docs/lib/openapi";
import { operationPath as themeOperationPath } from "@longbridge/astro-theme-docs/lib/openapi";
export type { OpenApiDocument as ThemeOpenApiDocument } from "@longbridge/astro-theme-docs/lib/openapi";

import { parse } from "yaml";
import whaleApiEnSource from "../../../broker-api/whaleapi.en.yml?raw";
import whaleApiZhCNSource from "../../../broker-api/whaleapi.zh-CN.yml?raw";
import whaleApiZhHKSource from "../../../broker-api/whaleapi.zh-HK.yml?raw";
import accountAssetsEnSource from "../../../broker-api/account-assets.en.yml?raw";
import accountAssetsZhCNSource from "../../../broker-api/account-assets.zh-CN.yml?raw";
import accountAssetsZhHKSource from "../../../broker-api/account-assets.zh-HK.yml?raw";
import miscEnSource from "../../../broker-api/misc.en.yml?raw";
import miscZhCNSource from "../../../broker-api/misc.zh-CN.yml?raw";
import miscZhHKSource from "../../../broker-api/misc.zh-HK.yml?raw";

export type OpenApiDocument = {
  paths: Record<string, Record<string, unknown>>;
  components?: Record<string, any>;
  [key: string]: any;
};
export type OperationRecord = {
  locale: "en" | "zh-CN" | "zh-HK";
  method: string;
  path: string;
  sourceFile: string;
  operation: Record<string, any>;
  document: OpenApiDocument;
};
export type DatasetOperationLink = {
  method: string;
  path: string;
  operationId: string;
};
export type DatasetDownloadRecord = {
  link: DatasetOperationLink;
  operation: Record<string, any>;
};

const whaleApiEn = parse(whaleApiEnSource) as OpenApiDocument;
const whaleApiZhCN = parse(whaleApiZhCNSource) as OpenApiDocument;
const whaleApiZhHK = parse(whaleApiZhHKSource) as OpenApiDocument;
const accountAssetsEn = parse(accountAssetsEnSource) as OpenApiDocument;
const accountAssetsZhCN = parse(accountAssetsZhCNSource) as OpenApiDocument;
const accountAssetsZhHK = parse(accountAssetsZhHKSource) as OpenApiDocument;
const miscEn = parse(miscEnSource) as OpenApiDocument;
const miscZhCN = parse(miscZhCNSource) as OpenApiDocument;
const miscZhHK = parse(miscZhHKSource) as OpenApiDocument;

function mergeDocuments(
  base: OpenApiDocument,
  ...domains: OpenApiDocument[]
): OpenApiDocument {
  return domains.reduce(
    (merged, domain) => ({
      ...merged,
      paths: { ...merged.paths, ...domain.paths },
      components: {
        ...merged.components,
        ...domain.components,
        schemas: {
          ...merged.components?.schemas,
          ...domain.components?.schemas,
        },
        securitySchemes: {
          ...merged.components?.securitySchemes,
          ...domain.components?.securitySchemes,
        },
      },
    }),
    base,
  );
}

const documents = {
  en: mergeDocuments(whaleApiEn, accountAssetsEn, miscEn),
  "zh-CN": mergeDocuments(whaleApiZhCN, accountAssetsZhCN, miscZhCN),
  "zh-HK": mergeDocuments(whaleApiZhHK, accountAssetsZhHK, miscZhHK),
} as const;

const domainDocuments = {
  en: [
    ["broker-api/account-assets.en.yml", accountAssetsEn],
    ["broker-api/misc.en.yml", miscEn],
    ["broker-api/whaleapi.en.yml", whaleApiEn],
  ],
  "zh-CN": [
    ["broker-api/account-assets.zh-CN.yml", accountAssetsZhCN],
    ["broker-api/misc.zh-CN.yml", miscZhCN],
    ["broker-api/whaleapi.zh-CN.yml", whaleApiZhCN],
  ],
  "zh-HK": [
    ["broker-api/account-assets.zh-HK.yml", accountAssetsZhHK],
    ["broker-api/misc.zh-HK.yml", miscZhHK],
    ["broker-api/whaleapi.zh-HK.yml", whaleApiZhHK],
  ],
} satisfies Record<
  OperationRecord["locale"],
  Array<[string, OpenApiDocument]>
>;

const pathMethodCounts = new Map<string, number>();
for (const [locale, document] of Object.entries(documents)) {
  for (const [path, pathItem] of Object.entries(document.paths)) {
    const count = Object.keys(pathItem as Record<string, unknown>).filter(
      (method) => ["get", "post", "put", "patch", "delete"].includes(method),
    ).length;
    pathMethodCounts.set(`${locale}:${path}`, count);
  }
}

/** Public docs URL: mirror the API resource path. Only append the HTTP method
 * for the small set of OpenAPI paths that define multiple operations. */
export function operationRoutePath(
  locale: string,
  method: string,
  path: string,
): string {
  const resourcePath = themeOperationPath(path);
  return (pathMethodCounts.get(`${locale}:${path}`) ?? 0) > 1
    ? `${resourcePath}/${method.toLowerCase()}`
    : resourcePath;
}

export function allOperations(): OperationRecord[] {
  return Object.entries(documents).flatMap(([locale, document]) =>
    Object.entries(document.paths).flatMap(([path, pathItem]) =>
      Object.entries(pathItem as Record<string, unknown>)
        .filter(([method]) =>
          ["get", "post", "put", "patch", "delete"].includes(method),
        )
        .filter(
          ([, operation]) =>
            !(operation as Record<string, any>)["x-dataset-parent"],
        )
        .map(([method, operation]) => ({
          locale: locale as OperationRecord["locale"],
          method,
          path,
          sourceFile:
            domainDocuments[locale as OperationRecord["locale"]].find(
              ([, domain]) => domain.paths[path]?.[method],
            )?.[0] ?? "",
          operation: operation as Record<string, any>,
          document: document as OpenApiDocument,
        })),
    ),
  );
}

export function resolveDatasetDownload(
  document: OpenApiDocument,
  operation: Record<string, any>,
): DatasetDownloadRecord | undefined {
  const link = operation["x-dataset-download"] as
    DatasetOperationLink | undefined;
  if (!link?.method || !link.path || !link.operationId) return undefined;
  const download = document.paths?.[link.path]?.[link.method.toLowerCase()] as
    Record<string, any> | undefined;
  return download ? { link, operation: download } : undefined;
}

