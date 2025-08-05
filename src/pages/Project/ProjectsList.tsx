import classes from "../Project/ProjectsList.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import MainHelmet from "./MainHelmet";

const ProjectsList = () => {
  return (
    <>
      <MainHelmet isProjectPage={true} />
      <div className={classes["projects-wrapper"]}>
        <ul className={classes.list}>
          {projects.map((e, index) => (
            <ProjectCard project={e} index={index} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectsList;
