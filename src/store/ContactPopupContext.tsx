import { createContext } from "react";

export type ContactPopupContextType = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  wasManuallyClosed: boolean;
  setWasManuallyClosed: (closed: boolean) => void;
};

export const ContactPopupContext = createContext<
  ContactPopupContextType | undefined
>(undefined);
