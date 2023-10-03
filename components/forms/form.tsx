import { FormHTMLAttributes } from "react";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
};

const Form = ({ className, children, ...attributes }: FormProps) => {
  return (
    <div className={className}>
      <form
        {...attributes}
        className="grid grid-cols-12 gap-3 border border-slate-300 p-2 rounded-lg items-center"
      >
        {children}
      </form>
    </div>
  );
};
export default Form;
