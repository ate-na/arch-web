import React, { useState } from "react";
import classes from "../Project/ProjectData.module.css";
import { projects } from "../../data/projects";
import { useParams, useNavigate } from "react-router-dom";
import ProjectModal from "./ProjectModal";

const ProjectData = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const project = projects.find((e) => e.name === name);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return <p>not found</p>;

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
    setCurrentImageIndex((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className={classes["projects-project"]}>
      <div className={classes["left-panel"]}>
        <h1>{project.name}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing el Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Rem incidunt
        </p>
        <button onClick={handleClose} className={classes["close-button"]}>
          close X
        </button>
      </div>

      <div className={classes["right-panel"]}>
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={project.src}
              alt={project.name}
              className={classes["right-image"]}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ProjectModal
          images={projects.map((p) => p.src)}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
};

export default ProjectData;
