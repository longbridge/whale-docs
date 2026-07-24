import en from "../../../openapi.trading.en.json";
import zhCN from "../../../openapi.trading.zh-CN.json";
import zhHK from "../../../openapi.trading.zh-HK.json";
import { operationPath, type OpenApiDocument } from "./openapi";

export type TradingOperationRecord = {
  locale: "en" | "zh-CN" | "zh-HK";
  method: string;
  path: string;
  operation: Record<string, any>;
  document: OpenApiDocument;
};

const documents = {
  en: en as OpenApiDocument,
  "zh-CN": zhCN as OpenApiDocument,
  "zh-HK": zhHK as OpenApiDocument,
};
const routeDocument = documents["zh-CN"];
const methodCounts = new Map(
  Object.entries(routeDocument.paths).map(([path, pathItem]) => [
    path,
    Object.keys(pathItem).filter((method) => ["get", "post", "put", "patch", "delete"].includes(method)).length,
  ]),
);

export function allTradingOperations(): TradingOperationRecord[] {
  return (Object.entries(documents) as [TradingOperationRecord["locale"], OpenApiDocument][]).flatMap(([locale, document]) =>
    Object.entries(document.paths).flatMap(([path, pathItem]) =>
      Object.entries(pathItem)
        .filter(([method]) => ["get", "post", "put", "patch", "delete"].includes(method))
        .map(([method, operation]) => ({
          locale,
          method,
          path,
          operation: operation as Record<string, any>,
          document,
        })),
    ),
  );
}

export function tradingOperationRoutePath(method: string, path: string): string {
  const resourcePath = operationPath(path);
  return (methodCounts.get(path) ?? 0) > 1 ? `${resourcePath}/${method.toLowerCase()}` : resourcePath;
}
