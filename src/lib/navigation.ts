import docsConfig from '../../docs.json';
import { createOpenAPISidebarGroup } from 'starlight-openapi';

type NavGroup = {
  group: string;
  pages?: Array<string | NavGroup>;
  openapi?: unknown;
};

type NavTab = {
  tab: string;
  href?: string;
  groups?: NavGroup[];
};

type SidebarItem =
  | string
  | { label: string; link: string; translations?: Record<string, string> }
  | { label: string; items: SidebarItem[]; collapsed?: boolean; translations?: Record<string, string> };

const languages = docsConfig.navigation.languages;
const byLanguage = Object.fromEntries(languages.map((entry) => [entry.language, entry]));
const languageTags: Record<string, string> = { cn: 'zh-CN', 'zh-Hant': 'zh-HK' };

function translationsAt(tabIndex: number, groupPath: number[]) {
  const translations: Record<string, string> = {};
  for (const [locale, lang] of Object.entries(languageTags)) {
    let current: NavTab | NavGroup | undefined = byLanguage[locale]?.tabs?.[tabIndex] as NavTab | undefined;
    for (const index of groupPath) {
      const children = current && 'groups' in current ? current.groups : (current as NavGroup | undefined)?.pages;
      current = children?.[index] as NavGroup | undefined;
    }
    if (current && 'group' in current) translations[lang] = current.group;
  }
  return translations;
}

function convertGroup(group: NavGroup, tabIndex: number, path: number[]): SidebarItem | undefined {
  if (group.openapi) return undefined;
  const items = (group.pages ?? []).flatMap((item, index) => {
    if (typeof item === 'string') {
      if (/^(GET|POST|PUT|PATCH|DELETE)\s/.test(item)) return [];
      return [item.replace(/^en\//, '')];
    }
    const converted = convertGroup(item, tabIndex, [...path, index]);
    return converted ? [converted] : [];
  });
  if (items.length === 0) return undefined;
  return {
    label: group.group,
    translations: translationsAt(tabIndex, path),
    collapsed: path.length > 1,
    items,
  };
}

export const apiSidebarPlaceholder = createOpenAPISidebarGroup();

export function buildSidebar(): SidebarItem[] {
  const englishTabs = byLanguage.en.tabs as NavTab[];
  return englishTabs.map((tab, tabIndex) => {
    if (tab.href) {
      return {
        label: tab.tab,
        link: tab.href,
      };
    }

    const items = (tab.groups ?? []).flatMap((group, groupIndex) => {
      const converted = convertGroup(group, tabIndex, [groupIndex]);
      return converted ? [converted] : [];
    });

    if (tab.tab === 'BrokerAPI') {
      const insertAt = Math.min(2, items.length);
      items.splice(insertAt, 0, apiSidebarPlaceholder as SidebarItem);
    }

    const translations: Record<string, string> = {};
    for (const [locale, lang] of Object.entries(languageTags)) {
      translations[lang] = byLanguage[locale].tabs[tabIndex].tab;
    }

    return {
      label: tab.tab,
      translations,
      collapsed: false,
      items,
    };
  });
}
