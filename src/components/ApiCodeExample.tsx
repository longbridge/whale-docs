import { useState } from "react"
import { CheckIcon, ChevronDownIcon, CopyIcon } from "lucide-react"

import { Button } from "@components/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@components/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/components/ui/dropdown-menu"
import { Frame, FrameHeader, FramePanel, FrameTitle } from "@components/reui/frame"

type CodeExample = {
  id: string
  label: string
  code: string
  html: string
}

type ResponseExample = {
  status: string
  contentType?: string
  code: string
  html: string
}

type Props = {
  requestTitle: string
  responseTitle: string
  examples: CodeExample[]
  responses: ResponseExample[]
  /**
   * Per-language response examples, keyed by `CodeExample["id"]`. A language listed
   * here shows its own payload instead of `responses` — the Web SDK unwraps the
   * `{ code, message, data }` envelope, so its example is the `data` alone.
   */
  responsesById?: Record<string, ResponseExample[]>
  copyLabel: string
}

function CodeCard({
  title,
  examples,
  copyLabel,
  selectedId,
  setSelectedId,
}: {
  title: string
  examples: CodeExample[]
  copyLabel: string
  selectedId: CodeExample["id"]
  setSelectedId: (id: CodeExample["id"]) => void
}) {
  const [copied, setCopied] = useState(false)
  const selected = examples.find((example) => example.id === selectedId) ?? examples[0]

  const copy = async () => {
    if (!selected) return
    await navigator.clipboard.writeText(selected.code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  if (!selected) return null

  return (
    <Collapsible defaultOpen className="group/api-code-card min-w-0 w-full max-w-full">
      <Frame spacing="xs" className="min-w-0 w-full max-w-full">
        <FrameHeader className="min-h-8 flex-row items-center justify-between gap-3">
          <FrameTitle>{title}</FrameTitle>
          <div className="flex items-center gap-1">
            {examples.length > 1 ? (
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={<Button variant="ghost" size="xs" className="font-mono text-muted-foreground" />}
                >
                  {selected.label}
                  <ChevronDownIcon data-icon="inline-end" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={5} className="min-w-28">
                  <DropdownMenuGroup>
                    {examples.map((example) => (
                      <DropdownMenuItem key={example.id} onClick={() => setSelectedId(example.id)} className="font-mono text-xs">
                        <span className="flex-1">{example.label}</span>
                        {example.id === selected.id ? <CheckIcon data-icon="inline-end" className="text-primary" /> : null}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
            <Tooltip>
              <TooltipTrigger render={<Button type="button" variant="ghost" size="icon-xs" aria-label={copyLabel} onClick={copy} />}>
                {copied ? <CheckIcon className="text-success" /> : <CopyIcon />}
              </TooltipTrigger>
              <TooltipContent>{copyLabel}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <CollapsibleTrigger
                    aria-label={`${title} toggle`}
                    render={<Button type="button" variant="ghost" size="icon-xs" />}
                  />
                }
              >
                <ChevronDownIcon className="transition-transform group-data-open/api-code-card:rotate-180" />
              </TooltipTrigger>
              <TooltipContent>{title}</TooltipContent>
            </Tooltip>
          </div>
        </FrameHeader>
        <CollapsibleContent className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up">
          <FramePanel fit className="p-0">
            <div key={selected.id} className="min-w-0 w-full max-w-full" dangerouslySetInnerHTML={{ __html: selected.html }} />
          </FramePanel>
        </CollapsibleContent>
      </Frame>
    </Collapsible>
  )
}

function ResponseCard({ title, responses, copyLabel }: { title: string; responses: ResponseExample[]; copyLabel: string }) {
  const [selectedKey, setSelectedKey] = useState(`${responses[0]?.status}-${responses[0]?.contentType ?? "response"}`)
  const [copied, setCopied] = useState(false)
  const selected = responses.find((response) => `${response.status}-${response.contentType ?? "response"}` === selectedKey) ?? responses[0]

  if (!selected) return null

  const copy = async () => {
    await navigator.clipboard.writeText(selected.code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <Collapsible defaultOpen className="group/api-response-card min-w-0 w-full max-w-full">
      <Frame spacing="xs" className="min-w-0 w-full max-w-full">
        <FrameHeader className="min-h-8 flex-row items-center justify-between gap-3">
          <FrameTitle>{title}</FrameTitle>
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger render={<Button type="button" variant="ghost" size="icon-xs" aria-label={copyLabel} onClick={copy} />}>
                {copied ? <CheckIcon className="text-success" /> : <CopyIcon />}
              </TooltipTrigger>
              <TooltipContent>{copyLabel}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <CollapsibleTrigger
                    aria-label={`${title} toggle`}
                    render={<Button type="button" variant="ghost" size="icon-xs" />}
                  />
                }
              >
                <ChevronDownIcon className="transition-transform group-data-open/api-response-card:rotate-180" />
              </TooltipTrigger>
              <TooltipContent>{title}</TooltipContent>
            </Tooltip>
          </div>
        </FrameHeader>
        <CollapsibleContent className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up">
          <FramePanel fit className="p-0">
            {responses.length === 1 ? (
              <div className="min-w-0 w-full max-w-full" dangerouslySetInnerHTML={{ __html: selected.html }} />
            ) : (
              <Tabs value={selectedKey} onValueChange={setSelectedKey} className="min-w-0 w-full max-w-full gap-0 overflow-hidden">
                <TabsList variant="line" className="mx-3 h-8">
                  {responses.map((response) => {
                    const key = `${response.status}-${response.contentType ?? "response"}`
                    return <TabsTrigger key={key} value={key} className="font-mono text-xs">{response.status}</TabsTrigger>
                  })}
                </TabsList>
                {responses.map((response) => {
                  const key = `${response.status}-${response.contentType ?? "response"}`
                  return (
                    <TabsContent key={key} value={key} className="min-w-0 w-full max-w-full overflow-hidden">
                      <div className="min-w-0 w-full max-w-full" dangerouslySetInnerHTML={{ __html: response.html }} />
                    </TabsContent>
                  )
                })}
              </Tabs>
            )}
          </FramePanel>
        </CollapsibleContent>
      </Frame>
    </Collapsible>
  )
}

export function ApiCodeExample({ requestTitle, responseTitle, examples, responses, responsesById, copyLabel }: Props) {
  const [selectedId, setSelectedId] = useState<CodeExample["id"]>(examples[0]?.id ?? "")
  const shown = responsesById?.[selectedId] ?? responses

  return (
    <TooltipProvider>
      <div data-slot="api-code-examples" className="grid min-w-0 w-full max-w-full gap-6">
        <CodeCard
          title={requestTitle}
          examples={examples}
          copyLabel={copyLabel}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <ResponseCard key={selectedId} title={responseTitle} responses={shown} copyLabel={copyLabel} />
      </div>
    </TooltipProvider>
  )
}
