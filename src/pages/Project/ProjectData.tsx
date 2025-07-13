import classes from "../Project/ProjectData.module.css";
import { projects } from "../../data/projects";
import { useParams } from "react-router-dom";

const ProjectData = () => {
  const { name } = useParams<{ name: string }>();
  const project = projects.find((e) => e.name === name);

  if (!project) return <p>not found</p>;
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
