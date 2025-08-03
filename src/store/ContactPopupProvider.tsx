import { useState } from "react";
import type { ReactNode } from "react";
import { ContactPopupContext } from "./ContactPopupContext";

export const ContactPopupProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState("");
  const [wasManuallyClosed, setWasManuallyClosed] = useState(false);

  return (
    <ContactPopupContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        wasManuallyClosed,
        setWasManuallyClosed,
      }}
    >
      {children}
    </ContactPopupContext.Provider>
  );
};
