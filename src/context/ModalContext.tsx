import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Project } from "../pages/Project/types";

type ModalContextType = {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
};

const ModalContext = createContext<ModalContextType | undefined>({
  selectedProject: null,
  setSelectedProject: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ModalContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};
