import { BotIcon, ChevronDownIcon, FileTextIcon, SparklesIcon } from "lucide-react"

import { Button } from "@components/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/components/ui/dropdown-menu"

type Props = {
  locale: "en" | "zh-CN" | "zh-HK"
}

export function PageActionsMenu({ locale }: Props) {
  const labels = locale === "en"
    ? { more: "More actions", view: "View as Markdown", chatgpt: "Open in ChatGPT", claude: "Open in Claude" }
    : locale === "zh-CN"
      ? { more: "更多操作", view: "以 Markdown 查看", chatgpt: "在 ChatGPT 中打开", claude: "在 Claude 中打开" }
      : { more: "更多操作", view: "以 Markdown 查看", chatgpt: "在 ChatGPT 中開啟", claude: "在 Claude 中開啟" }

  const pageUrl = typeof window === "undefined" ? "" : window.location.href
  const markdownUrl = pageUrl ? `${pageUrl.replace(/\/$/, "")}.md` : ""
  const prompt = `Read this documentation page and help me understand it: ${markdownUrl}`

  const open = (href: string) => window.open(href, "_blank", "noopener,noreferrer")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={labels.more}
        render={<Button variant="outline" size="icon-sm" className="-ml-px size-8 rounded-l-none rounded-r-md border-border bg-card shadow-none" />}
      >
        <ChevronDownIcon className="size-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={6} className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => open(markdownUrl)}>
            <FileTextIcon />
            <span>{labels.view}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => open(`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`)}>
            <BotIcon />
            <span>{labels.chatgpt}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => open(`https://claude.ai/new?q=${encodeURIComponent(prompt)}`)}>
            <SparklesIcon />
            <span>{labels.claude}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
