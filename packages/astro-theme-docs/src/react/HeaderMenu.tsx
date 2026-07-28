import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type LanguageOption = { label: string; href: string; active: boolean }

export function HeaderMenu({ options }: { options: LanguageOption[] }) {
  const current = options.find((option) => option.active) ?? options[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-foreground/[0.07] hover:text-foreground aria-expanded:bg-foreground/[0.07] data-popup-open:bg-foreground/[0.07]" />}
      >
        {current.label}
        <ChevronDownIcon data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={8} className="w-40">
        <DropdownMenuGroup>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.href}
              className="min-h-9 px-2.5"
              onClick={() => { window.location.href = option.href }}
            >
              <span className="flex-1">{option.label}</span>
              {option.active ? <CheckIcon className="text-primary" /> : null}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
