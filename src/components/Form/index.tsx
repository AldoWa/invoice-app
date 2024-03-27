import { BillFrom } from "./BillFrom"
import { BillTo } from "./BillTo"
import { DetailsInvoice } from "./DetailsInvoice"
import { ItemList } from "./ItemList"


function Form(){
  return (
    <form className="flex flex-col gap-8">
      <BillTo></BillTo>
      <BillFrom></BillFrom>
      <DetailsInvoice></DetailsInvoice>
      <ItemList></ItemList>
    </form>
  )
}

export { Form }