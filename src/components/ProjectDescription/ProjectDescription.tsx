import { t } from "i18next";
import classes from "./ProjectDescription.module.css";
import type { ProjectDescription } from "../../pages/Project/types";

interface Props {
  projectData: ProjectDescription;
}
const ProjectDescription: React.FC<Props> = ({ projectData }) => {
  return (
    <section className={classes["project"]}>
      <div className={classes["project-header"]}>
        <h1 className={classes["project-title"]}>{projectData.title}</h1>
        <h2 className={classes["project-subtitle"]}>{projectData.subtitle}</h2>
      </div>

      <ul className={classes["project-specs"]}>
        <li>
          <strong>📍 {t("location")}:</strong> {projectData.location}
        </li>
        <li>
          <strong>📐 {t("metraz")}:</strong> {projectData.area}
        </li>
        <li>
          <strong>🏗 {t("Number of floors")}:</strong> {projectData.floors}
        </li>
        <li>
          <strong>🎨 {t("Design style")}:</strong> {projectData.style}
        </li>
      </ul>

      <div className={classes["project-description"]}>
        {projectData.description.map((text, index) => (
          <p key={index} className={classes["project-text"]}>
            {text}
          </p>
        ))}
      </div>

      <div className={classes["project-phases"]}>
        <h3 className={classes["section-title"]}>
          {t("The design process from idea to implementation")}
        </h3>
        {projectData.phases.map((phase, idx) => (
          <div key={idx} className={classes["phase"]}>
            <h4 className={classes["phase-title"]}>{`${idx + 1}. ${
              phase.title
            }`}</h4>
            <ul className={classes["phase-list"]}>
              {phase.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={classes["project-features"]}>
        <h3 className={classes["section-title"]}>
          {t("Unique features of the project")}
        </h3>
        <ul className={classes["feature-list"]}>
          {projectData.features.map((feature, idx) => (
            <li key={idx}>✔ {feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDescription;
