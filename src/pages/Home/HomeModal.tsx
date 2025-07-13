import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import classes from "../Home/HomeModal.module.css";

interface Project {
  name: string;
  src: string;
}

const projects: Project[] = [
  {
    name: "Evias",
    src: "https://www.that-studio.com/images/evias/evias-intro.png",
  },
  {
    name: "Galinou",
    src: "https://www.that-studio.com/images/galinou/galinou-intro-2.png",
  },
  {
    name: "Agiou Nikolaou",
    src: "https://www.that-studio.com/images/agiou-nikolaou/agiou-nikolaou-intro.png",
  },
  {
    name: "Alimousion",
    src: "https://www.that-studio.com/images/alimousion/alimousion-intro.png",
  },
  {
    name: "Evias",
    src: "https://www.that-studio.com/images/evias/evias-intro.png",
  },
];

interface HomeModaltProps {
  src: string;
  name: string;
  onClose: () => void;
}

const HomeModal: React.FC<HomeModaltProps> = ({ src, name, onClose }) => {
  const [selectedProject, setSelectedProject] = useState<Project>({
    name,
    src,
  });

  return (
    <>
      <NavBar />
      <section className={classes["home-modal-section"]}>
        <div className={classes["home-modal-wrapper"]}>
          <div className={classes["home-modal-data"]}>
            <div className={classes["home-modal-left-side"]}>
              <h1>{selectedProject.name}</h1>
              <button type="button" onClick={onClose}>
                close X
              </button>
            </div>
            <div className={classes["home-modal-img"]}>
              <img src={selectedProject.src} alt={selectedProject.name} />
            </div>
            <div className={classes["home-modal-right-side"]}>
              <ul>
                <li>hiiiiiiiiiiiiiii</li>
                <li>lijjjj</li>
                <li>kkkkkkkkkkkkk</li>
                <li>323h</li>
                <li>kefijh: kuhgy</li>
              </ul>
              <button type="button">Learn more +</button>
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
                {project.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeModal;
