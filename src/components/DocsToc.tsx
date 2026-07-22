import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react"

import { Button } from "@components/components/ui/button"
import { Separator } from "@components/components/ui/separator"
import { Scrollspy } from "@components/reui/scrollspy"

type TocItem = {
  slug: string
  text: string
  children?: TocItem[]
}

type Props = {
  items: TocItem[]
  label: string
  helpful: string
  yesLabel: string
  noLabel: string
}

function flatten(items: TocItem[], depth = 0): Array<TocItem & { depth: number }> {
  return items.flatMap((item) => [
    { ...item, depth },
    ...flatten(item.children ?? [], depth + 1),
  ])
}

export function DocsToc({ items, label, helpful, yesLabel, noLabel }: Props) {
  const flattened = flatten(items)
  return (
    <Scrollspy className="toc-container" offset={120} history={false}>
      <h2 className="text-foreground mb-2 text-sm font-semibold">{label}</h2>
      <nav className="relative" aria-label={label}>
        <ul className="m-0 flex list-none flex-col p-0">
          {flattened.map((item) => (
            <li key={item.slug}>
              <a
                href={`#${item.slug}`}
                data-scrollspy-anchor={item.slug}
                className="border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground block border-l-2 py-1.5 pl-5 text-[0.8125rem] leading-snug no-underline transition-colors duration-150 data-[active]:border-primary data-[active]:text-foreground data-[active]:font-medium"
                style={{ marginLeft: `${item.depth}rem` }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8">
        <Separator />
        <span className="text-muted-foreground mt-4 mb-2.5 block text-xs font-medium">{helpful}</span>
        <div className="flex gap-2">
          <Button type="button" variant="outline" size="icon-sm" aria-label={yesLabel}>
            <ThumbsUpIcon />
          </Button>
          <Button type="button" variant="outline" size="icon-sm" aria-label={noLabel}>
            <ThumbsDownIcon />
          </Button>
        </div>
      </div>
    </Scrollspy>
  )
}
