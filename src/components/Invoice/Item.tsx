import RightArrow from "@/assets/icon-arrow-right.svg";
import { getBgColorByStatus, getColorWithOpacityByStatus, getTextColorByStatus } from "@/lib/colors";
import Image from "next/image";

type Status = "paid" | "pending" | "draft"

type InvoiceProps = {
  identifier: string;
  data: string;
  client: string;
  total: string;
  status: Status;
};


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
      max-h-[72px]
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
      <div className="flex items-center">
        <span className="mr-10 text-invoice-08 text-[0.9375rem] leading-6 tracking-widest font-bold dark:text-white">
          {total}
        </span>
        <div className={`mr-5 py-4 px-[30px] flex items-center ${getColorWithOpacityByStatus(status)} rounded-md`} >
          <div className={`w-2 h-2  ${getBgColorByStatus(status)} rounded-full mr-2`}></div>
          <span className={`text-[0.9375rem] leading-[0.9375rem] tracking-widest font-bold capitalize ${getTextColorByStatus(status)}`}>{status}</span>
        </div>
        <Image
          src={RightArrow}
          alt="Go to the invoice page"
          width={4}
          height={8}
          className="h-2"
        />
      </div>
    </li>
  );
}
