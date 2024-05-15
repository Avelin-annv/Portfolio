import React from "react";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import { technologies } from "../constants";
import BallCanvas from "./BallCanvas";
import { styles } from "../style";

const Tech = () => {
  return (
    <SectionContainer>
      <motion.div variants={textVariant()} className="mt-4 mb-6">
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Tech;
