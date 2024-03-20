import React, { forwardRef, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { ptBR } from "date-fns/locale/pt-BR";
import { InputProps } from "../Input";

import IconCalendar from "@/assets/icon-calendar.svg";
import Image from "next/image";


registerLocale("ptBR", ptBR);

const InputWithIcon = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onClick }, ref) => (
    <div>
      <input
        className="px-5 pt-[18px] pb-[15px] border border-invoice-05 rounded-[4px]  focus:ring-1 focus:ring-invoice-01 
      dark:border-invoice-04 dark:ring-invoice-04 dark:bg-invoice-03 dark:text-white text-[0.9375rem] leading-[0.9375rem] tracking-widest font-bold hover:cursor-pointer focus:outline-none focus:border-invoice-02  disabled:cursor-not-allowed disabled:opacity-50 w-full"
        onClick={onClick}
        ref={ref}
        value={value}
      />
      <Image 
        src={IconCalendar}
        alt="Calendar"
        width={16}
        height={16}
        className="absolute top-1/2 right-5 transform -translate-y-1/2"
      />
    </div>
  )
);

InputWithIcon.displayName = "CustomInput";

export const DateComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => date && setStartDate(date)}
      minDate={new Date()}
      customInput={<InputWithIcon />}
      dayClassName={() =>
        "text-[0.9375rem] leading-[0.9375rem] tracking-widest font-bold"
      }
      locale="ptBR"
      dateFormat="dd MMM YYYY"
      calendarClassName="bg-white dark:bg-invoice-03 border border-invoice-05 dark:border-invoice-04 rounded-[4px] text-invoice-08 dark:text-white"
      className=""
    />
  );
};
