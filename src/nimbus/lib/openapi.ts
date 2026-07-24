import en from "../../../openapi.en.json";
import zhCN from "../../../openapi.zh-CN.json";
import zhHK from "../../../openapi.zh-HK.json";

export type OpenApiDocument = {
  paths: Record<string, Record<string, unknown>>;
  components?: Record<string, any>;
  [key: string]: any;
};
export type OperationRecord = {
  locale: "en" | "zh-CN" | "zh-HK";
  method: string;
  path: string;
  operation: Record<string, any>;
  document: OpenApiDocument;
};

const documents = { en, "zh-CN": zhCN, "zh-HK": zhHK } as const;

const pathMethodCounts = new Map<string, number>();
for (const [locale, document] of Object.entries(documents)) {
  for (const [path, pathItem] of Object.entries(document.paths)) {
    const count = Object.keys(pathItem as Record<string, unknown>).filter((method) =>
      ["get", "post", "put", "patch", "delete"].includes(method),
    ).length;
    pathMethodCounts.set(`${locale}:${path}`, count);
  }
}

export function operationPath(path: string): string {
  return path.replace(/^\//, "").replace(/[{}]/g, "").replace(/[^a-zA-Z0-9/_-]+/g, "-");
}

/** Public docs URL: mirror the API resource path. Only append the HTTP method
 * for the small set of OpenAPI paths that define multiple operations. */
export function operationRoutePath(locale: string, method: string, path: string): string {
  const resourcePath = operationPath(path);
  return (pathMethodCounts.get(`${locale}:${path}`) ?? 0) > 1
    ? `${resourcePath}/${method.toLowerCase()}`
    : resourcePath;
}

export function allOperations(): OperationRecord[] {
  return Object.entries(documents).flatMap(([locale, document]) =>
    Object.entries(document.paths).flatMap(([path, pathItem]) =>
      Object.entries(pathItem as Record<string, unknown>)
        .filter(([method]) => ["get", "post", "put", "patch", "delete"].includes(method))
        .map(([method, operation]) => ({ locale: locale as OperationRecord["locale"], method, path, operation: operation as Record<string, any>, document: document as OpenApiDocument })),
    ),
  );
}

export function resolveSchema(document: OpenApiDocument, schema: any): any {
  if (!schema) return schema;
  if (schema.$ref) {
    return resolveSchema(
      document,
      schema.$ref.replace(/^#\//, "").split("/").reduce((value: any, key: string) => value?.[key], document),
    );
  }
  if (!schema.allOf) return schema;

  const parts = schema.allOf.map((part: any) => resolveSchema(document, part) ?? {});
  return parts.reduce(
    (merged: any, part: any) => ({
      ...merged,
      ...part,
      properties: { ...(merged.properties ?? {}), ...(part.properties ?? {}) },
      required: [...new Set([...(merged.required ?? []), ...(part.required ?? [])])],
    }),
    { ...schema, allOf: undefined },
  );
}
