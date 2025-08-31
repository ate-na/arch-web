import { useEffect, useState, type FC, type ReactNode } from "react";
import { ProjectContext } from "./ProjectContext";
import type { Project } from "../pages/Project/types";

type ProjectProviderProps = { children: ReactNode };

export const ProjectProvider: FC<ProjectProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://thatlab-admin.liara.run/projects")
      .then((res) => res.json())
      .then((data: Project[]) => {
        console.log("data is", data);
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectContext.Provider>
  );
};
