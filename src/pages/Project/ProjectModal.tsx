import React, { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./ProjectModal.module.css";

interface Props {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  setCurrentIndex: (index: number) => void;
}

const SWIPE_THRESHOLD = 50;

const ProjectModal: React.FC<Props> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  setCurrentIndex,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isThumbnailScrolling, setIsThumbnailScrolling] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const [touchMoveX, setTouchMoveX] = useState(0);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      } else if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onNext, onPrev]);

  const onTouchStart = (e: React.TouchEvent) => {
    if (isThumbnailScrolling) return;
    touchStartX.current = e.changedTouches[0].clientX;
    setTouchMoveX(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isThumbnailScrolling) return;
    if (touchStartX.current === null) return;
    const currentX = e.changedTouches[0].clientX;
    const deltaX = currentX - touchStartX.current;
    setTouchMoveX(deltaX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (isThumbnailScrolling) return;
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - touchStartX.current;

    if (deltaX > SWIPE_THRESHOLD) {
      onPrev();
    } else if (deltaX < -SWIPE_THRESHOLD) {
      onNext();
    }

    setTouchMoveX(0);
    touchStartX.current = null;
  };

  const handleThumbnailTouchStart = () => {
    setIsThumbnailScrolling(true);
  };

  const handleThumbnailTouchEnd = () => {
    setIsThumbnailScrolling(false);
  };

  return (
    <div
      className={`${classes.backdrop} ${
        isClosing ? classes.fadeOut : classes.fadeIn
      }`}
    >
      <div
        className={classes.modal}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`project-${currentIndex}`}
          className={`${classes.image} ${isHovered ? classes.zoom : ""}`}
          style={{
            transform: `translateX(${touchMoveX}px)`,
            transition: touchMoveX === 0 ? "transform 0.3s ease" : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        <button className={classes.prev} onClick={onPrev}>
          <ChevronLeft size={32} strokeWidth={1} />
        </button>

        <button className={classes.next} onClick={onNext}>
          <ChevronRight size={32} strokeWidth={1} />
        </button>

        <button className={classes.close} onClick={handleClose}>
          <X size={26} strokeWidth={2.5} />
        </button>

        <div
          className={classes.thumbnails}
          onTouchStart={handleThumbnailTouchStart}
          onTouchEnd={handleThumbnailTouchEnd}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className={`${classes.thumbnail} ${
                index === currentIndex ? classes.activeThumbnail : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
