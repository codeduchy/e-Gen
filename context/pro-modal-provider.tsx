"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type ProModalProps = {
  isOpen: boolean;
  setOpen: () => void;
};

export const ProModalContext = createContext<ProModalProps>({
  isOpen: false,
  setOpen: () => {},
});
const ProModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ProModalContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </ProModalContext.Provider>
  );
};
export default ProModalProvider;
