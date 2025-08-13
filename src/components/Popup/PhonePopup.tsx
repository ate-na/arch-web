import { useEffect, useState } from "react";
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

  return (
    <>
      {visible && (
        <div className={styles.bubble} onClick={() => setModalOpen(true)}>
          <FiPhone size={35} color="#555" />
        </div>
      )}

      <PhonePopupModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default PhonePopup;
