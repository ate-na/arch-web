import classes from "../Project/ProjectsList.module.css";
import ProjectCard from "./ProjectCard";
// import { projects } from "../../data/projects";
import MainHelmet from "./MainHelmet";
import { useProjects } from "../../hooks/useProject";
import Loading from "../../components/Loading/Loading";

const ProjectsList = () => {
  const { projects, loading } = useProjects();

  if (loading) return <Loading />;
  return (
    <>
      <MainHelmet isProjectPage={true} projects={projects} />
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
