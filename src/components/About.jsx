import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import SectionContainer from "./SectionContainer";
import { ABOUT } from "../constants";
const About = () => {
  return (
    <SectionContainer id="about">
      <motion.div variants={textVariant()} className="mt-4 mb-6">
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "tween", 0.5, 1)}
        className="mt-4 text-secondary leading-[30px] text-xl px-8 text-justify"
      >
        {ABOUT.map((item, idx) => (
          <p className="my-2" key={idx}>
            {item}
          </p>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default About;
