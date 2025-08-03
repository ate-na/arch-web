import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import styles from "./ContactPopup.module.css";
import { useContactPopup } from "../../store/useContactPopup";

const ContactPopup = () => {
  const { currentPage, wasManuallyClosed, setWasManuallyClosed } =
    useContactPopup();
  const { i18n } = useTranslation();

  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setVisible(false);
      return;
    }

    if (wasManuallyClosed) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentPage, wasManuallyClosed, isMobile]);

  const handleClose = () => {
    setVisible(false);
    setWasManuallyClosed(true);
  };

  if (isMobile) return null;

  return (
    <div
      className={`${styles.popupWrapper} ${
        visible ? styles.popupVisible : styles.popupHidden
      }`}
    >
      <div className={styles.glassPopup}>
        <button className={styles.close} onClick={handleClose}>
          &times;
        </button>
        <p
          className={styles.popTitle}
          style={i18n.language === "en" ? { marginBottom: "0.5rem" } : {}}
        >
          {i18n.language === "fa" ? "تماس با ما" : "Contact Us"}
        </p>
        <a
          className={styles.link}
          style={i18n.language === "en" ? { marginBottom: "0.3rem" } : {}}
          href="tel:+989123456789"
        >
          021-91017779
        </a>
        <div className={styles.iconGroup}>
          <a href="mailto:info@example.com" title="ایمیل">
            <Mail size={22} strokeWidth={1.5} color="#275ccfff" />
          </a>
          <a
            href="https://wa.me/989123456789"
            target="_blank"
            rel="noreferrer"
            title="واتساپ"
          >
            <FaWhatsapp size={22} strokeWidth={1.5} color="#25D366" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
