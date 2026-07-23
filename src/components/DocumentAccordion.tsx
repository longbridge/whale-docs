import type { ReactNode } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/components/ui/accordion"

type Props = {
  title: string
  open?: boolean
  children?: ReactNode
}

export function DocumentAccordion({ title, open = false, children }: Props) {
  return (
    <Accordion defaultValue={open ? ["content"] : []} className="doc-accordion">
      <AccordionItem value="content" className="rounded-lg border px-3 not-last:border-b">
        <AccordionTrigger className="py-3 hover:no-underline">{title}</AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-4">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
