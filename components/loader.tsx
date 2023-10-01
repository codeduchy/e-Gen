import Image from "next/image";
import { ImSpinner9 } from "react-icons/im";

const Loader = ({ color }: { color?: string }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-3">
      <div>
        <ImSpinner9
          className={`animate-spin h-8 w-8 ${color ? color : "text-slate-500"}`}
        />
      </div>
      <p className="pl-1 text-slate-500 text-sm">eGen is processing...</p>
    </div>
  );
};
export default Loader;
