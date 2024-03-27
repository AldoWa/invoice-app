import { Input } from "../Input"
import { InputContainer } from "./InputContainer"

const BillFrom = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-invoice-01 font-bold text-[0.9375rem] leading-[0.9375rem] tracking-widest">Bill from</h2>
      <InputContainer label="Street Address" id="street">
        <Input id="street"/>
      </InputContainer>
      
      <div className="flex flex-col md:flex-row gap-6">
        <InputContainer label="City" id="city">
          <Input id="city"/>
        </InputContainer>
        <InputContainer label="Post Code" id="post-code">
          <Input id="post-code"/>
        </InputContainer>
        <InputContainer label="Country" id="country">
          <Input id="country"/>
        </InputContainer>
      </div>
    </div>
  )
}

export { BillFrom }