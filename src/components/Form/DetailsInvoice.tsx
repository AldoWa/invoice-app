import { DateComponent } from "../DataPicker"
import { Input } from "../Input"
import { Select } from "../Select"
import { InputContainer } from "./InputContainer"

const DetailsInvoice = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <InputContainer id="invoice-date" label="Invoice Date" className="flex-1">
          <DateComponent onChange={() => {}} id="invoice-date"/>
        </InputContainer>
        <InputContainer id="payment-terms" label="Payment Terms" className="flex-1">
          <Select 
            options={[
              {
                value: '1',
                label: 'Net 1 Day'
              },
              {
                value: '7',
                label: 'Net 7 Days'
              },
              {
                value: '14',
                label: 'Net 14 Days'
              },
              {
                value: '30',
                label: 'Net 30 Days'
              }
            ]}
          />
        </InputContainer>
      </div>
      <InputContainer id="project-description" label="Project Description">
        <Input
          id="project-description"
        ></Input>
      </InputContainer>
    </div>
  )
}

export { DetailsInvoice }