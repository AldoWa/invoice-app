import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        default: '',
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props}, ref) => {
    return <button
      ref={ref}
      className={cn(buttonVariants({ className, size, variant }))}
      {...props}
    >Click me</button>
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }