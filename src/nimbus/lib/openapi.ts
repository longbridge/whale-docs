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
import billingEnSource from "../../../broker-api/billing.en.yml?raw";
import billingZhCNSource from "../../../broker-api/billing.zh-CN.yml?raw";
import billingZhHKSource from "../../../broker-api/billing.zh-HK.yml?raw";
import suspiciousEnSource from "../../../broker-api/suspicious.en.yml?raw";
import suspiciousZhCNSource from "../../../broker-api/suspicious.zh-CN.yml?raw";
import suspiciousZhHKSource from "../../../broker-api/suspicious.zh-HK.yml?raw";
import clearingEnSource from "../../../broker-api/clearing.en.yml?raw";
import clearingZhCNSource from "../../../broker-api/clearing.zh-CN.yml?raw";
import clearingZhHKSource from "../../../broker-api/clearing.zh-HK.yml?raw";
import serviceParamEnSource from "../../../broker-api/service-param.en.yml?raw";
import serviceParamZhCNSource from "../../../broker-api/service-param.zh-CN.yml?raw";
import serviceParamZhHKSource from "../../../broker-api/service-param.zh-HK.yml?raw";
import bookkeepingEnSource from "../../../broker-api/bookkeeping.en.yml?raw";
import bookkeepingZhCNSource from "../../../broker-api/bookkeeping.zh-CN.yml?raw";
import bookkeepingZhHKSource from "../../../broker-api/bookkeeping.zh-HK.yml?raw";
import announcementEnSource from "../../../broker-api/announcement.en.yml?raw";
import announcementZhCNSource from "../../../broker-api/announcement.zh-CN.yml?raw";
import announcementZhHKSource from "../../../broker-api/announcement.zh-HK.yml?raw";
import reportsEnSource from "../../../broker-api/reports.en.yml?raw";
import reportsZhCNSource from "../../../broker-api/reports.zh-CN.yml?raw";
import reportsZhHKSource from "../../../broker-api/reports.zh-HK.yml?raw";
import riskControlEnSource from "../../../broker-api/risk-control.en.yml?raw";
import riskControlZhCNSource from "../../../broker-api/risk-control.zh-CN.yml?raw";
import riskControlZhHKSource from "../../../broker-api/risk-control.zh-HK.yml?raw";

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
const billingEn = parse(billingEnSource) as OpenApiDocument;
const billingZhCN = parse(billingZhCNSource) as OpenApiDocument;
const billingZhHK = parse(billingZhHKSource) as OpenApiDocument;
const suspiciousEn = parse(suspiciousEnSource) as OpenApiDocument;
const suspiciousZhCN = parse(suspiciousZhCNSource) as OpenApiDocument;
const suspiciousZhHK = parse(suspiciousZhHKSource) as OpenApiDocument;
const clearingEn = parse(clearingEnSource) as OpenApiDocument;
const clearingZhCN = parse(clearingZhCNSource) as OpenApiDocument;
const clearingZhHK = parse(clearingZhHKSource) as OpenApiDocument;
const serviceParamEn = parse(serviceParamEnSource) as OpenApiDocument;
const serviceParamZhCN = parse(serviceParamZhCNSource) as OpenApiDocument;
const serviceParamZhHK = parse(serviceParamZhHKSource) as OpenApiDocument;
const bookkeepingEn = parse(bookkeepingEnSource) as OpenApiDocument;
const bookkeepingZhCN = parse(bookkeepingZhCNSource) as OpenApiDocument;
const bookkeepingZhHK = parse(bookkeepingZhHKSource) as OpenApiDocument;
const announcementEn = parse(announcementEnSource) as OpenApiDocument;
const announcementZhCN = parse(announcementZhCNSource) as OpenApiDocument;
const announcementZhHK = parse(announcementZhHKSource) as OpenApiDocument;
const reportsEn = parse(reportsEnSource) as OpenApiDocument;
const reportsZhCN = parse(reportsZhCNSource) as OpenApiDocument;
const reportsZhHK = parse(reportsZhHKSource) as OpenApiDocument;
const riskControlEn = parse(riskControlEnSource) as OpenApiDocument;
const riskControlZhCN = parse(riskControlZhCNSource) as OpenApiDocument;
const riskControlZhHK = parse(riskControlZhHKSource) as OpenApiDocument;

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
  en: mergeDocuments(whaleApiEn, accountAssetsEn, miscEn, clearingEn, billingEn, suspiciousEn, serviceParamEn, bookkeepingEn, announcementEn, reportsEn, riskControlEn),
  "zh-CN": mergeDocuments(whaleApiZhCN, accountAssetsZhCN, miscZhCN, clearingZhCN, billingZhCN, suspiciousZhCN, serviceParamZhCN, bookkeepingZhCN, announcementZhCN, reportsZhCN, riskControlZhCN),
  "zh-HK": mergeDocuments(whaleApiZhHK, accountAssetsZhHK, miscZhHK, clearingZhHK, billingZhHK, suspiciousZhHK, serviceParamZhHK, bookkeepingZhHK, announcementZhHK, reportsZhHK, riskControlZhHK),
} as const;

