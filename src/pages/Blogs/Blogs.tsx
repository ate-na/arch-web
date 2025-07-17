import React from "react";
import { motion } from "framer-motion";
import styles from "./Blogs.module.css";
const lines = [
  "M20 20 H340",
  "M20 200 H340",
  "M20 20 V200",
  "M340 20 V200",
  "M20 110 H340",
  "M100 20 V110",
  "M260 110 V200",
];

const duration = 2;

const BlogBox: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.svg
          viewBox="0 0 360 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
        >
          {lines.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="#111"
              strokeWidth={2}
              strokeLinecap="square"
              strokeDasharray="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.3,
                delay: i * 0.35,
              }}
            />
          ))}
        </motion.svg>

        <div className={styles.content}>
          <h1 className={styles.title}>Still In Progress</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogBox;
