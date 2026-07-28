import { readdir, readFile } from "node:fs/promises";
import { relative, resolve } from "node:path";

export const HTTP_METHODS = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace",
] as const;

type JsonObject = Record<string, any>;

export interface Approval {
  method: string;
  path: string;
  operationId: string;
}

export interface ApprovalManifest {
  version: 1;
  apis: Approval[];
}

export interface SourceOperation {
  key: string;
  method: string;
  path: string;
  operationId: string;
  operation: JsonObject;
  document: JsonObject;
  sourceFile: string;
}

const SKIPPED_DIRECTORIES = new Set([
  ".git",
  ".Codex",
  ".claude",
  "node_modules",
  "scripts",
  "data",
  "templates",
  "docs",
  "whale-openapi",
]);

export function operationKey(method: string, path: string): string {
  return `${method.toUpperCase()} ${path}`;
}

export function parseApprovalManifest(source: string): ApprovalManifest {
  const parsed = Bun.YAML.parse(source) as JsonObject;
  if (parsed?.version !== 1 || !Array.isArray(parsed.apis)) {
    throw new Error("Approval manifest must contain `version: 1` and an `apis` array.");
  }

  const seen = new Set<string>();
  const apis = parsed.apis.map((entry: JsonObject, index: number) => {
    const method = String(entry?.method ?? "").toUpperCase();
    const path = String(entry?.path ?? "");
    const operationId = String(entry?.operationId ?? "");
    if (!HTTP_METHODS.includes(method.toLowerCase() as (typeof HTTP_METHODS)[number])) {
      throw new Error(`apis[${index}] has an unsupported HTTP method: ${method || "(empty)"}`);
    }
    if (!path.startsWith("/")) {
      throw new Error(`apis[${index}] must have an absolute API path.`);
    }
    if (!operationId) {
      throw new Error(`apis[${index}] is missing operationId.`);
    }
    const key = operationKey(method, path);
    if (seen.has(key)) throw new Error(`Duplicate approval: ${key}`);
    seen.add(key);
    return { method, path, operationId };
  });

  return { version: 1, apis };
}

async function listYamlFiles(directory: string, root = directory): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.isDirectory() && SKIPPED_DIRECTORIES.has(entry.name)) continue;
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listYamlFiles(path, root)));
    else if (entry.isFile() && /\.ya?ml$/i.test(entry.name)) files.push(path);
  }
  return files;
}

export async function scanSourceOperations(sourceDirectory: string): Promise<SourceOperation[]> {
  const operations: SourceOperation[] = [];
  for (const sourceFile of await listYamlFiles(sourceDirectory)) {
    let document: JsonObject;
    try {
      document = Bun.YAML.parse(await readFile(sourceFile, "utf8")) as JsonObject;
    } catch (error) {
      throw new Error(
        `Cannot parse ${relative(sourceDirectory, sourceFile)}: ${error instanceof Error ? error.message : error}`,
      );
    }
    if (!document?.paths || typeof document.paths !== "object") continue;
    for (const [path, pathItem] of Object.entries(document.paths as JsonObject)) {
      for (const method of HTTP_METHODS) {
        const operation = (pathItem as JsonObject)?.[method];
        if (!operation) continue;
        const operationId = String(operation.operationId ?? "");
        if (!operationId) {
          throw new Error(`${relative(sourceDirectory, sourceFile)}: ${method.toUpperCase()} ${path} has no operationId.`);
        }
        operations.push({
          key: operationKey(method, path),
          method: method.toUpperCase(),
          path,
          operationId,
          operation,
          document,
          sourceFile,
        });
      }
    }
  }
  return operations;
}