const domainDocuments = {
  en: [
    ["broker-api/account-assets.en.yml", accountAssetsEn],
    ["broker-api/clearing.en.yml", clearingEn],
    ["broker-api/misc.en.yml", miscEn],
    ["broker-api/whaleapi.en.yml", whaleApiEn],
    ["broker-api/billing.en.yml", billingEn],
    ["broker-api/suspicious.en.yml", suspiciousEn],
    ["broker-api/service-param.en.yml", serviceParamEn],
    ["broker-api/bookkeeping.en.yml", bookkeepingEn],
    ["broker-api/announcement.en.yml", announcementEn],
    ["broker-api/reports.en.yml", reportsEn],
    ["broker-api/risk-control.en.yml", riskControlEn],
  ],
  "zh-CN": [
    ["broker-api/account-assets.zh-CN.yml", accountAssetsZhCN],
    ["broker-api/clearing.zh-CN.yml", clearingZhCN],
    ["broker-api/misc.zh-CN.yml", miscZhCN],
    ["broker-api/whaleapi.zh-CN.yml", whaleApiZhCN],
    ["broker-api/billing.zh-CN.yml", billingZhCN],
    ["broker-api/suspicious.zh-CN.yml", suspiciousZhCN],
    ["broker-api/service-param.zh-CN.yml", serviceParamZhCN],
    ["broker-api/bookkeeping.zh-CN.yml", bookkeepingZhCN],
    ["broker-api/announcement.zh-CN.yml", announcementZhCN],
    ["broker-api/reports.zh-CN.yml", reportsZhCN],
    ["broker-api/risk-control.zh-CN.yml", riskControlZhCN],
  ],
  "zh-HK": [
    ["broker-api/account-assets.zh-HK.yml", accountAssetsZhHK],
    ["broker-api/clearing.zh-HK.yml", clearingZhHK],
    ["broker-api/misc.zh-HK.yml", miscZhHK],
    ["broker-api/whaleapi.zh-HK.yml", whaleApiZhHK],
    ["broker-api/billing.zh-HK.yml", billingZhHK],
    ["broker-api/suspicious.zh-HK.yml", suspiciousZhHK],
    ["broker-api/service-param.zh-HK.yml", serviceParamZhHK],
    ["broker-api/bookkeeping.zh-HK.yml", bookkeepingZhHK],
    ["broker-api/announcement.zh-HK.yml", announcementZhHK],
    ["broker-api/reports.zh-HK.yml", reportsZhHK],
    ["broker-api/risk-control.zh-HK.yml", riskControlZhHK],
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

export function operationPath(path: string): string {
  return path
    .replace(/^\//, "")
    .replace(/[{}]/g, "")
    .replace(/[^a-zA-Z0-9/_-]+/g, "-");
}

/** Public docs URL: mirror the API resource path. Only append the HTTP method
 * for the small set of OpenAPI paths that define multiple operations. */
export function operationRoutePath(
  locale: string,
  method: string,
  path: string,
): string {
  const resourcePath = operationPath(path);
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

export function operationPermissions(operation: Record<string, any>): {
  keys: string[];
  lbOnly: boolean;
} {
  return {
    keys: (operation["x-permission-key"] ?? []) as string[],
    lbOnly: operation["x-lbonly"] === true,
  };
}

export function permissionLabels(locale: string) {
  return locale === "en"
    ? {
        none: "No dedicated permission key. Any authenticated Broker ACCESS_TOKEN with access to this scope can call it.",
        lbonly: "Longbridge-internal only — not granted to external brokers.",
        lbonlyBadge: "LB only",
        scopeTooltip: (key: string) =>
          `Calling this API requires the <code>${key}</code> permission. Your Broker ACCESS_TOKEN must be granted this permission, or the call will be rejected.`,
      }
    : locale === "zh-CN"
      ? {
          none: "无专属权限 Key。具备该 scope 访问权限的已鉴权 Broker ACCESS_TOKEN 即可调用。",
          lbonly: "仅长桥内部可用，不对外部券商授权。",
          lbonlyBadge: "内部专用",
          scopeTooltip: (key: string) =>
            `调用此接口需要 <code>${key}</code> 权限，Broker ACCESS_TOKEN 未被授予该权限时将无法调用。`,
        }
      : {
          none: "無專屬權限 Key。具備該 scope 存取權限的已鑑權 Broker ACCESS_TOKEN 即可呼叫。",
          lbonly: "僅長橋內部可用，不對外部券商授權。",
          lbonlyBadge: "內部專用",
          scopeTooltip: (key: string) =>
            `呼叫此介面需要 <code>${key}</code> 權限，Broker ACCESS_TOKEN 未被授予該權限時將無法呼叫。`,
        };
}

export function resolveSchema(document: OpenApiDocument, schema: any): any {
  if (!schema) return schema;
  if (schema.$ref) {
    return resolveSchema(
      document,
      schema.$ref
        .replace(/^#\//, "")
        .split("/")
        .reduce((value: any, key: string) => value?.[key], document),
    );
  }
  if (!schema.allOf) return schema;

  const parts = schema.allOf.map(
    (part: any) => resolveSchema(document, part) ?? {},
  );
  return parts.reduce(
    (merged: any, part: any) => ({
      ...merged,
      ...part,
      properties: { ...(merged.properties ?? {}), ...(part.properties ?? {}) },
      required: [
        ...new Set([...(merged.required ?? []), ...(part.required ?? [])]),
      ],
    }),
    { ...schema, allOf: undefined },
  );
}
