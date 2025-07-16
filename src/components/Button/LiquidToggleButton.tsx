import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "../Button/LiquidToggleButton.module.css";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const LiquidToggleButton = () => {
  const { i18n } = useTranslation();
  const savedLanguage = localStorage.getItem("i18nextLng")?.toLocaleUpperCase();

  const [lang, setLang] = useState<"EN" | "FA">(
    (savedLanguage as "EN" | "FA") || "EN"
  );

  const toggle = () => {
    setLang(() => (lang === "EN" ? "FA" : "EN"));
    i18n.changeLanguage(lang === "EN" ? "fa" : "en");
  };
  const color = lang === "EN" ? "#cccccc" : "#63606";

  return (
    <div className={`${classes.wrapper} ${classes.small}`} onClick={toggle}>
      <svg height="40" width="40" className={classes.svg}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
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
          <AnimatePresence mode="wait">
            <>
              <motion.circle
                key={`main-${lang}`}
                cx="60"
                cy="60"
                r="24"
                fill={color}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />

              <motion.circle
                cx="30"
                cy="60"
                r="6"
                fill={color}
                animate={{ x: [0, -2, 2, 0], y: [0, -8, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx="90"
                cy="60"
                r="6"
                fill={color}
                animate={{ x: [0, 2, -2, 0], y: [0, 1.5, -1.5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.6,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx="60"
                cy="30"
                r="4"
                fill={color}
                animate={{ y: [0, -3, 3, 0], x: [0, 10, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx="60"
                cy="90"
                r="6"
                fill={color}
                animate={{ y: [0, 3, -3, 0], x: [0, -5, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
            </>
          </AnimatePresence>
        </g>

        <text
          x="60"
          y="60"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="16"
          fontWeight="bold"
          alignmentBaseline="middle"
          dominantBaseline="middle"
          style={{ pointerEvents: "none" }}
        >
          {t(`${lang === "EN" ? "FA" : "EN"}`)}
        </text>

        <ellipse
          cx="60"
          cy="100"
          rx="16"
          ry="5"
          fill="rgba(0, 0, 0, 0.25)"
          filter="blur(4px)"
        />
      </svg>
    </div>
  );
};

export default LiquidToggleButton;
