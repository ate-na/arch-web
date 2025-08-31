import React from "react";
import { motion } from "framer-motion";
import classes from "./Loading.module.css";
import { t } from "i18next";

const Loading: React.FC = () => {
  return (
    <div className={classes.container}>
      {/* Spinner */}
      <motion.div
        className={classes.spinner}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {/* Text under spinner */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.message}
      >
        {t("Loading...")}
      </motion.p>
    </div>
  );
};

export default Loading;
