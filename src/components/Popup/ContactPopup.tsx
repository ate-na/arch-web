import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import styles from "./ContactPopup.module.css";
import { useContactPopup } from "../../store/useContactPopup";
import { aboutData } from "../../data/about";
import { formatWithSpacesFromRight } from "../../util/help";

const ContactPopup = () => {
  const { currentPage, wasManuallyClosed, setWasManuallyClosed } =
    useContactPopup();
  const { t, i18n } = useTranslation();

  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const phoneNumber = aboutData.filter((e) => e.lang === i18n.language)[0]
    .phones[0];
  const email = aboutData.filter((e) => e.lang === i18n.language)[0].email[0];
  const whatsApp = aboutData.filter((e) => e.lang === i18n.language)[0]
    .whatsApp;

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
          {t("Contact Us")}
        </p>
        <a
          className={styles.link}
          style={i18n.language === "en" ? { marginBottom: "0.3rem" } : {}}
          href={`tel:${phoneNumber}`}
        >
          {formatWithSpacesFromRight(phoneNumber, i18n.language)}
        </a>
        <div className={styles.iconGroup}>
          <a href={`mailto:${email}`} title="ایمیل">
            <Mail size={22} strokeWidth={1.5} color="#275ccfff" />
          </a>
          <a
            href={`https://wa.me/${whatsApp}`}
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
