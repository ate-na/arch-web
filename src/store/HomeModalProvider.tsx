import { useState, type ReactNode } from "react";
import { HomeModalContext } from "./HomeModalContext";
import type { Project } from "../pages/Project/types";

export const HomeModalProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <HomeModalContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </HomeModalContext.Provider>
  );
};
