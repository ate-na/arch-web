import { useContext } from "react";
import { ProjectContext } from "../store/ProjectContext";

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used inside a ProjectProvider");
  }
  return context;
};
