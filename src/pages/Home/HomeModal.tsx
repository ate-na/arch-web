import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../Home/HomeModal.module.css";
import { useTranslation } from "react-i18next";
import type { Project } from "../Project/types";
import { getSlug } from "../../util/help";
import { useProjects } from "../../hooks/useProject";
import Loading from "../../components/Loading/Loading";

interface HomeModalProps {
  src: string;
  name: string;
  onClose: () => void;
}

const HomeModal: React.FC<HomeModalProps> = ({ src, name, onClose }) => {
  const { projects, loading } = useProjects();
  const foundProject = projects.find(
    (p) => getSlug(p.mainTitle) === getSlug(name) && p.src === src
  );
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedProject, setSelectedProject] = useState<Project>(
    foundProject as any
  );
  const description = selectedProject.descriptions?.find(
    (e) => e.lang === lang
  );

  if (loading) return <Loading />;

  return (
    <section className={classes["home-modal-section"]}>
      <div className={classes["home-modal-wrapper"]}>
        <div className={classes["home-modal-data"]}>
          <div className={classes["home-modal-left-side"]}>
            <h1>
              {lang === "fa"
                ? selectedProject.mainTitleFa
                : selectedProject.mainTitle}
            </h1>
            <button type="button" onClick={onClose}>
              {t(`close X`)}
            </button>
          </div>
          <div className={classes["home-modal-img"]}>
            <img src={selectedProject.src} alt={selectedProject.mainTitle} />
          </div>
          <div
            className={`${classes["home-modal-right-side"]} ${
              lang === "fa" ? classes.fa : ""
            }`}
          >
            <ul>
              <li>
                <strong>{t("location")}:</strong> {description?.location}
              </li>
              <li>
                <strong>{t("area")}:</strong> {description?.metrz || "-"}
              </li>
              <li>
                <strong>{t("Number of floors")}:</strong>{" "}
                {description?.floor || "-"}
              </li>
              <li>
                <strong>{t("Design style")}:</strong> {description?.style}
              </li>
            </ul>
            <Link to={`/projects/${getSlug(selectedProject.mainTitle)}`}>
              <button type="button">{t("Learn more +")}</button>
            </Link>
          </div>
        </div>

        <div className={classes["home-modal-projects-list"]}>
          {projects.slice(0, 5).map((project, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedProject(project);
              }}
              style={{
                fontWeight:
                  selectedProject.mainTitle === project.mainTitle
                    ? "bold"
                    : "normal",
                cursor: "pointer",
                marginRight: "1rem",
              }}
            >
              {lang === "fa" ? project.mainTitleFa : project.mainTitle}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeModal;
