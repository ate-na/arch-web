import { Link } from "react-router-dom";
import type { Project } from "./types";
import classes from "../Project/ProjectsList.module.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "fa" | "en";
  return (
    <div className="border p-4">
      <Link to={`/projects/${project.name}`}>
        <li className={classes.item} key={project[`${lang}_name`] + index}>
          <div className={classes["label-row"]}>
            <span className={classes["project-name"]}>
              {t(`${project[`${lang}_name`]}`)}
            </span>

            <span
              className={classes.line}
              style={{ transformOrigin: lang === "en" ? "left" : "right" }}
            />
          </div>
          <div className={classes["image-wrapper"]}>
            <img src={project.src} alt={project[`${lang}_name`]} />
          </div>
        </li>
      </Link>
    </div>
  );
};

export default ProjectCard;
