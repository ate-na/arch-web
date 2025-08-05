import { FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PhonePopupModal.module.css";
import { useTranslation } from "react-i18next";
import { aboutData } from "../../data/about";
import { t } from "i18next";
import { formatWithSpacesFromRight } from "../../util/help";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const PhonePopupModal = ({ isOpen, onClose }: Props) => {
  const { i18n } = useTranslation();

  const phoneNumber = aboutData.filter((e) => e.lang === i18n.language)[0]
    .phones[0];
  const email = aboutData.filter((e) => e.lang === i18n.language)[0].email[0];
  const whatsApp = aboutData.filter((e) => e.lang === i18n.language)[0]
    .whatsApp;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>

            <h2 className={styles.title}>{t("Contact Us")}</h2>
            <p className={styles.phoneNumber}>
              <a href={`tel:${phoneNumber}`}>
                {formatWithSpacesFromRight(phoneNumber, i18n.language)}
              </a>
            </p>

            <div className={styles.icons}>
              <a
                href={`https://wa.me/${whatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={28} color="#25D366" />
              </a>
              <a href={`mailto:${email}`} aria-label="Email">
                <Mail size={22} strokeWidth={1.5} color="#275ccfff" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PhonePopupModal;
