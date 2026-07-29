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

  test("publishes Dataset queries as GET with an optional POST fallback", async () => {
    const operations = allOperations();
    const navigation = JSON.parse(await Bun.file("docs.json").text());

    expect(JSON.stringify(navigation)).not.toMatch(/POST \/v1\/datasets\//);

    for (const locale of locales) {
      const localized = operations.filter((record) => record.locale === locale);
      const fallbackQueries = localized.filter(
        ({ operation }) => operation["x-post-fallback"] === true,
      );

      expect(fallbackQueries).toHaveLength(38);
      expect(
        localized.some(
          ({ method, path }) =>
            method === "post" &&
            path.startsWith("/v1/datasets/") &&
            !path.endsWith("/download"),
        ),
      ).toBe(false);

      for (const record of fallbackQueries) {
        expect(record.method).toBe("get");
        expect(record.path).toStartWith("/v1/datasets/");
        expect(record.path).not.toEndWith("/download");
        if (record.operation["x-dataset-download"]) {
          expect(record.operation["x-dataset-download"].method).toBe("POST");
        }
      }
    }
  });

  test("keeps public operation copy free of internal names and invalid terminology", () => {
    const invalidTerm =
      /\b(?:hashkey|crs|ccass|atm)\b|(?:^|[^$A-Za-z])ref(?=[^A-Za-z]|$)|[Qq]uery[Tt]able|[Dd]ata[Tt]able/;
    const missingChineseSpace =
      /[\p{Script=Han}](?:V[0-9]+|IPO|PI|HashKey|CRS|CCASS|ATM|Ref)|(?:V[0-9]+|IPO|PI|HashKey|CRS|CCASS|ATM|Ref)[\p{Script=Han}]/u;

    for (const { operation } of allOperations()) {
      const publicCopy = [
        operation.summary,
        operation.description,
        operation["x-description-en"],
        operation["x-description-hk"],
        operation["x-mint"]?.metadata?.sidebarTitle,
      ].filter((value): value is string => typeof value === "string");

      for (const value of publicCopy) {
        expect(value).not.toMatch(invalidTerm);
        expect(value).not.toMatch(missingChineseSpace);
      }
      if (operation["x-mint"]?.metadata?.sidebarTitle) {
        expect(operation["x-mint"].metadata.sidebarTitle).toBe(
          operation.summary,
        );
      }
    }
  });
});
