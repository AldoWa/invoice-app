import { Input } from "../Input"
import { InputContainer } from "./InputContainer"

const BillFrom = () => {
  return (
    <>
      <h2 className="mb-6 text-invoice-01 text-[0.9375rem] leading-[0.9375rem] tracking-widest">Bill from</h2>
      <InputContainer label="Street Address" id="street">
        <Input id="street"/>
      </InputContainer>
      
      <div className="flex gap-6 mt-6">
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
    </>
  )
}

export { BillFrom }