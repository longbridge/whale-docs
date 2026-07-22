import { useEffect, useState } from "react"
import { CheckIcon, ChevronDownIcon, LanguagesIcon, LaptopIcon, MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@components/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@components/components/ui/dropdown-menu"

type Theme = "auto" | "light" | "dark"
type LanguageOption = { label: string; href: string; active: boolean }

type Props =
  | { kind: "language"; label: string; options: LanguageOption[] }
  | { kind: "appearance"; label: string; autoLabel: string; lightLabel: string; darkLabel: string }

function storedTheme(): Theme {
  const value = localStorage.getItem("starlight-theme")
  return value === "light" || value === "dark" ? value : "auto"
}

function applyTheme(theme: Theme) {
  const resolved = theme === "auto"
    ? matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
    : theme
  document.documentElement.dataset.theme = resolved
  localStorage.setItem("starlight-theme", theme === "auto" ? "" : theme)
}

export function HeaderMenu(props: Props) {
  const [theme, setTheme] = useState<Theme>("auto")

  useEffect(() => {
    if (props.kind !== "appearance") return
    const current = storedTheme()
    setTheme(current)
    applyTheme(current)
  }, [props.kind])

  if (props.kind === "language") {
    const current = props.options.find((option) => option.active) ?? props.options[0]
    return (
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="sm" className="whale-header-menu-trigger" />}>
          <LanguagesIcon data-icon="inline-start" />
          {current.label}
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-44">
          <DropdownMenuLabel>{props.label}</DropdownMenuLabel>
          <DropdownMenuGroup>
            {props.options.map((option) => (
              <DropdownMenuItem key={option.href} onClick={() => { window.location.href = option.href }}>
                <span className="flex-1">{option.label}</span>
                {option.active ? <CheckIcon /> : null}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  const choices = [
    { value: "light" as const, label: props.lightLabel, icon: SunIcon },
    { value: "dark" as const, label: props.darkLabel, icon: MoonIcon },
    { value: "auto" as const, label: props.autoLabel, icon: LaptopIcon },
  ]
  const CurrentIcon = choices.find((choice) => choice.value === theme)?.icon ?? LaptopIcon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon-sm" className="whale-appearance-trigger" aria-label={props.label} />}
      >
        <CurrentIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel>{props.label}</DropdownMenuLabel>
        <DropdownMenuGroup>
          {choices.map(({ value, label, icon: Icon }) => (
            <DropdownMenuItem key={value} onClick={() => { setTheme(value); applyTheme(value) }}>
              <Icon />
              <span className="flex-1">{label}</span>
              {theme === value ? <CheckIcon /> : null}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
