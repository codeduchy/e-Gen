"use client";

import { ProModalContext } from "@/context/pro-modal-provider";
import { useContext } from "react";

const ProModal = () => {
  const { isOpen, setIsOpen } = useContext(ProModalContext);

  return (
    <div
      className={
        isOpen
          ? "absolute h-full w-full  bg-black/50 z-[1000] overflow-hidden"
          : "hidden"
      }
      onClick={() => setIsOpen(false)}
    >
      <div className="bg-white w-72 h-72"></div>
    </div>
  );
};
export default ProModal;
