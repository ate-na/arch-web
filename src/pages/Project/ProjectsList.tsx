import classes from "../Project/ProjectsList.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const ProjectsList = () => {
  return (
    <div className={classes["projects-wrapper"]}>
      <ul className={classes.list}>
        {projects.map((e, index) => (
          <ProjectCard product={e} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
