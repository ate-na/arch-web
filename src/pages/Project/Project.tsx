import React from "react";
import classes from "../Project/Project.module.css";

const projects = [
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

const Project = () => {
  return (
    <div className={classes["projects-wrapper"]}>
      <ul className={classes.list}>
        {projects.map((e, index) => (
          <li className={classes.item} key={index}>
            <div className={classes["label-row"]}>
              <span className={classes["project-name"]}>{e.name}</span>
              <span className={classes.line} />
            </div>
            <div className={classes["image-wrapper"]}>
              <img src={e.src} alt={e.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
