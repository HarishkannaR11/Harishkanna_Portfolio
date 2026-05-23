import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'accent' | 'success'
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-zinc-900 text-zinc-50 shadow dark:bg-zinc-50 dark:text-zinc-900":
            variant === "default",
          "border-transparent bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100":
            variant === "secondary",
          "border-transparent bg-red-500/10 text-red-500 dark:bg-red-500/20 dark:text-red-400":
            variant === "destructive",
          "text-zinc-950 border-zinc-200 dark:border-zinc-800 dark:text-zinc-50":
            variant === "outline",
          "border-transparent bg-cyan-500/10 text-cyan-400 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/20":
            variant === "accent",
          "border-transparent bg-emerald-500/10 text-emerald-400 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/20":
            variant === "success",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
