import type { ReactNode } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

type Props = {
  title: string
  open?: boolean
  children?: ReactNode
}

export function DocumentAccordion({ title, open = false, children }: Props) {
  return (
    <Accordion defaultValue={open ? ["content"] : []} className="doc-accordion">
      <AccordionItem value="content" className="border-border bg-card overflow-hidden rounded-xl border px-3 not-last:border-b">
        <AccordionTrigger className="py-2.5 text-sm font-medium hover:no-underline">{title}</AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-3 leading-6">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
