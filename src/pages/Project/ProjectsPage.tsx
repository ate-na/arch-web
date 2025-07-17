import React from "react";
import ProjectsList from "./ProjectsList";
import ProjectData from "./ProjectData";
// import type { Project } from "./types";

const ProjectsPage: React.FC = () => {
  // const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div>
      <ProjectsList />
      <ProjectData />
    </div>
  );
};

export default ProjectsPage;
