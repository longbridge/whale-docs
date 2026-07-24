import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@components/lib/utils"

const alertVariants = cva(
  [
    "relative grid w-full grid-cols-[0_1fr] items-center gap-y-0.5 rounded-lg border px-3 py-2.5 text-sm",
    "has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] has-[>svg]:gap-x-2.5 [&>svg:not([class*=size-])]:size-4",
    "has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start",
    "has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5",
  ],
  {
    // ReUI's own variant colours: semantic token at /4 tint + /30 border, only
    // the icon carries the accent. `default` (Note) is the neutral card.
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground",
        info: "border-info/30 bg-info/4 [&>svg]:text-info",
        success: "border-success/30 bg-success/4 [&>svg]:text-success",
        warning: "border-warning/30 bg-warning/4 [&>svg]:text-warning",
        destructive:
          "border-destructive/30 bg-destructive/4 [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="note"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_a]:underline [&_a]:underline-offset-2 [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
