import { readFile, rename, writeFile } from "node:fs/promises";
import process from "node:process";

const specPath = new URL("../openapi.trading.zh-CN.json", import.meta.url);
const localizedSpecPaths = [
  new URL("../openapi.trading.en.json", import.meta.url),
  specPath,
  new URL("../openapi.trading.zh-HK.json", import.meta.url),
];
const envPath = new URL(process.env.MR_ENV_FILE || "../.env", import.meta.url);
const proxyBase =
  process.env.MR_PROXY_BASE || "https://mr.lbkrs.com/api/forward";
const dryRun = process.argv.includes("--dry-run");
const checkOnly = process.argv.includes("--check");
const manifest = {
  version: 1,
  headers: { "account-channel": "lb" },
  cases: [
    {
      operationId: "getV3QuoteStockDetail",
      path: "/v3/quote/stock/detail",
      query: { counter_id: "ST/US/TSLA" },
    },
    {
      operationId: "getNewmarketAggregateLogo",
      path: "/v1/newmarket/aggregate/logo",
      query: { counter_id: "ST/US/TSLA" },
    },
    {
      operationId: "getCreditStockMarginRatioDetail",
      path: "/v1/credit/stock_margin_ratio_detail",
      query: { counter_id: "ST/US/TSLA" },
    },
    {
      operationId: "getRiskAccountStockMarginQuery",
      path: "/v2/app/risk/account_stock_margin/query",
      query: { counter_id: "ST/US/TSLA", currency: "USD" },
    },
    {
      operationId: "getPortfolioStatementList",
      path: "/v1/portfolio/statement/list",
      query: { kind: 1, page: 1, size: 5, account_channel: "lb" },
    },
    {
      operationId: "getPortfolioStatementUrl",
      path: "/v1/portfolio/statement/url",
      query: {
        key: {
          $from: "getPortfolioStatementList",
          pointer: "/data/items/0/key",
        },
      },
    },
    {
      operationId: "getRewardsCardList",
      path: "/rewards/card_list",
      query: {
        current: 1,
        page_size: 10,
        card_status: -1,
        tag_key: 0,
        account_channel: "lb",
      },
    },
    {
      operationId: "getRewardsMemberRewardList",
      path: "/rewards/member_reward_list",
      query: {
        current: 1,
        page_size: 10,
        reward_type: -1,
        account_channel: "lb",
      },
    },
    {
      operationId: "getPortfolioAdmin",
      path: "/v5/portfolio/admin",
      query: {},
    },
    {
      operationId: "getBillingMyRatesFeeCopywriting",
      path: "/v1/billing/my_rates_fee_copywriting",
      query: {},
    },
    {
      operationId: "getV4GeminiOptionchainDateList",
      path: "/v4/gemini/optionchain-date-list",
      query: { underlying_counter_id: "ST/US/AAPL" },
    },
    {
      operationId: "getV2QuoteOptionDetail",
      path: "/v2/quote/option/detail",
      query: {
        counter_id: {
          $from: "getV4GeminiOptionchainDateList",
          pointer: "/data/strike_price/0/call_counter_id",
        },
      },
    },
    {
      operationId: "getQuoteOptionVolumeStatsDaily",
      path: "/v1/quote/option/volume_stats_daily",
      query: {
        counter_id: "ST/US/AAPL",
        timestamp: { $dynamic: "unix-time" },
        line_num: 3,
      },
    },
    {
      operationId: "getV4GeminiOptionList",
      path: "/v4/gemini/option-list",
      query: {
        underlying_counter_id: "ST/US/AAPL",
        expire_date: {
          $from: "getV4GeminiOptionchainDateList",
          pointer: "/data/default_expire_date/expire_date",
        },
        standard_attr: {
          $from: "getV4GeminiOptionchainDateList",
          pointer: "/data/default_expire_date/standard_attr",
        },
      },
    },
    {
      operationId: "getOpchangeBigorderLists",
      path: "/v1/opchange/bigorder/lists",
      query: { underlying_counter_id: "ST/US/AAPL", limit: 3 },
    },
    {
      operationId: "getOpchangeUnusualvolLists",
      path: "/v1/opchange/unusualvol/lists",
      query: { underlying_counter_id: "ETF/US/QQQ", limit: 5, order: 0 },
    },
    {
      operationId: "getOpchangeUnderlyingStatistic",
      path: "/v1/opchange/underlying/statistic",
      query: { change_type: 2, page: 0, size: 5 },
    },
  ],
};

