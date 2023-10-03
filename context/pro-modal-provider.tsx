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

export const ProModal = createContext<ProModalProps>({
  isOpen: false,
  setIsOpen: () => {},
});
const ProModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProModal.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ProModal.Provider>
  );
};
export default ProModalProvider;
