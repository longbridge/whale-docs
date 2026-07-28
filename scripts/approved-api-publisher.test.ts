import { describe, expect, test } from "bun:test";
import {
  buildLocalizedSpec,
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
});
