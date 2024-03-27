import { Form } from "@/components/Form";
import { HeaderHome } from "@/components/Header/HeaderHome";
import { InvoiceItem } from "@/components/Invoice/Item";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [activeModalNewInvoice, setActiveModalNewInvoice] = useState(false)
  function handleModalNewInvoice() {
    setActiveModalNewInvoice(activeModal => !activeModal)
  }
  return (
    <main className="container mx-auto px-6 mt-20 py-4 md:py-0 md:mt-24 lg:mt-20">
      <HeaderHome
        filterStatus="all"
        invoices={1}
        onClickNewInvoice={handleModalNewInvoice}
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
      <Modal activeModal={activeModalNewInvoice} closeModal={handleModalNewInvoice}>
        <Form
          onDiscard={handleModalNewInvoice}
        ></Form>
      </Modal>
    </main>
  )
}
