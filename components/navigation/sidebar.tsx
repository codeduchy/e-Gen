import Navbar from "./navbar";
import Image from "next/image";

const Sidebar = () => {
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
      <div className="px-2 mt-4">
        <Navbar theme="dark" />
      </div>
    </div>
  );
};
export default Sidebar;
