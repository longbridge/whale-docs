import { describe, expect, test } from "bun:test";
import {
  buildLocalizedSpec,
  buildGeneratedNavigationGroups,
  parseMenuTranslations,
  parseApprovalManifest,
  resolveApprovals,
  type SourceOperation,
} from "./lib/approved-api-publisher";

const sourceOperation: SourceOperation = {
  key: "POST /v1/example",
  method: "POST",
  path: "/v1/example",
  operationId: "create_example",
  sourceFile: "/source/example.yaml",
  document: {
    components: {
      schemas: {
        Result: { type: "object", properties: { id: { type: "string" } } },
      },
    },
  },
  operation: {
    operationId: "create_example",
    summary: "创建示例",
    "x-summary-en": "Create example",
    "x-summary-hk": "建立示例",
    "x-menu-path": ["示例 (Examples)"],
    responses: {
      "200": {
        content: {
          "application/json": {
            schema: {
              allOf: [
                { $ref: "#/components/schemas/Result" },
                {
                  type: "object",
                  properties: {
                    state: {
                      type: "string",
                      enum: ["active"],
                      "x-enum-details": [
                        {
                          value: "active",
                          cn: "启用",
                          hk: "啟用",
                          en: "Active",
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  pathItem: {},
};

sourceOperation.pathItem = {
  parameters: [
    { name: "account-channel", in: "header", schema: { type: "string" } },
  ],
  post: sourceOperation.operation,
};

describe("approval manifest", () => {
  test("normalizes methods and rejects duplicate method/path entries", () => {
    const manifest = parseApprovalManifest(`
version: 1
apis:
  - method: post
    path: /v1/example
    operationId: create_example
`);
    expect(manifest.apis[0].method).toBe("POST");
    expect(() =>
      parseApprovalManifest(`
version: 1
apis:
  - { method: POST, path: /v1/example, operationId: one }
  - { method: POST, path: /v1/example, operationId: two }
`),
    ).toThrow("Duplicate approval");
  });

  test("fails closed when operationId changes", () => {
    expect(() =>
      resolveApprovals(
        {
          version: 1,
          apis: [{ method: "POST", path: "/v1/example", operationId: "old_id" }],
        },
        [sourceOperation],
      ),
    ).toThrow("operationId changed");
  });
});

describe("localized output", () => {
  test("includes only selected operations and their referenced components", () => {
    const spec = buildLocalizedSpec([sourceOperation], "en");
    expect(spec.paths["/v1/example"].post.summary).toBe("Create example");
    expect(spec.paths["/v1/example"].post["x-summary-en"]).toBeUndefined();
    expect(spec.components.schemas.Result.type).toBe("object");
    expect(spec.paths["/v1/example"].parameters[0].name).toBe("account-channel");
    expect(
      spec.paths["/v1/example"].post.responses["200"].content[
        "application/json"
      ].schema.allOf[1].properties.state.description,
    ).toContain("`active` - Active");
    expect(spec.tags).toEqual([{ name: "Examples" }]);
  });

  test("pairs dataset downloads, removes orderBy, and keeps only download filters", () => {
    const base = structuredClone(sourceOperation);
    base.path = "/v1/datasets/examples";
    base.key = "POST /v1/datasets/examples";
    base.operationId = "examples";
    base.operation.operationId = "examples";
    base.operation.requestBody = {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              filters: { type: "object" },
              page: { type: "integer" },
              orderBy: { type: "string" },
            },
            required: ["filters", "orderBy"],
          },
        },
      },
    };
    base.pathItem = { post: base.operation };
    const download = structuredClone(base);
    download.path = "/v1/datasets/examples/download";
    download.key = "POST /v1/datasets/examples/download";
    download.operationId = "examples_download";
    download.operation.operationId = "examples_download";
    download.operation.requestBody.content[
      "application/json"
    ].schema.properties.mode = { type: "integer" };
    download.pathItem = { post: download.operation };

    const spec = buildLocalizedSpec([base, download], "zh-CN");
    const baseOperation = spec.paths[base.path].post;
    const downloadOperation = spec.paths[download.path].post;
    expect(baseOperation["x-dataset-download"].path).toBe(download.path);
    expect(
      baseOperation.requestBody.content["application/json"].schema.properties
        .orderBy,
    ).toBeUndefined();
    expect(downloadOperation["x-dataset-parent"].path).toBe(base.path);
    expect(
      Object.keys(
        downloadOperation.requestBody.content["application/json"].schema
          .properties,
      ),
    ).toEqual(["filters"]);

    const groups = buildGeneratedNavigationGroups(
      [base, download],
      "zh-CN",
      new Map(),
    );
    expect(groups[0].pages).toEqual([base.key]);
  });

  test("uses verified Traditional Chinese menu names", () => {
    const translations = parseMenuTranslations({
      data: {
        menus: [
          {
            name: {
              en: "Examples",
              "zh-CN": "示例",
              "zh-HK": "範例",
            },
          },
        ],
      },
    });
    const spec = buildLocalizedSpec([sourceOperation], "zh-HK", translations);
    expect(spec.tags).toEqual([{ name: "範例" }]);
    expect(spec.info.description).toContain("伺服器端 API");
  });

  test("disambiguates the Account Assets account balance label", () => {
    const operation = structuredClone(sourceOperation);
    operation.operation["x-menu-path"] = [
      "资产账户 (Account Assets)",
      "账户 (Account)",
      "账户余额 (Account Balance)",
      "现金 (Cash)",
    ];
    const groups = buildGeneratedNavigationGroups(
      [operation],
      "zh-CN",
      new Map(),
    );
    expect(groups[0].pages[0].pages[0].group).toBe("帐户余额");
  });
});
