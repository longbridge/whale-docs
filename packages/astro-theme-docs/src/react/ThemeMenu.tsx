import { useEffect, useState } from "react"
import { CheckIcon, MonitorIcon, MoonIcon, SunIcon } from "lucide-react"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type Pref = "light" | "dark" | "auto"

declare global {
  interface Window {
    __nbApplyTheme?: () => void
  }
}

const OPTIONS: { value: Pref; label: string; Icon: typeof SunIcon }[] = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
  { value: "auto", label: "System", Icon: MonitorIcon },
]

function readPref(): Pref {
  try {
    const v = localStorage.getItem("ui-mode")
    if (v === "light" || v === "dark" || v === "auto") return v
  } catch {
    // Ignore storage errors (private mode / restricted contexts).
  }
  return "auto"
}

export function ThemeMenu() {
  // Preference is client-only; default to "auto" for the SSR/first paint, then
  // reconcile with the stored value after mount. BaseLayout's pre-paint script
  // already applied the correct theme to <html>, so only this control's own
  // icon/checkmark reconcile here — the page never flashes.
  const [pref, setPref] = useState<Pref>("auto")
  useEffect(() => {
    setPref(readPref())
  }, [])

  function choose(next: Pref) {
    try {
      localStorage.setItem("ui-mode", next)
      // Dual-write so a rollback to the Starlight build keeps the preference.
      localStorage.setItem("starlight-theme", next)
    } catch {
      // Ignore storage errors (private mode / restricted contexts).
    }
    setPref(next)
    window.__nbApplyTheme?.()
  }

  const CurrentIcon = (OPTIONS.find((o) => o.value === pref) ?? OPTIONS[2]).Icon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="text-muted-foreground hover:bg-foreground/[0.07] hover:text-foreground aria-expanded:bg-foreground/[0.07] data-popup-open:bg-foreground/[0.07] size-9 rounded-lg"
          />
        }
      >
        <CurrentIcon className="size-[1.125rem]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-36">
        <DropdownMenuGroup>
          {OPTIONS.map(({ value, label, Icon }) => (
            <DropdownMenuItem
              key={value}
              className="min-h-9 px-2.5"
              onClick={() => choose(value)}
            >
              <Icon className="text-muted-foreground size-4" />
              <span className="flex-1">{label}</span>
              {pref === value ? <CheckIcon className="text-primary size-4" /> : null}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
