import clsx from "clsx";
import Select, { GroupBase, Props } from "react-select";

const fontBase =
  "text-[0.9375rem] leading-[0.9375rem] tracking-widest font-bold";

const controlStyles = {
  base: `border rounded-[4px] bg-white dark:bg-invoice-03 hover:cursor-pointer ${fontBase} dark:text-white`,
  focus:
    "border-invoice-01 ring-1 ring-invoice-01 dark:border-invoice-04 dark:ring-invoice:04",
  nonFocus: "border-invoice-05 hover:border-invoice-01 dark:border-invoice-04",
};

const menuStyles = `mt-6 border border-white bg-white dark:bg-invoice-04 dark:border-invoice-04 rounded-lg ${fontBase} drop-shadow-sm`;

const optionStyles = {
  base: "hover:cursor-pointer px-5 pt-[18px] pb-[15px] last:border-t last:border-invoice-05 dark:text-invoice-05 dark:last:border-invoice-03",
  focus: "light:active:text-invoice-01 dark:active:text-invoice-02",
  selected: "text-invoice-01 dark:text-invoice-02",
};

const valueContainerStyles = "pt-[18px] pb-[15px] px-5 flex gap-2";

const dropdownIndicatorStyles =
  "px-5 text-invoice-01 rounded-md hover:text-black";

function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>) {
  return (
    <Select
      {...props}
      theme={(theme) => ({ ...theme, borderRadius: 0 })}
      unstyled
      isSearchable={false}
      styles={{
        input: (base) => ({ ...base, "input-focus": { boxShadow: "none" } }),
      }}
      classNames={{
        control: ({ isFocused }) =>
          clsx(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base
          ),
        option: ({ isFocused, isSelected }) =>
          clsx(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base
          ),
        menu: () => menuStyles,
        valueContainer: () => valueContainerStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
      }}
    />
  );
}

export { CustomSelect as Select };
