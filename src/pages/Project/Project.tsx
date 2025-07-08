import "./Project.css";

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
    <div className="projects-wrapper">
      <ul className="list">
        {projects.map((e, index) => (
          <li className="item" key={index}>
            <div className="label-row">
              <span className="project-name">{e.name}</span>
              <span className="line" />
            </div>
            <div className="image-wrapper">
              <img src={e.src} alt={e.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
