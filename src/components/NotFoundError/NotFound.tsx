import React from "react";
import { motion } from "framer-motion";
import classes from "../NotFoundError/NotFound.module.css";

const NotFound: React.FC = () => {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className={classes.container}>
      <div className={classes.bubbles}>
        <motion.div
          className={classes.bubble2}
          animate={{ y: [30, -50, 30], x: [0, -60, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
        <motion.div
          className={classes.bubble}
          animate={{ y: [-60, 60, -60], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.div
          className={classes.bubble}
          animate={{ y: [-40, 40, -40], x: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.div
          className={classes.bubble2}
          animate={{ y: [70, -50, 70], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className={classes.arch404}
      >
        404
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className={classes.divider}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={classes.message}
      >
        این صفحه یافت نشد
      </motion.p>
      <motion.button
        onClick={goHome}
        className={classes.button}
        whileTap={{ scale: 0.95 }}
        aria-label="بازگشت به خانه"
      >
        بازگشت به خانه
        <span className={classes.lines} />
      </motion.button>
    </div>
  );
};

export default NotFound;
