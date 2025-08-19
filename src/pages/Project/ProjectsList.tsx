import classes from "../Project/ProjectsList.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import MainHelmet from "./MainHelmet";
import { useEffect } from "react";

const ProjectsList = () => {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    console.log("savedPosition", savedPosition);
    if (savedPosition) {
      // Delay ensures DOM is ready before scroll
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          behavior: "instant", // or "auto"
        });
        sessionStorage.removeItem("scrollPosition");
      }, 0);
    }
  }, []);
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
