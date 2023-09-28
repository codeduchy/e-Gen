"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { routes } from "@/utils/routes";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

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
      <nav className="max-w-lg mx-auto w-full flex flex-col items-center p-3">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className={`flex gap-2 items-center text-white mt-3 transition-all cursor-pointer bg-white/[0.03] hover:bg-white/[0.07] rounded-md p-4 md:p-3 w-full hover:scale-[1.03] hover:pl-5 z-10 text-lg`}
          >
            <route.icon className={`${route.color} text-2xl sm:text-3xl`} />
            {route.label}
          </Link>
        ))}
      </nav>
      Sidebar
    </div>
  );
};
export default Sidebar;
