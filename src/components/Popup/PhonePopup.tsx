import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import styles from "./PhonePopup.module.css";
import { useContactPopup } from "../../store/useContactPopup";
import PhonePopupModal from "./PhonePopupModal";

const PhonePopup = () => {
  const { currentPage } = useContactPopup();
  const [visible, setVisible] = useState(false);
  const [wasManuallyClosed, setWasManuallyClosed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    setVisible(false);

    if (wasManuallyClosed) {
      setWasManuallyClosed(false);
      timer = setTimeout(() => setVisible(true), 4000);
    } else {
      setVisible(true);
    }

    return () => clearTimeout(timer);
  }, [currentPage]);

  if (!isMobile) return null;

  const color = "#ccccccff";

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className={styles.bubble}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setModalOpen(true)}
          >
            <svg width="200" height="200" className={styles.svg}>
              <defs>
                <filter id="gooey">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  
                            0 1 0 0 0  
                            0 0 1 0 0  
                            0 0 0 20 -10"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>

              <g filter="url(#gooey)">
                <motion.circle
                  key="popup-body"
                  cx="100"
                  cy="100"
                  r="30"
                  fill={color}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.2, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />

                <motion.circle
                  cx="100"
                  cy="80"
                  r="15"
                  fill={color}
                  animate={{ x: [0, -40, 40, 0], y: [0, 60, -60, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="80"
                  cy="140"
                  r="17"
                  fill={color}
                  animate={{ x: [0, 30, -30, 0], y: [0, -60, 60, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.6,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="50"
                  cy="30"
                  r="15"
                  fill={color}
                  animate={{ y: [0, -40, 40, 0], x: [0, -60, 60, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.8,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="100"
                  cy="120"
                  r="17"
                  fill={color}
                  animate={{ y: [0, 30, -30, 0], x: [0, 60, -60, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                />

                <foreignObject
                  x="70"
                  y="70"
                  width="60"
                  height="60"
                  pointerEvents="none"
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <FiPhone size={25} color="#555" />
                  </div>
                </foreignObject>
              </g>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <PhonePopupModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default PhonePopup;