export function resolveApprovals(
  manifest: ApprovalManifest,
  sourceOperations: SourceOperation[],
): SourceOperation[] {
  const index = new Map<string, SourceOperation[]>();
  for (const operation of sourceOperations) {
    const matches = index.get(operation.key) ?? [];
    matches.push(operation);
    index.set(operation.key, matches);
  }

  return manifest.apis.map((approval) => {
    const key = operationKey(approval.method, approval.path);
    const matches = index.get(key) ?? [];
    if (matches.length === 0) throw new Error(`Approved API is missing from the source: ${key}`);
    if (matches.length > 1) {
      throw new Error(
        `Approved API is ambiguous in the source: ${key}\n${matches.map((item) => `  - ${item.sourceFile}`).join("\n")}`,
      );
    }
    const match = matches[0];
    if (match.operationId !== approval.operationId) {
      throw new Error(
        `operationId changed for ${key}: approved \`${approval.operationId}\`, source \`${match.operationId}\``,
      );
    }
    return match;
  });
}

const LOCALES = {
  en: { suffix: "en", apiDirectory: "en/api-reference" },
  "zh-CN": { suffix: "cn", apiDirectory: "zh-CN/api-reference" },
  "zh-HK": { suffix: "hk", apiDirectory: "zh-HK/api-reference" },
} as const;

export type Locale = keyof typeof LOCALES;

function localizedValue(node: JsonObject, key: string, suffix: string): unknown {
  if (suffix === "cn") return node[key];
  return node[`x-${key}-${suffix}`] ?? node[key];
}

function localizeNode(value: unknown, suffix: string): unknown {
  if (Array.isArray(value)) return value.map((item) => localizeNode(item, suffix));
  if (!value || typeof value !== "object") return value;

  const node = value as JsonObject;
  const result: JsonObject = {};
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith("x-")) {
      if (["x-permission-key", "x-lbonly", "x-source"].includes(key)) {
        result[key] = localizeNode(child, suffix);
      }
      continue;
    }
    result[key] = localizeNode(child, suffix);
  }

  for (const key of ["summary", "description"]) {
    const localized = localizedValue(node, key, suffix);
    if (localized !== undefined) result[key] = localizeNode(localized, suffix);
  }

  const label = node[`x-name-${suffix}`] ?? (suffix === "cn" ? node["x-name-cn"] : undefined);
  if (label && typeof result.description === "string" && !result.description.startsWith(String(label))) {
    result.description = `${label}. ${result.description}`;
  }
  return result;
}

function deepEqual(left: unknown, right: unknown): boolean {
  return JSON.stringify(left) === JSON.stringify(right);
}

function mergeComponent(
  target: JsonObject,
  section: string,
  name: string,
  value: unknown,
  sourceFile: string,
): void {
  target[section] ??= {};
  if (name in target[section] && !deepEqual(target[section][name], value)) {
    throw new Error(`Conflicting component #/components/${section}/${name} from ${sourceFile}`);
  }
  target[section][name] = value;
}

function collectRefs(value: unknown, refs = new Set<string>()): Set<string> {
  if (Array.isArray(value)) {
    for (const item of value) collectRefs(item, refs);
  } else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value as JsonObject)) {
      if (key === "$ref" && typeof child === "string" && child.startsWith("#/components/")) refs.add(child);
      else collectRefs(child, refs);
    }
  }
  return refs;
}

function addReferencedComponents(
  target: JsonObject,
  source: JsonObject,
  seed: unknown,
  sourceFile: string,
): void {
  const pending = [...collectRefs(seed)];
  const visited = new Set<string>();
  while (pending.length) {
    const ref = pending.pop()!;
    if (visited.has(ref)) continue;
    visited.add(ref);
    const [, , section, ...nameParts] = ref.split("/");
    const name = nameParts.join("/");
    const component = source.components?.[section]?.[name];
    if (component === undefined) throw new Error(`Unresolved reference ${ref} in ${sourceFile}`);
    mergeComponent(target, section, name, component, sourceFile);
    for (const childRef of collectRefs(component)) pending.push(childRef);
  }
}

function localizedMenuSegments(operation: SourceOperation, locale: Locale): string[] {
  const raw = Array.isArray(operation.operation["x-menu-path"])
    ? operation.operation["x-menu-path"].map(String)
    : [];
  return raw.map((segment) => {
    const match = segment.match(/^(.*?)\s*\((.+)\)\s*$/);
    if (!match) return segment;
    if (locale === "en") return match[2].trim();
    return match[1].trim();
  });
}

