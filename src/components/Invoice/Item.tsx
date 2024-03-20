import RightArrow from "@/assets/icon-arrow-right.svg";
import {  colorsWithOpacityByStatus, colorByStatus, textColorByStatus } from "@/lib/colors";
import Image from "next/image";

type Status = "paid" | "pending" | "draft"

type InvoiceProps = {
  identifier: string;
  data: string;
  client: string;
  total: string;
  status: Status;
};

const StatusPaid = () => {
  return (
    <div className={`md:mr-5 py-4 px-[30px] flex items-center bg-[#33D69F]/[.18] rounded-md`} >
      <div className={`w-2 h-2 bg-[#33D69F] rounded-full mr-2`}></div>
      <span className={`text-[0.9375rem] leading-[0.9375rem] tracking-widest font-bold capitalize text-[#33D69F]`}>Paid</span>
    </div>
  );
}

const StatusPending = () => {
  return (
    <div className={`md:mr-5 py-4 px-[30px] flex items-center bg-[#FF8F00]/[.18] rounded-md`} >
      <div className={`w-2 h-2  bg-[#FF8F00] rounded-full mr-2`}></div>
      <span className={`text-[0.9375rem] leading-[0.9375rem] tracking-widest font-bold capitalize text-[#FF8F00]`}>Pending</span>
    </div>
  );
}

const StatusDraft = () => {
  return (
    <div className={`md:mr-5 py-4 px-[30px] flex items-center dark:bg-invoice-05/[.18] bg-[#373B53]/[.18] rounded-md`} >
      <div className={`w-2 h-2  bg-[#373B53] dark:bg-invoice-05 rounded-full mr-2`}></div>
      <span className={`text-[0.9375rem] leading-[0.9375rem] tracking-widest font-bold capitalize text-[#373B53] dark:text-invoice-05`}>Draft</span>
    </div>
  );
}

const StatusAdapter = ({ status }: { status: Status }) => {
  if(status === 'paid') {
    return <StatusPaid />
  }
  if(status === 'pending') {
    return <StatusPending />
  }
  return <StatusDraft />
}


export function InvoiceItem({
  identifier,
  data,
  client,
  total,
  status,
}: InvoiceProps) {
  return (
    <li
      className="
      list-none flex items-center justify-between
      drop-shadow-sm bg-white dark:bg-invoice-03 rounded-lg
      pr-6 pl-8 py-7
      md:max-h-[72px]
      md:flex-nowrap
      flex-wrap
      flex-col
      md:flex-row
      gap-3
      md:gap-0
  "
    >
      <div className="block">
        <span className="text-invoice-07">#</span>
        <span className="text-[0.9375rem] leading-[0.9375rem] tracking-widest font-bold text-invoice-08 dark:text-white">{identifier}</span>
      </div>
      <span
        className="font-medium tracking-tighter text-[0.8125rem] leading-[0.9375rem] text-invoice-07 dark:text-invoice-05"
      >{data}</span>
      <span
        className="font-medium tracking-tighter text-[0.8125rem] leading-[0.9375rem] text-invoice-07 dark:text-white"
      >{client}</span>
      <div className="flex items-center flex-col md:flex-row gap-3 md:gap-0">
        <span className="md:mr-10 text-invoice-08 text-[0.9375rem] leading-6 tracking-widest font-bold dark:text-white">
          {total}
        </span>
        <StatusAdapter 
          status={status}
        />
        <Image
          src={RightArrow}
          alt="Go to the invoice page"
          width={4}
          height={8}
          className="h-2 md:block invisible"
        />
      </div>
    </li>
  );
}
