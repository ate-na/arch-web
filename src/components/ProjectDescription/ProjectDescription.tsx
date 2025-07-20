import { useState, useEffect, useRef } from "react";
import i18next, { t } from "i18next";
import classes from "./ProjectDescription.module.css";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { ProjectDescription as ProjectDescriptionType } from "../../pages/Project/types";

interface Props {
  projectData: ProjectDescriptionType;
}

const ProjectDescription: React.FC<Props> = ({ projectData }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const expandableRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (expandableRef.current) {
      setMaxHeight(
        expanded ? `${expandableRef.current.scrollHeight}px` : "0px"
      );
    }
  }, [expanded, isMobile, projectData]);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const lang = i18next.language;
  const isFarsi = lang.startsWith("fa");

  const moreText = isFarsi ? "نمایش  بیشتر" : "Show More";
  const lessText = isFarsi ? "نمایش  کمتر" : "Show Less";

  const shouldShowToggle = isMobile && projectData.description.length > 1;

  const visibleDescription =
    isMobile && !expanded
      ? projectData.description.slice(0, 1)
      : projectData.description;

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
        {visibleDescription.map((text, index) => (
          <p key={index} className={classes["project-text"]}>
            {text}
          </p>
        ))}

        {shouldShowToggle && !expanded && (
          <button onClick={toggleExpanded} className={classes["toggle-button"]}>
            <ChevronDown />
            {moreText}
          </button>
        )}
      </div>

      <div
        ref={expandableRef}
        style={{
          maxHeight: isMobile ? maxHeight : "none",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
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

          {shouldShowToggle && expanded && (
            <button
              onClick={toggleExpanded}
              className={classes["toggle-button"]}
            >
              <ChevronUp /> {lessText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
