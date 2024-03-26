import { BillFrom } from "./BillFrom"
import { BillTo } from "./BillTo"
import { ItemList } from "./ItemList"


function Form(){
  return (
    <form className="flex flex-col gap-8">
      <BillTo></BillTo>
      <BillFrom></BillFrom>
      <ItemList></ItemList>
    </form>
  )
}

export { Form }