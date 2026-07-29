import { useState } from "react"
import { CheckIcon, CopyIcon, DownloadIcon } from "lucide-react"

import { Button } from "@components/components/ui/button"
import { ButtonGroup } from "@components/components/ui/button-group"
import { Frame, FrameHeader, FramePanel, FrameTitle } from "@components/reui/frame"

type Props = {
  title: string
  descriptionBefore: string
  descriptionAfter: string
  endpoint: string
  copyLabel: string
  copiedLabel: string
  detail: { label: string; href: string }
  records: { label: string; href: string }
  downloads: { label: string; href: string }
}

export function DatasetExportCard({
  title,
  descriptionBefore,
  descriptionAfter,
  endpoint,
  copyLabel,
  copiedLabel,
  detail,
  records,
  downloads,
}: Props) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(endpoint)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className="mt-6 min-w-0 w-full max-w-full">
      <Frame spacing="xs" className="min-w-0 w-full max-w-full">
        <FrameHeader className="min-h-8 flex-row items-center gap-3">
          <FrameTitle className="flex items-center gap-1.5 text-xs">
            <DownloadIcon className="size-3.5" />
            {title}
          </FrameTitle>
        </FrameHeader>
        <FramePanel fit>
          <p className="m-0 text-sm text-muted-foreground">
            {descriptionBefore}
            <code>filters</code>
            {descriptionAfter}
          </p>

          <div className="api-operation-heading mt-3 mb-0">
            <span className="api-method api-method-post">POST</span>
            <code>{endpoint}</code>
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              aria-label={copied ? copiedLabel : copyLabel}
              onClick={copy}
            >
              {copied ? <CheckIcon className="text-success" /> : <CopyIcon />}
            </Button>
          </div>

          <ButtonGroup className="mt-3" aria-label={title}>
            <Button variant="outline" size="sm" render={<a href={detail.href} />}>
              {detail.label}
            </Button>
            <Button variant="outline" size="sm" render={<a href={records.href} />}>
              {records.label}
            </Button>
            <Button variant="outline" size="sm" render={<a href={downloads.href} />}>
              {downloads.label}
            </Button>
          </ButtonGroup>
        </FramePanel>
      </Frame>
    </div>
  )
}
