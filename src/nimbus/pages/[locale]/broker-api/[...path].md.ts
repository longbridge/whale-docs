import type { APIRoute } from "astro";
import { allOperations, operationRoutePath, resolveSchema, type OperationRecord } from "../../../lib/openapi";

export function getStaticPaths() {
  return allOperations().map((record) => ({
    params: { locale: record.locale.toLowerCase(), path: operationRoutePath(record.locale, record.method, record.path) },
    props: record,
  }));
}

export const GET: APIRoute = ({ props }) => {
  const { method, path, operation, document } = props as OperationRecord;
  const title = operation.summary || operation.operationId || `${method.toUpperCase()} ${path}`;
  const requestContent = operation.requestBody?.content ?? {};
  const requestType = Object.keys(requestContent)[0];
  const requestSchema = requestType ? resolveSchema(document, requestContent[requestType]?.schema) : undefined;
  const downloadMetadata = operation["x-dataset-download"];
  const downloadOperation = downloadMetadata
    ? document.paths?.[downloadMetadata.path]?.[
        downloadMetadata.method.toLowerCase()
      ] as Record<string, any> | undefined
    : undefined;
  const downloadContent = downloadOperation?.requestBody?.content ?? {};
  const downloadType = Object.keys(downloadContent)[0];
  const downloadSchema = downloadType
    ? resolveSchema(document, downloadContent[downloadType]?.schema)
    : undefined;
  const responses = Object.fromEntries(Object.entries(operation.responses ?? {}).map(([status, response]: [string, any]) => {
    const type = Object.keys(response.content ?? {})[0];
    return [status, { description: response.description, schema: type ? resolveSchema(document, response.content[type]?.schema) : undefined }];
  }));
  const markdown = [
    `# ${title}`,
    operation.description,
    `\`${method.toUpperCase()} ${path}\``,
    "## Authorization",
    "`Authorization: Bearer <token>`",
    requestSchema ? `## Request body\n\n\`\`\`json\n${JSON.stringify(requestSchema, null, 2)}\n\`\`\`` : "",
    downloadOperation
      ? [
          "## Export",
          "Export uses the same `filters` as the dataset query. `orderBy` is not supported.",
          `\`${downloadMetadata.method.toUpperCase()} ${downloadMetadata.path}\``,
          downloadSchema
            ? `\`\`\`json\n${JSON.stringify(downloadSchema, null, 2)}\n\`\`\``
            : "",
        ].filter(Boolean).join("\n\n")
      : "",
    `## Responses\n\n\`\`\`json\n${JSON.stringify(responses, null, 2)}\n\`\`\``,
  ].filter(Boolean).join("\n\n");
  return new Response(markdown, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
