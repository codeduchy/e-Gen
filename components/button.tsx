import { ButtonHTMLAttributes } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  class?: string;
  icon?: React.ReactElement;
  rounded?: boolean;
  hover?: boolean;
}

const Button = ({
  children,
  hover = true,
  rounded = true,
  className,
  color,
  ...rest
}: Props) => {
  return (
    <div className={className}>
      <button
        className={`${
          color
            ? color
            : "bg-gradient-to-r from-emerald-600 to-cyan-500 text-white"
        } transition-all py-2 px-4 ${
          rounded ? "rounded-lg" : "rounded-none"
        } font-medium ${hover ? "hover:scale-[1.02]" : ""} w-full text-lg`}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
