import { createContext } from "react";
import type { Project } from "../pages/Project/types";

export type HomeModalContextType = {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
};

export const HomeModalContext = createContext<HomeModalContextType | undefined>(
  undefined
);
