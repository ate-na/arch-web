import { Link } from "react-router-dom";
import type { Project } from "./types";
import classes from "../Project/ProjectsList.module.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { getSlug } from "../../util/help";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "fa" | "en";
  return (
    <div className="border p-4">
      <Link to={`/projects/${getSlug(project.mainTitle)}`}>
        <li
          className={classes.item}
          key={lang === "fa" ? project.mainTitleFa : project.mainTitle + index}
        >
          <div className={classes["label-row"]}>
            <span className={classes["project-name"]}>
              {t(`${lang === "fa" ? project.mainTitleFa : project.mainTitle}`)}
            </span>

            <span
              className={classes.line}
              style={{ transformOrigin: lang === "en" ? "left" : "right" }}
            />
          </div>
          <div className={classes["image-wrapper"]}>
            <img
              src={project.src}
              alt={lang === "fa" ? project.mainTitleFa : project.mainTitle}
            />
          </div>
        </li>
      </Link>
    </div>
  );
};

export default ProjectCard;
