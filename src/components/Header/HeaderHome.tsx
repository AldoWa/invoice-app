import { Button } from "../Button"
import { Filter } from "../Filter"

interface HeaderHomeProps {
  invoices: number
  filterStatus: 'draft' | 'pending' | 'paid' | 'all'
}

const filterText = {
  draft: 'draft',
  pending: 'pending',
  paid: 'paid',
  all: 'total'
}

const HeaderHome = ({ invoices, filterStatus }: HeaderHomeProps ) => {
  return (
    <header className="flex justify-between flex-wrap">
      <div>
        <h1 className="dark:text-white text-invoice-08 text-4xl font-bold mb-1">Invoices</h1>
        <p className="dark:text-invoice-05 text-invoice-06 tracking-tighter text-[0.8125rem] leading-[0.9375rem]">There are { invoices } {filterText[filterStatus]} { invoices >  1 ? 'invoices': 'invoice'}</p>
      </div>
      <div className="flex items-center gap-10 mt-4 sm:mt-0">
        <Filter onInputChange={() => {}}/>
        <Button variant='default'>New Invoice</Button>
      </div>
    </header>
  )
}
export { HeaderHome }