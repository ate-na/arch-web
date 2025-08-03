import { FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PhonePopupModal.module.css";
import { useTranslation } from "react-i18next";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const PhonePopupModal = ({ isOpen, onClose }: Props) => {
  const { i18n } = useTranslation();

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

            <h2 className={styles.title}>
              {i18n.language === "fa" ? "تماس با ما" : "Contact Us"}
            </h2>
            <p className={styles.phoneNumber}>
              {i18n.language === "fa" ? "۰۹۱۲-۳۴۵-۶۷۸۹" : "0912-345-6789"}
            </p>

            <div className={styles.icons}>
              <a
                href="https://wa.me/09123456789"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={28} color="#25D366" />
              </a>
              <a href="mailto:example@mail.com" aria-label="Email">
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
