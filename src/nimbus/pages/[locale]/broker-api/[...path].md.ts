import type { APIRoute } from "astro";
import {
  allOperations,
  operationRoutePath,
  resolveDatasetDownload,
  resolveSchema,
  type OperationRecord,
} from "../../../lib/openapi";

export function getStaticPaths() {
  return allOperations().map((record) => ({
    params: {
      locale: record.locale.toLowerCase(),
      path: operationRoutePath(record.locale, record.method, record.path),
    },
    props: record,
  }));
}

export const GET: APIRoute = ({ props }) => {
  const { locale, method, path, operation, document } =
    props as OperationRecord;
  const title =
    operation.summary ||
    operation.operationId ||
    `${method.toUpperCase()} ${path}`;
  const requestContent = operation.requestBody?.content ?? {};
  const requestType = Object.keys(requestContent)[0];
  const requestSchema = requestType
    ? resolveSchema(document, requestContent[requestType]?.schema)
    : undefined;
  const hasPostFallback =
    method === "get" && operation["x-post-fallback"] === true;
  const postFallbackNote = hasPostFallback
    ? locale === "en"
      ? "This Dataset query is read-only. Use GET by default. If the encoded query parameters are too large, send the same parameters as a JSON body with POST to the same path."
      : locale === "zh-CN"
        ? "此 Dataset 查询为只读接口，默认使用 GET。如果编码后的查询参数过大，可改用 POST，并将相同参数以 JSON 请求体发送到同一路径。"
        : "此 Dataset 查詢為唯讀介面，預設使用 GET。如果編碼後的查詢參數過大，可改用 POST，並將相同參數以 JSON 請求內容傳送至同一路徑。"
    : "";
  const download = resolveDatasetDownload(document, operation);
  const downloadContent = download?.operation.requestBody?.content ?? {};
  const downloadType = Object.keys(downloadContent)[0];
  const resolvedDownloadSchema = downloadType
    ? resolveSchema(document, downloadContent[downloadType]?.schema)
    : undefined;
  const downloadProperties = Object.fromEntries(
    Object.entries(resolvedDownloadSchema?.properties ?? {}).filter(
      ([name]) => name !== "filters",
    ),
  );
  const downloadSchema =
    Object.keys(downloadProperties).length > 0
      ? { type: "object", properties: downloadProperties }
      : undefined;
  const responses = Object.fromEntries(
    Object.entries(operation.responses ?? {}).map(
      ([status, response]: [string, any]) => {
        const type = Object.keys(response.content ?? {})[0];
        return [
          status,
          {
            description: response.description,
            schema: type
              ? resolveSchema(document, response.content[type]?.schema)
              : undefined,
          },
        ];
      },
    ),
  );
  const markdown = [
    `# ${title}`,
    operation.description,
    `\`${method.toUpperCase()} ${path}\``,
    postFallbackNote,
    "## Authorization",
    "`Authorization: Bearer <token>`",
    requestSchema
      ? `## ${hasPostFallback ? "Query parameters" : "Request body"}\n\n\`\`\`json\n${JSON.stringify(requestSchema, null, 2)}\n\`\`\``
      : "",
    download
      ? [
          locale === "en"
            ? "## Export"
            : locale === "zh-CN"
              ? "## 导出"
              : "## 匯出",
          locale === "en"
            ? "The export endpoint uses the same `filters` as this Dataset query."
            : locale === "zh-CN"
              ? "导出接口使用与此 Dataset 查询相同的 `filters`。"
              : "匯出介面使用與此 Dataset 查詢相同的 `filters`。",
          `\`${download.link.method.toUpperCase()} ${download.link.path}\``,
          locale === "en"
            ? "See `GET /v1/datasets/download_records` for export records and `GET /v1/datasets/download/{id}` for asynchronous download details."
            : locale === "zh-CN"
              ? "导出记录请参阅 `GET /v1/datasets/download_records`；异步下载详情请参阅 `GET /v1/datasets/download/{id}`。"
              : "匯出記錄請參閱 `GET /v1/datasets/download_records`；異步下載詳情請參閱 `GET /v1/datasets/download/{id}`。",
          downloadSchema
            ? `\`\`\`json\n${JSON.stringify(downloadSchema, null, 2)}\n\`\`\``
            : "",
        ]
          .filter(Boolean)
          .join("\n\n")
      : "",
    `## Responses\n\n\`\`\`json\n${JSON.stringify(responses, null, 2)}\n\`\`\``,
  ]
    .filter(Boolean)
    .join("\n\n");
  return new Response(markdown, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
