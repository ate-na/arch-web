import { useContext } from "react";
import { ContactPopupContext } from "./ContactPopupContext";
import type { ContactPopupContextType } from "./ContactPopupContext";

export const useContactPopup = (): ContactPopupContextType => {
  const context = useContext(ContactPopupContext);
  if (!context) {
    throw new Error("useContactPopup must be used within ContactPopupProvider");
  }
  return context;
};
