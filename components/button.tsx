import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ButtonProps {
  children?: ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
  asChild?: boolean
}

const buttonVariants = {
  default: "bg-brand-blue text-white hover:bg-brand-blue/90",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-brand-blue text-brand-blue hover:bg-brand-blue/10",
  ghost: "text-brand-blue hover:bg-brand-blue/10",
}

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export default function Button({
  children,
  className,
  variant = "default",
  size = "md",
  onClick,
  asChild = false,
}: ButtonProps) {
  const Comp = asChild ? "span" : "button"
  return (
    <Comp
      className={cn(
        "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/50 disabled:cursor-not-allowed disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Comp>
  )
}

