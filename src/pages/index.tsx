import { HeaderHome } from "@/components/Header/HeaderHome";
import { InvoiceItem } from "@/components/Invoice/Item";

export default function Home() {
  return (
    <main className="container mx-auto px-6 mt-8 md:mt-16 lg:mt-20">
      <HeaderHome
        filterStatus="all"
        invoices={1}
      />
      <ul className="flex flex-col gap-4 mt-8 md:mt-[55px] lg:mt-16">
        <InvoiceItem 
          client="Jensen Huang"
          data="Due  19 Aug 2021"
          identifier="RT3080"
          status="paid"
          total="£ 1,800.90"
        />
        <InvoiceItem 
          client="Jensen Huang"
          data="Due  19 Aug 2021"
          identifier="RT3080"
          status="draft"
          total="£ 1,800.90"
        />
        <InvoiceItem 
          client="Jensen Huang"
          data="Due  19 Aug 2021"
          identifier="RT3080"
          status="pending"
          total="£ 1,800.90"
        />
      </ul>
    </main>
  )
}
