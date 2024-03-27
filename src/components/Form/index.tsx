import { Button } from "../Button"
import { BillFrom } from "./BillFrom"
import { BillTo } from "./BillTo"
import { DetailsInvoice } from "./DetailsInvoice"
import { ItemList } from "./ItemList"

type FormProps = {
  onDiscard: () => void;
}


function Form({ onDiscard }: FormProps){
  return (
    <form className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-8">
        <BillTo></BillTo>
        <BillFrom></BillFrom>
        <DetailsInvoice></DetailsInvoice>
        <ItemList></ItemList>
      </div>
      <footer className="mt-10 flex justify-between pb-6">
        <Button variant='edit' type="button" onClick={onDiscard}>Discard</Button>
        <div className="flex gap-2">
          <Button variant='draft' type="submit">Save as Draft</Button>
          <Button variant='default' type="submit">Save & Send</Button>
        </div>
      </footer>
    </form>
  )
}

export { Form }