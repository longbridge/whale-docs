import { getCollection } from "astro:content";
import type { SidebarItem } from "nimbus-docs/types";
import docsConfig from "../../../docs.json";
import pendingVerificationManifest from "../../../pending-verification.json";
import { allOperations, operationRoutePath } from "./openapi";
import { allTradingOperations, tradingOperationRoutePath } from "./trading-openapi";

type PageNode = string | { group: string; flatten?: boolean; pages: PageNode[] };
type NavGroup = { group: string; icon?: string; openapi?: unknown; pages: PageNode[] };
type NavTab = { tab: string; groups: NavGroup[] };
type LanguageNav = { language: string; tabs: NavTab[] };

// docs.json's group icons use Lucide kebab-case names (e.g. "rocket",
// "book-open", "square-terminal"), rendered via <LucideIcon name=...>. Names
// are passed through as-is; an omitted name falls back to a neutral folder glyph.
function resolveGroupIcon(name?: string): string {
  return name ?? "folder";
}

const sectionForTab: Record<string, string[]> = {
  "Docs": ["overview", "docs", "design-system"],
  "WhaleSDK": ["whalesdk"],
  "BrokerAPI": ["broker-api"],
  "TradingAPI": ["trading-api"],
  "OpenAPI": ["openapi"],
};

const operationTitles = new Map(
  [...allOperations(), ...allTradingOperations()].map(({ locale, method, path, operation }) => [
      `${locale}:${method.toUpperCase()} ${path}`,
      operation.summary || operation.operationId || path,
    ]),
);

const methodVariant = (method: string) =>
  method === "GET" ? "success" : method === "DELETE" ? "danger" : method === "PUT" || method === "PATCH" ? "warning" : "info";

export function operationHref(locale: string, operation: string): string {
  const match = operation.match(/^([A-Z]+)\s+(.+)$/);
  const localePath = locale.toLowerCase();
  if (!match) return `/${localePath}/broker-api`;
  return `/${localePath}/broker-api/${operationRoutePath(locale, match[1], match[2])}`;
}

export function tradingOperationHref(locale: string, operation: string): string {
  const match = operation.match(/^([A-Z]+)\s+(.+)$/);
  const localePath = locale.toLowerCase();
  if (!match) return `/${localePath}/trading-api`;
  return `/${localePath}/trading-api/${tradingOperationRoutePath(match[1], match[2])}`;
}

export async function getWhaleSidebar(pathname: string): Promise<SidebarItem[]> {
  const segments = pathname.split("/").filter(Boolean);
  const requestedLocale = segments[0] ?? "en";
  const locale = requestedLocale.toLowerCase() === "zh-cn" ? "zh-CN" : requestedLocale.toLowerCase() === "zh-hk" ? "zh-HK" : "en";
  const section = segments[1] ?? "overview";
  const languages = docsConfig.navigation.languages as LanguageNav[];
  const configLocale = locale === "zh-CN" ? "cn" : locale === "zh-HK" ? "zh-Hant" : "en";
  const urlLocale = locale === "zh-CN" ? "zh-cn" : locale === "zh-HK" ? "zh-hk" : "en";
  const pendingTitles = (pendingVerificationManifest as Record<string, Record<string, { title: string }>>)[urlLocale] ?? {};
  const language = languages.find((entry) => entry.language === locale || entry.language === configLocale) ?? languages[0];
  const tab = language.tabs.find((entry) => (sectionForTab[entry.tab] ?? []).includes(section)) ?? language.tabs[0];
  const entries = await getCollection("docs");
  const titleById = new Map(entries.map((entry) => [entry.id.toLowerCase().replace(/\.(md|mdx)$/, ""), entry.data.title]));
  // Static `file` builds expose `.html` in Astro.url while public links remain
  // extensionless. Normalize both forms so production marks the current item.
  const current = pathname.replace(/\.html$/, "").replace(/\/$/, "") || "/";
  // Broker API has a deep group tree; collapse every subgroup by default so the
  // sidebar opens showing only the top-level section headers. Other API tabs
  // keep the narrower "collapse only operation-bearing subgroups" behavior.
  const collapseAllSubgroups = section === "broker-api";

  const convert = (node: PageNode, collapseGroups = false): SidebarItem[] => {
    if (typeof node !== "string") {
      const children = node.pages.flatMap((child) => convert(child, collapseGroups));
      if (node.flatten) return children;
      const directlyContainsOperations = children.some(
        (child) => child.type === "link" && child.badge,
      );
      return [{
        type: "group",
        label: node.group,
        collapsed: collapseGroups && (collapseAllSubgroups || directlyContainsOperations),
        order: 0,
        children,
      }];
    }
    const isOperation = /^[A-Z]+\s+\//.test(node);
    const localizedNode = node.replace(/^cn(?=\/|$)/, "zh-cn").replace(/^zh-Hant(?=\/|$)/, "zh-hk");
    const normalizedNode = localizedNode.replace(/\/index$/, "");
    const href = isOperation
      ? section === "trading-api" ? tradingOperationHref(locale, node) : operationHref(locale, node)
      : `/${normalizedNode.replace(/^\//, "")}`;
    const id = localizedNode.toLowerCase().replace(/^\//, "");
    const fallback = node.split("/").filter(Boolean).at(-1)?.replace(/[-_]/g, " ") ?? node;
    // Pending-verification links aren't in the "docs" content collection --
    // they're rendered from pending-verification.json by a dynamic route --
    // so titleById has nothing for them and this would otherwise fall back
    // to the raw slug (e.g. "account assets account balance cash").
    const pendingSlug = localizedNode.match(/broker-api\/pending-verification\/([^/]+)$/)?.[1];
    const pendingTitle = pendingSlug ? pendingTitles[pendingSlug]?.title : undefined;
    return [{
      type: "link",
      label: isOperation ? (operationTitles.get(`${locale}:${node}`) ?? fallback) : (pendingTitle ?? titleById.get(id) ?? fallback),
      href,
      isCurrent: current === href,
      badge: isOperation ? { text: node.split(" ", 1)[0], variant: methodVariant(node.split(" ", 1)[0]) } : undefined,
      order: 0,
    }];
  };

  return tab.groups.map((group) => ({
    type: "group",
    label: group.group,
    collapsed: false,
    order: 0,
    icon: resolveGroupIcon(group.icon),
    children: group.pages.flatMap((node) => convert(node, Boolean(group.openapi))),
  })) as SidebarItem[];
}
