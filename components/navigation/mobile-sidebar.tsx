"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";

const MobileSidebar = () => {
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
      <div className="px-5 mt-5">
        <Navbar theme="dark" />
      </div>
    </div>
  );
};
export default MobileSidebar;
