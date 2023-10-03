import FreeCounter from "../free-counter";
import Navbar from "./navbar";
import Image from "next/image";

const Sidebar = ({ apiLimitCount }: { apiLimitCount?: number }) => {
  return (
    <div className=" bg-gradient-to-b from-slate-900 to-cyan-950 w-[310px] text-white hidden md:block">
      <div className="h-20 flex items-center justify-center">
        <Image
          src="/logo.png"
          width={70}
          height={70}
          alt="logo"
          className="animate-pulse"
        />
      </div>
      <div className="h-full pb-[92px] flex flex-col justify-between p-3">
        <Navbar theme="dark" />

        <FreeCounter
          apiLimitCount={apiLimitCount}
          className="bg-slate-700/60 rounded-lg w-full"
        />
      </div>
    </div>
  );
};
export default Sidebar;