function parseEnv(source) {
  return Object.fromEntries(
    source
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => {
        const index = line.indexOf("=");
        return [
          line.slice(0, index),
          line.slice(index + 1).replace(/^['"]|['"]$/g, ""),
        ];
      }),
  );
}

function jsonPointer(value, pointer) {
  return pointer
    .split("/")
    .slice(1)
    .reduce((current, segment) => {
      const key = segment.replaceAll("~1", "/").replaceAll("~0", "~");
      return current?.[key];
    }, value);
}

function resolveValue(value, responses) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return value;
  if (value.$dynamic === "unix-time") return Math.floor(Date.now() / 1000);
  if (value.$from) {
    const source = responses[value.$from];
    if (!source)
      throw new Error(`Capture dependency has not run: ${value.$from}`);
    const resolved = jsonPointer(source, value.pointer);
    if (resolved === undefined || resolved === null || resolved === "") {
      throw new Error(
        `Capture dependency returned no value: ${value.$from}${value.pointer}`,
      );
    }
    return resolved;
  }
  return Object.fromEntries(
    Object.entries(value).map(([key, child]) => [
      key,
      resolveValue(child, responses),
    ]),
  );
}

function placeholderFor(key) {
  return `<${key
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .toUpperCase()}>`;
}

function sanitize(value, operationId, key = "") {
  if (Array.isArray(value))
    return value.map((child) => sanitize(child, operationId, key));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([childKey, child]) => {
        if (
          operationId.startsWith("getRewards") &&
          /(?:^|_)(?:id|no)$/.test(childKey) &&
          typeof child === "string" &&
          child
        ) {
          return [childKey, placeholderFor(childKey)];
        }
        if (
          [
            "member_id",
            "card_id",
            "record_id",
            "account_no",
            "secret",
            "phone",
            "email",
            "addressee",
            "shipping_address",
          ].includes(childKey) &&
          typeof child === "string" &&
          child
        ) {
          return [childKey, placeholderFor(childKey)];
        }
        return [childKey, sanitize(child, operationId, childKey)];
      }),
    );
  }
  if (typeof value !== "string") return value;
  if (operationId === "getPortfolioStatementUrl" && key === "url")
    return "https://example.com/statements/monthly.pdf";
  if (operationId === "getPortfolioStatementUrl" && key === "pass")
    return "<PDF_PASSWORD>";
  return value.replace(/H\d{8}/g, "<ACCOUNT_NO>");
}

const specification = JSON.parse(await readFile(specPath, "utf8"));
if (manifest.version !== 1 || !Array.isArray(manifest.cases))
  throw new Error("Unsupported capture manifest.");

const paths = new Set();
const operationIds = new Set();
for (const captureCase of manifest.cases) {
  if (captureCase.method && captureCase.method !== "GET")
    throw new Error(
      `Only GET capture is automatic: ${captureCase.operationId}`,
    );
  if (paths.has(captureCase.path))
    throw new Error(`Duplicate capture path: ${captureCase.path}`);
  if (operationIds.has(captureCase.operationId))
    throw new Error(`Duplicate operationId: ${captureCase.operationId}`);
  paths.add(captureCase.path);
  operationIds.add(captureCase.operationId);
}
const getOperations = Object.entries(specification.paths).flatMap(
  ([path, pathItem]) =>
    pathItem.get ? [{ path, operationId: pathItem.get.operationId }] : [],
);
for (const operation of getOperations) {
  if (!paths.has(operation.path) || !operationIds.has(operation.operationId)) {
    throw new Error(
      `Missing GET capture case: ${operation.operationId} (${operation.path})`,
    );
  }
}
if (manifest.cases.length !== getOperations.length) {
  throw new Error(
    `Capture manifest has ${manifest.cases.length} cases for ${getOperations.length} GET operations.`,
  );
}

