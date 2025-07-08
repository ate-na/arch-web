import React, { useState, useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import classes from "./Home.module.css";

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

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [scale, setScale] = useState<{ x: number; y: number }>({ x: 1, y: 1 });

  const controls = useAnimation();

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const wrapper = imageRefs.current[index];
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    x.set(offsetX);
    y.set(offsetY);

    setScale({ x: 1, y: 1 });
    setActiveIndex(index);

    controls.start({
      rotate: [0, -0.5, 0.5, -0.3, 0.3, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    if (activeIndex !== index) return;

    const wrapper = imageRefs.current[index];
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const limitedX = Math.max(Math.min(offsetX, 100), -100);
    const limitedY = Math.max(Math.min(offsetY, 100), -100);

    x.set(limitedX);
    y.set(limitedY);

    const squashX = Math.max(1, 1 + Math.abs(limitedX) / 250);
    const squashY = Math.max(1, 1 + Math.abs(limitedY) / 300);

    setScale({ x: squashX, y: squashY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setScale({ x: 1, y: 1 });
    setActiveIndex(null);
    controls.stop();
  };

  return (
    <main className={classes["home-main"]}>
      <section ref={containerRef} className={classes["home-section"]}>
        {projects.map((project, index) => (
          <div
            className={classes["home-projects"]}
            key={index}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            style={{
              zIndex: activeIndex === index ? 10 : 1,
            }}
          >
            <motion.div
              animate={{
                x: activeIndex === index ? x.get() : 0,
                y: activeIndex === index ? y.get() : 0,
                scaleX: activeIndex === index ? scale.x : 1,
                scaleY: activeIndex === index ? scale.y : 1,
                opacity: activeIndex === index ? 1 : 0.1,
              }}
              style={{
                position: "relative",
                zIndex: activeIndex === index ? 10 : 2,
                cursor: "pointer",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <img
                src={project.src}
                alt={`img-${index}`}
                style={{
                  display: "block",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
            <a
              href="#"
              className={classes["home-projects-title"]}
              style={{
                fontWeight: activeIndex === index ? "bold" : "normal",
              }}
            >
              {project.name}
            </a>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
