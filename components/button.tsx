import { ButtonHTMLAttributes } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  class?: string;
  icon?: React.ReactElement;
}

const Button = ({ children, color, ...rest }: Props) => {
  return (
    <button
      className={`${
        color
          ? color
          : "bg-gradient-to-r from-emerald-600 to-cyan-500 text-white"
      } transition-all py-2 px-4 rounded-lg font-medium hover:scale-[1.02]`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