if (checkOnly) {
  const errors = [];
  for (const localizedSpecPath of localizedSpecPaths) {
    const localized = JSON.parse(await readFile(localizedSpecPath, "utf8"));
    for (const operation of getOperations) {
      const localizedOperation = localized.paths?.[operation.path]?.get;
      const responseContent =
        localizedOperation?.responses?.["200"]?.content?.["application/json"];
      if (
        localizedOperation?.operationId !== operation.operationId ||
        responseContent?.["x-example-source"] !== "mr" ||
        responseContent?.example?.code !== 0
      ) {
        errors.push(
          `${localizedSpecPath.pathname}: missing successful MR example for ${operation.operationId}`,
        );
      }
    }
  }
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exit(1);
  }
  console.log(
    `TradingAPI MR capture check passed: ${getOperations.length} GET operations.`,
  );
  process.exit(0);
}

if (dryRun) {
  for (const captureCase of manifest.cases)
    console.log(`GET ${captureCase.path}`);
  console.log(`Dry run: ${manifest.cases.length} GET operations.`);
  process.exit(0);
}

const env = parseEnv(await readFile(envPath, "utf8"));
const bridgeToken = env["x-bridge-token"];
if (!bridgeToken)
  throw new Error(`x-bridge-token is missing from ${envPath.pathname}`);

const responses = {};
const failures = [];
const capturedAt = new Date().toISOString();
const forwardingHeaders = Object.fromEntries(
  Object.entries(manifest.headers ?? {}).map(([key, value]) => [
    key,
    String(value),
  ]),
);
for (const captureCase of manifest.cases) {
  try {
    const query = resolveValue(captureCase.query ?? {}, responses);
    const url = new URL(`${proxyBase}${captureCase.path}`);
    for (const [key, value] of Object.entries(query))
      url.searchParams.set(key, String(value));
    const response = await fetch(url, {
      headers: { "x-bridge-token": bridgeToken, ...forwardingHeaders },
      signal: AbortSignal.timeout(30_000),
    });
    const text = await response.text();
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      throw new Error(`MR returned non-JSON body (HTTP ${response.status}).`);
    }
    if (!response.ok || body?.code !== 0) {
      throw new Error(
        `MR request failed (HTTP ${response.status}, code ${body?.code}, message ${body?.message}).`,
      );
    }
    responses[captureCase.operationId] = body;
    const operation = specification.paths[captureCase.path]?.get;
    if (!operation || operation.operationId !== captureCase.operationId) {
      throw new Error(`OpenAPI operation mismatch: ${captureCase.operationId}`);
    }
    const sanitizedQuery = sanitize(query, captureCase.operationId);
    for (const [name, value] of Object.entries(sanitizedQuery)) {
      const parameter = operation.parameters?.find(
        (candidate) => candidate.in === "query" && candidate.name === name,
      );
      if (parameter) parameter.example = value;
    }
    const responseContent =
      operation.responses?.[String(response.status)]?.content?.[
        "application/json"
      ];
    if (!responseContent) {
      throw new Error(`OpenAPI response mismatch: ${captureCase.operationId}`);
    }
    responseContent.example = sanitize(body, captureCase.operationId);
    responseContent["x-example-kind"] = "sanitized-captured";
    responseContent["x-example-source"] = "mr";
    responseContent["x-example-captured-at"] = capturedAt;
    console.log(`Captured ${captureCase.operationId}`);
  } catch (error) {
    failures.push(`${captureCase.operationId}: ${error.message}`);
    console.error(`Failed ${captureCase.operationId}: ${error.message}`);
  }
}

const temporaryPath = new URL("../openapi.trading.zh-CN.json.tmp", import.meta.url);
await writeFile(temporaryPath, `${JSON.stringify(specification, null, 2)}\n`);
await rename(temporaryPath, specPath);
console.log(
  `Saved ${manifest.cases.length - failures.length} sanitized MR examples to openapi.trading.zh-CN.json.`,
);
if (failures.length) {
  throw new AggregateError(
    failures,
    `${failures.length} TradingAPI captures failed; successful examples were saved to the OpenAPI document.`,
  );
}
