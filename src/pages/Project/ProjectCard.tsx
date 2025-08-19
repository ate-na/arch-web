import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleClick = () => {
    console.log("handleClick", window.scrollY.toString());
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    navigate(`/projects/${getSlug(project.name)}`);
  };

  return (
    <div className="border p-4">
      <li onClick={handleClick}>
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
      </li>
    </div>
  );
};

export default ProjectCard;
