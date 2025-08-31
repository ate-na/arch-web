import { useState, useEffect, useRef } from "react";
import { t } from "i18next";
import classes from "./ProjectDescription.module.css";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { Project } from "../../pages/Project/types";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

interface Props {
  project: Project;
}

const ProjectDescription: React.FC<Props> = ({ project }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const expandableRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const lang = i18n.language as "fa" | "en";

  const description = project.descriptions?.find((e) => e.lang === "fa");
  const phases = project.phases?.filter((el) => el.lang === lang);
  const features = project.features.find((e) => e.lang === lang);

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
  }, [expanded, isMobile]);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const isFarsi = lang.startsWith("fa");

  console.log(lang, isFarsi, t("location"));

  const moreText = isFarsi ? "نمایش  بیشتر" : "Show More";
  const lessText = isFarsi ? "نمایش  کمتر" : "Show Less";

  const shouldShowToggle =
    isMobile && description && description.description.length > 1;

  const visibleDescription =
    isMobile && !expanded && description
      ? description.description.slice(0, 1)
      : description?.description;

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{description?.title} | دفتر معماری دَت</title>
        <meta name="description" content={description?.subtitle} />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href={`https://thatlab.art/${i18n.language}/projects/${project.mainTitle}`}
        />
        <link
          rel="alternate"
          hrefLang="fa"
          href={`https://thatlab.art/fa/projects/${project.mainTitle}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://thatlab.art/en/projects/${project.mainTitle}`}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ArchitectureProject",
            name: description?.title,
            description: description?.subtitle,
            location: description?.location,
            area: description?.metrz,
            numberOfFloors: description?.floor,
            designStyle: description?.style,
            url: `https://thatlab.art/${i18n.language}/projects/${project.mainTitle}`,
            inLanguage: i18n.language,
            creator: {
              "@type": "Organization",
              name: "دفتر طراحی دَت",
              url: "https://thatlab.art",
            },
          })}
        </script>
      </Helmet>
      <section className={classes["project"]}>
        <div className={classes["project-header"]}>
          <h1 className={classes["project-title"]}>{description?.title}</h1>
          <h2 className={classes["project-subtitle"]}>
            {description?.subtitle}
          </h2>
        </div>

        <ul className={classes["project-specs"]}>
          <li>
            <strong>📍 {t("location")}:</strong> {description?.location}
          </li>
          <li>
            <strong>📐 {t("area")}:</strong> {description?.metrz || "-"}
          </li>
          <li>
            <strong>🏗 {t("Number of floors")}:</strong>
            {description?.floor || "-"}
          </li>
          <li>
            <strong>🎨 {t("Design style")}:</strong> {description?.style}
          </li>
        </ul>

        <div className={classes["project-description"]}>
          {visibleDescription &&
            visibleDescription.map((text, index) => (
              <p key={index} className={classes["project-text"]}>
                {text}
              </p>
            ))}

          {shouldShowToggle && !expanded && (
            <button
              onClick={toggleExpanded}
              className={classes["toggle-button"]}
            >
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
            {phases &&
              phases.map((phase, idx) => (
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

          {features && (
            <div className={classes["project-features"]}>
              <h3 className={classes["section-title"]}>
                {t("Unique features of the project")}
              </h3>
              <ul className={classes["feature-list"]}>
                {features.values.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {shouldShowToggle && expanded && (
            <button
              onClick={toggleExpanded}
              className={classes["toggle-button"]}
            >
              <ChevronUp /> {lessText}
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectDescription;
