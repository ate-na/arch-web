import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../Home/HomeModal.module.css";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";

interface ProjectDescription {
  title: string;
  subtitle: string;
  location: string;
  area: string;
  floors: number;
  style: string;
  description: string[];
  phases: { title: string; points: string[] }[];
  features: string[];
}

interface Project {
  id: number;
  name: string;
  en_name: string;
  fa_name: string;
  src: string;
  en_description: ProjectDescription;
  fa_description: ProjectDescription;
}

interface HomeModalProps {
  src: string;
  name: string;
  onClose: () => void;
}

const HomeModal: React.FC<HomeModalProps> = ({ src, name, onClose }) => {
  const foundProject = projects.find((p) => p.name === name && p.src === src);

  const fallbackProject: Project = {
    id: 0,
    name: "Unknown",
    en_name: "Unknown",
    fa_name: "نامشخص",
    src: "",
    en_description: {
      title: "",
      subtitle: "",
      location: "",
      area: "",
      floors: 0,
      style: "",
      description: [],
      phases: [],
      features: [],
    },
    fa_description: {
      title: "",
      subtitle: "",
      location: "",
      area: "",
      floors: 0,
      style: "",
      description: [],
      phases: [],
      features: [],
    },
  };

  const [selectedProject, setSelectedProject] = useState<Project>(
    foundProject ?? fallbackProject
  );

  const { t, i18n } = useTranslation();

  const lang = i18n.language;
  const desc =
    lang === "fa"
      ? selectedProject.fa_description
      : selectedProject.en_description;

  return (
    <section className={classes["home-modal-section"]}>
      <div className={classes["home-modal-wrapper"]}>
        <div className={classes["home-modal-data"]}>
          <div className={classes["home-modal-left-side"]}>
            <h1>
              {lang === "fa"
                ? selectedProject.fa_name
                : selectedProject.en_name}
            </h1>
            <button type="button" onClick={onClose}>
              {t(`close X`)}
            </button>
          </div>
          <div className={classes["home-modal-img"]}>
            <img src={selectedProject.src} alt={selectedProject.name} />
          </div>
          <div
            className={`${classes["home-modal-right-side"]} ${
              lang === "fa" ? classes.fa : ""
            }`}
          >
            <ul>
              <li>
                <strong>{t("location")}:</strong> {desc.location}
              </li>
              <li>
                <strong>{t("metraz")}:</strong> {desc.area}
              </li>
              <li>
                <strong>{t("Number of floors")}:</strong> {desc.floors}
              </li>
              <li>
                <strong>{t("Design style")}:</strong> {desc.style}
              </li>
            </ul>
            <Link to={`/projects/${selectedProject.name}`}>
              <button type="button">{t("Learn more +")}</button>
            </Link>
          </div>
        </div>

        <div className={classes["home-modal-projects-list"]}>
          {projects.map((project, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedProject(project);
              }}
              style={{
                fontWeight:
                  selectedProject.name === project.name ? "bold" : "normal",
                cursor: "pointer",
                marginRight: "1rem",
              }}
            >
              {lang === "fa" ? project.fa_name : project.en_name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeModal;
