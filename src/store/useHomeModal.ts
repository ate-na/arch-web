import { useContext } from "react";
import { HomeModalContext } from "./HomeModalContext";

export const useHomeModal = () => {
  const context = useContext(HomeModalContext);
  if (!context) {
    throw new Error("useHomeModal must be used within a HomeModalProvider");
  }
  return context;
};
