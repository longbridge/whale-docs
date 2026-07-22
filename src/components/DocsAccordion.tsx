import type { ReactNode } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/components/ui/accordion"

type Props = {
  title: string
  children: ReactNode
}

export function DocsAccordion({ title, children }: Props) {
  return (
    <Accordion className="whale-accordion">
      <AccordionItem value={title}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
