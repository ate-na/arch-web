import { createContext } from "react";
import type { Project } from "../pages/Project/types";

export interface ProjectContextType {
  projects: Project[];
  loading: boolean;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined
);
