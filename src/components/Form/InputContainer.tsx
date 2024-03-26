import React from "react"

type InputContainerProps = {
  label: string;
  id: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const InputContainer = ({ label, id, children, ...props }: InputContainerProps) => {
  return <div {...props}>
    <label htmlFor={id}
      className="text-invoice-07 dark:text-invoice-05 block font-medium tracking-tighter text-[0.8125rem] leading-[0.9375rem] mb-2"
    >{label}</label>
    { children }
  </div>
}
  

InputContainer.displayName = "FormInput"

export { InputContainer }