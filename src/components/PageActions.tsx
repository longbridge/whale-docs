import { useState } from "react"
import { CheckIcon, ChevronDownIcon, CopyIcon, LinkIcon } from "lucide-react"

import { Button } from "@components/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/components/ui/dropdown-menu"

type Props = {
  copyLabel: string
  copiedLabel: string
  failedLabel: string
  copyLinkLabel: string
  moreLabel: string
}

export function PageActions({
  copyLabel,
  copiedLabel,
  failedLabel,
  copyLinkLabel,
  moreLabel,
}: Props) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle")

  async function copyPage() {
    const content = document.querySelector<HTMLElement>(".sl-markdown-content")?.innerText.trim()
    try {
      await navigator.clipboard.writeText(content || window.location.href)
      setStatus("copied")
    } catch {
      setStatus("failed")
    }
    window.setTimeout(() => setStatus("idle"), 1200)
  }

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href)
  }

  const label = status === "copied" ? copiedLabel : status === "failed" ? failedLabel : copyLabel

  return (
    <div className="flex shrink-0 items-center" data-slot="button-group">
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="rounded-r-none"
        onClick={copyPage}
      >
        {status === "copied" ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
        {label}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="-ml-px rounded-l-none"
              aria-label={moreLabel}
            />
          }
        >
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={copyLink}>
              <LinkIcon />
              {copyLinkLabel}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
