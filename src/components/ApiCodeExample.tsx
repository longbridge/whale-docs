import { useEffect, useRef, useState } from "react"
import { CheckIcon, ChevronDownIcon, CopyIcon, EyeIcon, EyeOffIcon, KeyRoundIcon } from "lucide-react"

import { Button } from "@components/components/ui/button"
import { Input } from "@components/components/ui/input"
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

type TokenLabels = {
  button: string
  set: string
  title: string
  placeholder: string
  save: string
  clear: string
  show: string
  hide: string
  hint: string
}

const TOKEN_PLACEHOLDER = "<token>"
const TOKEN_PLACEHOLDER_HTML = "&lt;token&gt;"

function maskToken(token: string): string {
  return token.length > 18 ? `${token.slice(0, 8)}…${token.slice(-6)}` : token
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
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
  /**
   * Host that the example `code`/`html` were rendered with. When provided together
   * with `prodHost`/`testHost`, the panel swaps this host for the one chosen by the
   * page's server switcher (synced via the `api-host-change` event + localStorage),
   * so both the displayed and copied code follow the toggle.
   */
  baseHost?: string
  prodHost?: string
  testHost?: string
  defaultEnv?: string
  /** Localized strings for the Bearer-token control. When omitted the control is hidden. */
  tokenLabels?: TokenLabels
}

function TokenControl({ token, setToken, labels }: { token: string; setToken: (t: string) => void; labels: TokenLabels }) {
  const [open, setOpen] = useState(false)
  const [reveal, setReveal] = useState(false)
  const [draft, setDraft] = useState(token)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => setDraft(token), [token])
  useEffect(() => {
    if (!open) return
    const onDoc = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [open])
  return (
    <div ref={ref} className="relative">
      <Button
        type="button"
        variant="ghost"
        size="xs"
        className="gap-1 font-mono text-muted-foreground"
        onClick={() => setOpen((value) => !value)}
        title={labels.button}
      >
        <KeyRoundIcon className="size-3" />
        {token ? maskToken(token) : labels.set}
      </Button>
      {open ? (
        <div className="absolute right-0 top-full z-50 mt-1 w-72 rounded-xl bg-card p-3 text-foreground shadow-lg ring-1 ring-border">
          <div className="mb-1.5 text-xs font-medium">{labels.title}</div>
          <div className="flex items-center gap-1">
            <Input
              type={reveal ? "text" : "password"}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={labels.placeholder}
              className="h-7 font-mono text-xs"
              autoComplete="off"
              spellCheck={false}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              aria-label={reveal ? labels.hide : labels.show}
              onClick={() => setReveal((value) => !value)}
            >
              {reveal ? <EyeOffIcon className="size-3.5" /> : <EyeIcon className="size-3.5" />}
            </Button>
          </div>
          <p className="mt-1.5 text-[0.6875rem] leading-tight text-muted-foreground">{labels.hint}</p>
          <div className="mt-2 flex justify-end gap-1.5">
            <Button type="button" variant="ghost" size="xs" onClick={() => { setToken(""); setDraft(""); setOpen(false) }}>
              {labels.clear}
            </Button>
            <Button type="button" size="xs" onClick={() => { setToken(draft.trim()); setOpen(false) }}>
              {labels.save}
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function CodeCard({
  title,
  examples,
  copyLabel,
  selectedId,
  setSelectedId,
  token,
  setToken,
  tokenLabels,
}: {
  title: string
  examples: CodeExample[]
  copyLabel: string
  selectedId: CodeExample["id"]
  setSelectedId: (id: CodeExample["id"]) => void
  token: string
  setToken: (t: string) => void
  tokenLabels?: TokenLabels
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
            {tokenLabels ? <TokenControl token={token} setToken={setToken} labels={tokenLabels} /> : null}
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

export function ApiCodeExample({ requestTitle, responseTitle, examples, responses, responsesById, copyLabel, baseHost, prodHost, testHost, defaultEnv, tokenLabels }: Props) {
  const [selectedId, setSelectedId] = useState<CodeExample["id"]>(examples[0]?.id ?? "")
  const [host, setHost] = useState<string>(baseHost ?? "")
  const [token, setTokenState] = useState("")
  useEffect(() => {
    if (!baseHost || !prodHost || !testHost) return
    const resolve = () => {
      let env = defaultEnv ?? "prod"
      try {
        const saved = localStorage.getItem("api-host-env")
        if (saved) env = saved
      } catch {}
      return env === "test" ? testHost : prodHost
    }
    setHost(resolve())
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent).detail
      if (detail?.host) setHost(detail.host)
    }
    window.addEventListener("api-host-change", onChange)
    return () => window.removeEventListener("api-host-change", onChange)
  }, [baseHost, prodHost, testHost, defaultEnv])
  useEffect(() => {
    try {
      const saved = localStorage.getItem("api-bearer-token")
      if (saved) setTokenState(saved)
    } catch {}
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent).detail
      if (typeof detail?.token === "string") setTokenState(detail.token)
    }
    window.addEventListener("api-token-change", onChange)
    return () => window.removeEventListener("api-token-change", onChange)
  }, [])
  const setToken = (value: string) => {
    setTokenState(value)
    try {
      if (value) localStorage.setItem("api-bearer-token", value)
      else localStorage.removeItem("api-bearer-token")
    } catch {}
    window.dispatchEvent(new CustomEvent("api-token-change", { detail: { token: value } }))
  }
  const swapHost = (value: string) => (baseHost && host && host !== baseHost ? value.split(baseHost).join(host) : value)
  const trimmed = token.trim()
  // Displayed code (html) shows the masked token; copied code (code) carries the full token.
  const swapCode = (value: string) => (trimmed ? swapHost(value).split(TOKEN_PLACEHOLDER).join(trimmed) : swapHost(value))
  const swapHtml = (value: string) => (trimmed ? swapHost(value).split(TOKEN_PLACEHOLDER_HTML).join(escapeHtml(maskToken(trimmed))) : swapHost(value))
  const shownExamples = examples.map((example) => ({ ...example, code: swapCode(example.code), html: swapHtml(example.html) }))
  const shown = responsesById?.[selectedId] ?? responses

  return (
    <TooltipProvider>
      <div data-slot="api-code-examples" className="grid min-w-0 w-full max-w-full gap-6">
        <CodeCard
          title={requestTitle}
          examples={shownExamples}
          copyLabel={copyLabel}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          token={token}
          setToken={setToken}
          tokenLabels={tokenLabels}
        />
        <ResponseCard key={selectedId} title={responseTitle} responses={shown} copyLabel={copyLabel} />
      </div>
    </TooltipProvider>
  )
}
