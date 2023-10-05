import { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  register?: UseFormRegisterReturn;
  className: string;
};

const Input = ({ className, register, ...attributes }: InputProps) => {
  return (
    <div className={className}>
      <textarea
        {...register}
        {...attributes}
        className="min-h-[50px] px-2 resize-none w-full h-full rounded-lg outline-none bg-transparent"
      />
    </div>
  );
};
export default Input;
