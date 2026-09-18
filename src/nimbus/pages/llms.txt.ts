import { allOperations, operationRoutePath } from "../lib/openapi";
import {
  allTradingOperations,
  tradingOperationRoutePath,
} from "../lib/trading-openapi";

// llms.txt — a crawlable index for LLMs (https://llmstxt.org/). Lists every
// Broker/Trading API operation (English) with a link to its page; append ".md"
// to any operation URL to get the plain-Markdown version.
export async function GET() {
  const site = "https://docs.longportwhale.com";

  const brokerLines = allOperations()
    .filter((r) => r.locale === "en")
    .map((r) => {
      const url = `${site}/en/broker-api/${operationRoutePath(r.locale, r.method, r.path)}`;
      const summary = r.operation.summary || r.operation.operationId || r.path;
      return `- [${summary}](${url}): \`${r.method.toUpperCase()} ${r.path}\``;
    });

  const tradingLines = allTradingOperations()
    .filter((r) => r.locale === "en")
    .map((r) => {
      const url = `${site}/en/trading-api/${tradingOperationRoutePath(r.method, r.path)}`;
      const summary = r.operation.summary || r.operation.operationId || r.path;
      return `- [${summary}](${url}): \`${r.method.toUpperCase()} ${r.path}\``;
    });

  const body = [
    "# Longport Whale Docs",
    "",
    "> Institution-grade server-to-server APIs for brokers running on Longport Whale: Broker API (account, assets, clearing, settlement, funds, IPO, risk control, reporting, and Dataset queries) and Trading API.",
    "",
    "Every operation page is also available as plain Markdown by appending `.md` to its URL. All responses share the Broker API Gateway envelope `{ code, message, data }`; interpret the HTTP status together with the business `code`.",
    "",
    `## Broker API (${brokerLines.length} operations)`,
    "",
    ...brokerLines,
    "",
    `## Trading API (${tradingLines.length} operations)`,
    "",
    ...tradingLines,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