export function buildLocalizedSpec(
  operations: SourceOperation[],
  locale: Locale,
): JsonObject {
  const suffix = LOCALES[locale].suffix;
  const components: JsonObject = {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        description:
          locale === "en"
            ? "ACCESS_TOKEN issued to the broker, sent as `Authorization: Bearer <token>`."
            : "由 Whale 向 Broker 签发 ACCESS_TOKEN，并通过 `Authorization: Bearer <token>` 发送。",
      },
    },
  };
  const paths: JsonObject = {};
  const tags = new Map<string, JsonObject>();

  for (const source of operations) {
    const localized = localizeNode(source.operation, suffix) as JsonObject;
    const menu = localizedMenuSegments(source, locale);
    const tagName = menu[0] ?? String(localized.tags?.[0] ?? "Misc");
    localized.tags = [tagName];
    localized["x-mint"] = {
      href: `/${locale}/api-reference/${source.operationId}`,
      metadata: { sidebarTitle: localized.summary ?? source.operationId },
    };
    paths[source.path] ??= {};
    paths[source.path][source.method.toLowerCase()] = localized;
    tags.set(tagName, { name: tagName });
    addReferencedComponents(components, source.document, source.operation, source.sourceFile);
  }

  return {
    openapi: "3.1.1",
    info: {
      title: "Longport Whale Broker API",
      description:
        locale === "en"
          ? "Institution-grade server-to-server API for brokers running on Longport Whale."
          : "面向使用 Longport Whale 的 Broker 的服务端 API。",
      version: "2.0.0",
    },
    servers: [
      { url: "https://b-api.longbridge.xyz", description: locale === "en" ? "Test" : "测试环境" },
      { url: "https://b-api.lbkrs.com", description: locale === "en" ? "Production" : "生产环境" },
    ],
    tags: [...tags.values()],
    paths,
    components: localizeNode(components, suffix),
    security: [{ bearerAuth: [] }],
  };
}

type NavigationGroup = { group: string; icon?: string; pages: any[]; openapi?: JsonObject };

function insertPage(groups: NavigationGroup[], segments: string[], page: string): void {
  const [segment = "Misc", ...rest] = segments;
  let group = groups.find((item) => item.group === segment);
  if (!group) {
    group = { group: segment, pages: [] };
    groups.push(group);
  }
  if (rest.length === 0) {
    group.pages.push(page);
    return;
  }
  insertPage(group.pages as NavigationGroup[], rest, page);
}

export function buildGeneratedNavigationGroups(
  operations: SourceOperation[],
  locale: Locale,
  iconByGroup: Map<string, string> = new Map(),
): NavigationGroup[] {
  const groups: NavigationGroup[] = [];
  for (const operation of operations) {
    insertPage(groups, localizedMenuSegments(operation, locale), operation.key);
  }
  for (const group of groups) {
    group.icon = iconByGroup.get(group.group) ?? "component";
    group.openapi = {
      source: `openapi.${locale}.json`,
      directory: LOCALES[locale].apiDirectory,
    };
  }
  return groups;
}

export function replaceBrokerNavigation(
  docs: JsonObject,
  operations: SourceOperation[],
): JsonObject {
  const copy = structuredClone(docs);
  for (const language of copy.navigation?.languages ?? []) {
    const locale = language.language as Locale;
    if (!(locale in LOCALES)) continue;
    const brokerTab = language.tabs?.find((tab: JsonObject) => tab.tab === "BrokerAPI");
    if (!brokerTab) throw new Error(`BrokerAPI tab not found for ${locale}`);
    const manual = brokerTab.groups.filter((group: JsonObject) => !group.openapi);
    const existingIcons = new Map<string, string>(
      brokerTab.groups
        .filter((group: JsonObject) => group.openapi && group.icon)
        .map((group: JsonObject) => [group.group, group.icon]),
    );
    brokerTab.groups = [
      ...manual.filter((group: JsonObject) => group.group !== "Operations"),
      ...buildGeneratedNavigationGroups(operations, locale, existingIcons),
      ...manual.filter((group: JsonObject) => group.group === "Operations"),
    ];
  }
  return copy;
}

