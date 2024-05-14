import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../style";

const SectionContainer = ({ children, id }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative z-o mx-auto ${styles.padding}`}
    >
      {<span id={id}>&nbsp;</span>}
      {children}
    </motion.section>
  );
};

export default SectionContainer;
