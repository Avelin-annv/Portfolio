import React from "react";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import { technologies } from "../constants";
import BallCanvas from "./BallCanvas";
import { styles } from "../style";

const Tech = () => {
  return (
    <SectionContainer id="skills">
      {/* <motion.div variants={textVariant()} className="mt-4 mb-6">
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div> */}

      <div className="mx-auto">
        <motion.div className="mt-4 mb-6" variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Skills</h2>
        </motion.div>
        <motion.div className=" bg-black-100 p-8 rounded-3xl flex flex-wrap py-9">
          {technologies.map((tech) => (
            <div
              className="w-24 h-24 border-white rounded-full border-double border-4 m-2 mx-auto my-4"
              key={tech.id}
            >
              <img src={tech.icon} className="rounded-full" />
              <span>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Tech;
