"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import FreeCounter from "../free-counter";

const MobileSidebar = ({
  apiLimitCount,
}: {
  apiLimitCount: number | undefined;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`transition-all bg-gradient-to-b from-slate-900 to-cyan-950 ${
        isOpen ? "h-screen" : "h-20"
      } md:hidden overflow-hidden`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="h-20 flex items-center justify-center">
        <Image
          src="/logo.png"
          width={70}
          height={70}
          alt="logo"
          className="animate-pulse"
        />
      </div>
      <div className="p-5 mt-5 h-full pb-[100px] flex flex-col justify-between">
        <Navbar theme="dark" />

        <FreeCounter
          apiLimitCount={apiLimitCount}
          className="bg-slate-700/60 rounded-lg text-white w-full"
        />
      </div>
    </div>
  );
};
export default MobileSidebar;
