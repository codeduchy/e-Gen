import { OptionHTMLAttributes, SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type SelectProps = {
  children: React.ReactNode;
  register?: UseFormRegisterReturn;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
  children,
  register,
  className,
  defaultValue,
  ...attributes
}: SelectProps) => {
  return (
    <div className={className}>
      <select
        {...register}
        {...attributes}
        className="w-full h-full rounded-lg outline-none border border-slate-200"
      >
        <option value={defaultValue} disabled>
          {defaultValue}
        </option>
        {children}
      </select>
    </div>
  );
};
export default Select;
