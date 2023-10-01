interface ButtonProps {
  text?: string;
  color?: string;
  children?: React.ReactNode;
  className?: string;
  [x: string]: any;
}

const Button = ({
  text,
  color,
  children,
  className: classN = "",
  ...attributes
}: ButtonProps) => {
  return (
    <button
      className={`${classN} ${
        color ? color : "bg-gradient-to-r from-emerald-500 to-cyan-500"
      } px-3 py-2 rounded-lg text-white font-medium transition-all hover:scale-[1.01] min-w-[120px] `}
      {...attributes}
    >
      {children || text}
    </button>
  );
};
export default Button;
