import { describe, expect, test } from "bun:test";
import {
  buildLocalizedSpec,
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
          "application/json": { schema: { $ref: "#/components/schemas/Result" } },
        },
      },
    },
  },
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
    expect(spec.tags).toEqual([{ name: "Examples" }]);
  });
});

