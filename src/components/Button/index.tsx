import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "px-6 py-3 font-bold rounded-3xl text-[0.9375rem] leading-[0.9375rem] tracking-widest h-12 transition",
  {
    variants: {
      variant: {
        default: 'bg-invoice-01 text-white hover:bg-invoice-02',
        edit: 'text-invoice-07 bg-[#F9FAFE] dark:bg-[#373B53] dark:text-invoice-05 hover:bg-[#DFE3FA] dark:hover:bg-white',
        draft: 'text-invoice-06 bg-[#373B53] dark:text-invoice-05 hover:bg-invoice-08 dark:hover:bg-invoice-03',
        delete: 'text-white bg-invoice-09 hover:bg-invoice-10',
        addNewItem: 'text-invoice-07 bg-[#DFE3FA] w-full min-w-[350px]',
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props}, ref) => {
    return <button
      ref={ref}
      className={cn(buttonVariants({ className, variant }))}
      {...props}
    />
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }