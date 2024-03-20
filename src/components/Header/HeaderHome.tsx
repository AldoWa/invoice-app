import { Button } from "../Button"
import { Filter } from "../Filter"

interface HeaderHomeProps {
  invoices: number
  filterStatus: 'draft' | 'pending' | 'paid' | 'all'
  onClickNewInvoice: () => void
}

const filterText = {
  draft: 'draft',
  pending: 'pending',
  paid: 'paid',
  all: 'total'
}

const HeaderHome = ({ invoices, filterStatus, onClickNewInvoice }: HeaderHomeProps ) => {
  return (
    <header className="flex justify-between flex-wrap">
      <div>
        <h1 className="dark:text-white text-invoice-08 text-4xl font-bold mb-1">Invoices</h1>
        <p className="dark:text-invoice-05 text-invoice-06 tracking-tighter text-[0.8125rem] leading-[0.9375rem]">There are { invoices } {filterText[filterStatus]} { invoices >  1 ? 'invoices': 'invoice'}</p>
      </div>
      <div className="flex items-center mt-4 sm:mt-0 flex-wrap md:flex-nowrap gap-5 md:gap-10">
        <Filter onInputChange={() => {}}/>
        <Button variant='default' onClick={onClickNewInvoice}>New Invoice</Button>
      </div>
    </header>
  )
}
export { HeaderHome }