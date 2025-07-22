import { useState } from "react";
import classes from "../Project/ProjectData.module.css";
import { projects } from "../../data/projects";
import { useParams, useNavigate } from "react-router-dom";
import ProjectModal from "./ProjectModal";
import { t } from "i18next";
import i18n from "../../i18n";
// import useIsMobile from "../../hooks/useIsMobile";
import ProjectDescription from "../../components/ProjectDescription/ProjectDescription";
import NotFound from "../../components/NotFoundError/NotFound";

const ProjectData = () => {
  const { name } = useParams<{ name: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const isMobile = useIsMobile();
  const lng = i18n.language as "en" | "fa";

  const navigate = useNavigate();

  if (!name) return <NotFound />;
  const project = projects.find((e) => e.name === name);
  if (!project) return <NotFound />;

  const handleClose = () => {
    navigate("/projects");
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // disable scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // re-enable scroll
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.galleries.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.galleries.length) % project.galleries.length
    );
  };

  return (
    <section className={classes["projects-project"]}>
      <div className={classes["left-panel"]}>
        <ProjectDescription projectData={project[`${lng}_description`]} />
        <button onClick={handleClose} className={classes["close-button"]}>
          {t("close X")}
        </button>
      </div>

      <div className={classes["right-panel"]}>
        {project.galleries.map((project, index) => (
          <div
            key={index}
            // onClick={() => !isMobile && openModal(index)}
            onClick={() => openModal(index)}
            style={{}}
          >
            <img
              src={project}
              alt={`gallery_${index}`}
              className={classes["right-image"]}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ProjectModal
          images={project.galleries}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
};

export default ProjectData;
