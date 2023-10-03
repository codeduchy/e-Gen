"use client";

import { ProModal } from "@/context/pro-modal-provider";
import { useContext } from "react";

const Modal = () => {
  const { isOpen, setIsOpen } = useContext(ProModal);

  return (
    <div
      className={
        isOpen
          ? "absolute h-full w-full  bg-black/50 z-[1000] overflow-hidden"
          : "hidden"
      }
      onClick={() => setIsOpen(false)}
    ></div>
  );
};
export default Modal;
