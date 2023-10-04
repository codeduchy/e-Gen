"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ProModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const ProModalContext = createContext<ProModalProps>({
  isOpen: false,
  setIsOpen: () => {},
});
const ProModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ProModalContext.Provider>
  );
};
export default ProModalProvider;
