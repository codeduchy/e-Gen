interface ButtonProps {
  text?: string;
  color?: string;
  children?: React.ReactNode;
}

const Button = ({ text, color, children }: ButtonProps) => {
  return (
    <button
      className={`${
        color ? color : "bg-gradient-to-r from-emerald-500 to-cyan-500 "
      } px-4 py-3 rounded-full text-white font-medium transition-all hover:scale-[1.05] min-w-[120px]`}
    >
      {children || text}
    </button>
  );
};
export default Button;
