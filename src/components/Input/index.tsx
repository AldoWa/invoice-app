import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[53px] w-full rounded-[4px] border border-invoice-05 bg-white px-5 pt-[18px] pb-[15px] focus:outline-none focus:border-invoice-02 focus:ring-1 focus:ring-invoice-02 disabled:cursor-not-allowed disabled:opacity-50 text-[0.9375rem] leading-[0.9375rem] tracking-widest text-invoice-08 font-bold dark:bg-invoice-03 dark:border-invoice-04 dark:text-white",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
