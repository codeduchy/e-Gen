"use client";

import Image from "next/image";
import { useState } from "react";
import { NavMenu } from "./navMenu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-slate-900 md:h-screen flex flex-col ${
        isOpen ? "h-screen" : "h-24"
      } overflow-hidden transition-all relative`}
    >
      <div
        className="absolute h-full w-full md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div className={`w-full flex items-center justify-center`}>
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
          className={`z-10 py-6 transition-all animate-pulse md:animate-none hover:opacity-70 cursor-pointer md:cursor-default`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className="overflow-auto">
        <NavMenu theme="dark" />
      </div>
    </div>
  );
};
export default Sidebar;
