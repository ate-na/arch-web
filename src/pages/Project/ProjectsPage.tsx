import React, { useState } from "react";
import ProjectsList from "./ProjectsList";
import ProjectData from "./ProjectData";
import type { Project } from "./types";

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div>
      <ProjectsList onSelect={setSelectedProject} />
      {selectedProject && <ProjectData project={selectedProject} />}
    </div>
  );
};

export default ProjectsPage;
