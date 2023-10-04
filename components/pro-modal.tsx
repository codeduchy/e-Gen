"use client";

import { ProModalContext } from "@/context/pro-modal-provider";
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import Navbar from "./navigation/navbar";
import Button from "./button";
import { tools } from "@/utils/tools";
import { BsCheckLg } from "react-icons/bs";

const ProModal = () => {
  const { isOpen, setIsOpen } = useContext(ProModalContext);

  return (
    <div
      className={
        isOpen
          ? "absolute flex items-center justify-center h-full w-full z-[1000] overflow-hidden"
          : "hidden"
      }
    >
      <div
        className="absolute h-full w-full bg-black/70"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="relative z-10 bg-white w-[28rem] h-[32rem] rounded-lg flex flex-col p-5 justify-between items-center">
        <ImCross
          className="absolute top-2 transition-all right-2 text-red-700 hover:text-lg cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <h1 className="font-bold p-2 text-2xl">Upgrade to Pro</h1>
        <div className=" w-[90%] flex flex-col gap-2">
          {tools.map((tool) => (
            <div
              key={tool.label}
              className="flex items-center p-3 border border-slate-200 rounded-lg text-xl"
            >
              <tool.icon className={`${tool.color} mr-2 text-3xl`} />
              <p className="flex-1">{tool.label}</p>
              <BsCheckLg className="text-green-500 text-2xl" />
            </div>
          ))}
        </div>
        <Button
          className="w-[90%]"
          color="bg-gradient-to-r from-violet-700 to-red-500 text-white"
        >
          Upgrade
        </Button>
      </div>
    </div>
  );
};
export default ProModal;
