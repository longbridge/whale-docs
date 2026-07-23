import type { ComponentType } from "react"
import { BellIcon, BookOpenIcon, BracesIcon, CircleGaugeIcon, LifeBuoyIcon, Settings2Icon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@components/components/ui/collapsible"

export type DocsSidebarEntry =
  | { type: "link"; label: string; href: string }
  | { type: "group"; label: string; entries: DocsSidebarEntry[]; collapsed?: boolean }

type Props = {
  entries: DocsSidebarEntry[]
  pathname: string
}

function normalizePath(pathname: string) {
  return pathname.replace(/\.html$/, "").replace(/\/$/, "") || "/"
}

function containsCurrent(entry: DocsSidebarEntry, pathname: string): boolean {
  return entry.type === "link"
    ? normalizePath(entry.href) === normalizePath(pathname)
    : entry.entries.some((child) => containsCurrent(child, pathname))
}

function groupIcon(label: string): ComponentType<{ "aria-hidden"?: boolean }> {
  if (/消息|message|push/i.test(label)) return BellIcon
  if (/运维|運維|operation|support|支持/i.test(label)) return Settings2Icon
  if (/api|接口/i.test(label)) return BracesIcon
  if (/指南|guide|get started/i.test(label)) return BookOpenIcon
  if (/概览|概覽|overview/i.test(label)) return CircleGaugeIcon
  return LifeBuoyIcon
}

function SidebarEntry({ entry, pathname, depth = 0 }: { entry: DocsSidebarEntry; pathname: string; depth?: number }) {
  if (entry.type === "link") {
    const current = normalizePath(entry.href) === normalizePath(pathname)
    return (
      <li>
        <a data-nb-sidebar-link href={entry.href} aria-current={current ? "page" : undefined}>{entry.label}</a>
      </li>
    )
  }

  const Icon = groupIcon(entry.label)
  const keepOpen = /用户、账户与 API|用戶、帳戶與 API|Users, Accounts and API/i.test(entry.label)
  const defaultOpen = containsCurrent(entry, pathname) || keepOpen || !entry.collapsed

  return (
    <li className="whale-sidebar-group">
      {depth === 0 ? (
        <div data-nb-sidebar-group>
          <div data-nb-sidebar-group-label data-nb-active={containsCurrent(entry, pathname) ? "" : undefined}>
            <span data-nb-sidebar-group-text><Icon aria-hidden />{entry.label}</span>
          </div>
          <ul data-nb-sidebar-sublist>{entry.entries.map((child) => <SidebarEntry key={`${child.type}-${child.label}`} entry={child} pathname={pathname} depth={depth + 1} />)}</ul>
        </div>
      ) : (
        <Collapsible defaultOpen={defaultOpen} data-nb-sidebar-group>
          <CollapsibleTrigger data-nb-sidebar-group-label data-nb-active={containsCurrent(entry, pathname) ? "" : undefined}>
            <span data-nb-sidebar-group-text>{entry.label}</span>
            <span data-nb-caret aria-hidden="true" />
          </CollapsibleTrigger>
          <CollapsibleContent data-nb-collapsible-content>
            <ul data-nb-sidebar-sublist>{entry.entries.map((child) => <SidebarEntry key={`${child.type}-${child.label}`} entry={child} pathname={pathname} depth={depth + 1} />)}</ul>
          </CollapsibleContent>
        </Collapsible>
      )}
    </li>
  )
}

export function DocsSidebar({ entries, pathname }: Props) {
  return <div data-nb-sidebar><ul className="top-level flex list-none flex-col gap-0.5 p-0">{entries.map((entry) => <SidebarEntry key={`${entry.type}-${entry.label}`} entry={entry} pathname={pathname} />)}</ul></div>
}
