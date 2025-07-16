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
        <p>{project.description}</p>
      </div>

      <div className={classes["right-panel"]}>
        {projects.map((project, index) => (
          <div key={index}>
            <img
              src={project.src}
              alt={project.name}
              className={classes["right-image"]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectData;
