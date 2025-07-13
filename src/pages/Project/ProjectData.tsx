import React from "react";
import classes from "../Project/ProjectData.module.css";
import type { Project } from "./types";

type Props = {
  project: Project;
};
// type Project = {
//   name: string;
//   src: string;
// };

const ProjectData: React.FC<Props> = ({ project }) => {
  return (
    <section className={classes["projects-project"]}>
      <div className={classes["left-panel"]}>
        <h1>{project.name}</h1>
        <img
          src={project.src}
          alt={project.name}
          className={classes["selected-image"]}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          consequatur inventore?
        </p>
      </div>
    </section>
  );
};

export default ProjectData;
