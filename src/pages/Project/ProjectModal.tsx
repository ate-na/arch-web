import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./ProjectModal.module.css";

interface Props {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectModal: React.FC<Props> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`${classes.backdrop} ${
        isClosing ? classes.fadeOut : classes.fadeIn
      }`}
    >
      <div className={classes.modal}>
        <img
          src={images[currentIndex]}
          alt={`project-${currentIndex}`}
          className={`${classes.image} ${isHovered ? classes.zoom : ""}`}
        />

        <button className={classes.prev} onClick={onPrev}>
          <ChevronLeft size={32} strokeWidth={1} />
        </button>

        <button className={classes.next} onClick={onNext}>
          <ChevronRight size={32} strokeWidth={1} />
        </button>

        <button
          className={classes.close}
          onClick={handleClose}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <X size={26} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
