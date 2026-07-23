import { getCollection } from "astro:content";
import type { SidebarItem } from "nimbus-docs/types";
import docsConfig from "../../../docs.json";
import { allOperations, operationRoutePath } from "./openapi";

type PageNode = string | { group: string; pages: PageNode[] };
type NavGroup = { group: string; icon?: string; pages: PageNode[] };
type NavTab = { tab: string; groups: NavGroup[] };
type LanguageNav = { language: string; tabs: NavTab[] };

// Map the short icon names used in docs.json's top-level groups onto concrete
// Phosphor (astro-icon) names. Every first-level group must resolve to an icon,
// so unknown/omitted names fall back to a neutral section glyph.
const GROUP_ICON_ALIASES: Record<string, string> = {
  rocket: "ph:rocket-launch",
  "book-open": "ph:book-open",
  palette: "ph:palette",
  code: "ph:code",
  database: "ph:database",
  "app-window": "ph:app-window",
  cpu: "ph:cpu",
  play: "ph:play-circle",
  wallet: "ph:wallet",
  banknote: "ph:money",
  sparkles: "ph:sparkle",
  shield: "ph:shield-check",
  "chart-candlestick": "ph:chart-line-up",
  bell: "ph:bell",
  settings: "ph:gear",
  component: "ph:puzzle-piece",
  wrench: "ph:wrench",
};

function resolveGroupIcon(name?: string): string {
  if (!name) return "ph:folder";
  if (name.includes(":")) return name;
  return GROUP_ICON_ALIASES[name] ?? "ph:folder";
}

const sectionForTab: Record<string, string[]> = {
  "Docs": ["overview", "docs", "design-system"],
  "WhaleSDK": ["whalesdk"],
  "BrokerAPI": ["broker-api"],
  "TradingAPI": ["trading-api"],
  "OpenAPI": ["openapi"],
};

const operationTitles = new Map(
  allOperations().map(({ locale, method, path, operation }) => [
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

export async function getWhaleSidebar(pathname: string): Promise<SidebarItem[]> {
  const segments = pathname.split("/").filter(Boolean);
  const requestedLocale = segments[0] ?? "en";
  const locale = requestedLocale.toLowerCase() === "zh-cn" ? "zh-CN" : requestedLocale.toLowerCase() === "zh-hk" ? "zh-HK" : "en";
  const section = segments[1] ?? "overview";
  const languages = docsConfig.navigation.languages as LanguageNav[];
  const configLocale = locale === "zh-CN" ? "cn" : locale === "zh-HK" ? "zh-Hant" : "en";
  const language = languages.find((entry) => entry.language === locale || entry.language === configLocale) ?? languages[0];
  const tab = language.tabs.find((entry) => (sectionForTab[entry.tab] ?? []).includes(section)) ?? language.tabs[0];
  const entries = await getCollection("docs");
  const titleById = new Map(entries.map((entry) => [entry.id.toLowerCase().replace(/\.(md|mdx)$/, ""), entry.data.title]));
  const current = pathname.replace(/\/$/, "");

  const convert = (node: PageNode): SidebarItem => {
    if (typeof node !== "string") {
      return { type: "group", label: node.group, collapsed: false, order: 0, children: node.pages.map(convert) };
    }
    const isOperation = /^[A-Z]+\s+\//.test(node);
    const localizedNode = node.replace(/^cn(?=\/|$)/, "zh-cn").replace(/^zh-Hant(?=\/|$)/, "zh-hk");
    const normalizedNode = localizedNode.replace(/\/index$/, "");
    const href = isOperation ? operationHref(locale, node) : `/${normalizedNode.replace(/^\//, "")}`;
    const id = localizedNode.toLowerCase().replace(/^\//, "");
    const fallback = node.split("/").filter(Boolean).at(-1)?.replace(/[-_]/g, " ") ?? node;
    return {
      type: "link",
      label: isOperation ? (operationTitles.get(`${locale}:${node}`) ?? fallback) : (titleById.get(id) ?? fallback),
      href,
      isCurrent: current === href,
      badge: isOperation ? { text: node.split(" ", 1)[0], variant: methodVariant(node.split(" ", 1)[0]) } : undefined,
      order: 0,
    };
  };

  return tab.groups.map((group) => ({
    type: "group",
    label: group.group,
    collapsed: false,
    order: 0,
    icon: resolveGroupIcon(group.icon),
    children: group.pages.map(convert),
  })) as SidebarItem[];
}
