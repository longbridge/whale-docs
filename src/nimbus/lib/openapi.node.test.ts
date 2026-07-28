import { describe, expect, test } from "bun:test";
import { allOperations, resolveDatasetDownload } from "./openapi";

const locales = ["en", "zh-CN", "zh-HK"] as const;
const exportFields = new Set([
  "filters",
  "mode",
  "ext",
  "file_name",
  "down_fields",
  "ticket_content",
  "ticket_preview_url",
  "hide",
]);

describe("published Broker API domains", () => {
  test("preserves the migrated WhaleAPI baseline", async () => {
    for (const locale of locales) {
      const document = Bun.YAML.parse(
        await Bun.file(`broker-api/whaleapi.${locale}.yml`).text(),
      );
      const count = Object.values(document.paths).reduce(
        (total: number, pathItem: any) =>
          total +
          ["get", "post", "put", "patch", "delete"].filter(
            (method) => pathItem[method],
          ).length,
        0,
      );
      expect(count).toBe(236);
    }
  });

  test("keeps paired downloads hidden and resolvable", () => {
    const operations = allOperations();

    for (const locale of locales) {
      const localized = operations.filter((record) => record.locale === locale);
      expect(localized).toHaveLength(282);
      expect(
        localized.some(
          ({ path }) =>
            path === "/v1/datasets/download_records" ||
            path === "/v1/datasets/download/{id}",
        ),
      ).toBe(true);

      const datasets = localized.filter(
        ({ operation }) => operation["x-dataset-download"],
      );
      expect(datasets).toHaveLength(35);

      for (const record of datasets) {
        const download = resolveDatasetDownload(
          record.document,
          record.operation,
        );
        expect(download).toBeDefined();
        const schema =
          download?.operation.requestBody?.content?.["application/json"]
            ?.schema;
        expect(
          Object.keys(schema?.properties ?? {}).every((field) =>
            exportFields.has(field),
          ),
        ).toBe(true);
        expect(JSON.stringify(schema)).not.toContain("orderBy");
      }
    }
  });
});
