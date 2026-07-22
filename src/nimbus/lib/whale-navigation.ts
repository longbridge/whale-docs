import { getCollection } from "astro:content";
import type { SidebarItem } from "nimbus-docs/types";
import docsConfig from "../../../docs.json";

type PageNode = string | { group: string; pages: PageNode[] };
type NavGroup = { group: string; pages: PageNode[] };
type NavTab = { tab: string; groups: NavGroup[] };
type LanguageNav = { language: string; tabs: NavTab[] };

const sectionForTab: Record<string, string[]> = {
  "Docs": ["introduction", "docs", "design-system"],
  "Whale SDK": ["whalesdk"],
  "Broker API": ["broker-api"],
  "Trading API": ["trading-api"],
  "OpenAPI": ["openapi"],
};

export function operationHref(locale: string, operation: string): string {
  const match = operation.match(/^([A-Z]+)\s+(.+)$/);
  if (!match) return `/${locale}/broker-api/reference/`;
  const path = match[2]
    .replace(/^\//, "")
    .replace(/[{}]/g, "")
    .replace(/[^a-zA-Z0-9/_-]+/g, "-");
  return `/${locale}/broker-api/reference/${match[1].toLowerCase()}/${path}/`;
}

export async function getWhaleSidebar(pathname: string): Promise<SidebarItem[]> {
  const segments = pathname.split("/").filter(Boolean);
  const requestedLocale = segments[0] ?? "en";
  const locale = requestedLocale.toLowerCase() === "zh-cn" ? "zh-CN" : requestedLocale.toLowerCase() === "zh-hk" ? "zh-HK" : "en";
  const section = segments[1] ?? "introduction";
  const languages = docsConfig.navigation.languages as LanguageNav[];
  const language = languages.find((entry) => entry.language === locale) ?? languages[0];
  const tab = language.tabs.find((entry) => (sectionForTab[entry.tab] ?? []).includes(section)) ?? language.tabs[0];
  const entries = await getCollection("docs");
  const titleById = new Map(entries.map((entry) => [entry.id.toLowerCase().replace(/\.(md|mdx)$/, ""), entry.data.title]));
  const current = pathname.replace(/\/$/, "");

  const convert = (node: PageNode): SidebarItem => {
    if (typeof node !== "string") {
      return { type: "group", label: node.group, collapsed: false, order: 0, children: node.pages.map(convert) };
    }
    const isOperation = /^[A-Z]+\s+\//.test(node);
    const href = isOperation ? operationHref(locale, node) : `/${node.replace(/^\//, "")}/`;
    const id = node.toLowerCase().replace(/^\//, "");
    const fallback = node.split("/").filter(Boolean).at(-1)?.replace(/[-_]/g, " ") ?? node;
    return {
      type: "link",
      label: isOperation ? node : (titleById.get(id) ?? fallback),
      href,
      isCurrent: current === href.replace(/\/$/, ""),
      order: 0,
    };
  };

  return tab.groups.map((group) => ({
    type: "group",
    label: group.group,
    collapsed: false,
    order: 0,
    children: group.pages.map(convert),
  }));
}
