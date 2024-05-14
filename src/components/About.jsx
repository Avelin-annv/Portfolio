import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import SectionContainer from "./SectionContainer";
const About = () => {
  return (
    <SectionContainer id="about">
      <motion.div variants={textVariant()} className="mt-4 mb-6">
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 2)}
        className="mt-4 text-secondary leading-[30px] text-xl px-8"
      >
        <p>
          A passionate frontend developer with over 2 years of experience. My
          journey in web development began with a fervent curiosity for crafting
          beautiful and intuitive user experiences.
        </p>
        <p>
          {" "}
          Eager to learn and grow, I immerse myself in the ever-evolving world
          of React.js and JavaScript to stay at the forefront of modern web
          development. With a keen eye for detail and a commitment to
          excellence, I thrive on turning complex problems into elegant
          solutions.
        </p>
        <p>
          I enjoy working closely with cross-functional teams to transform ideas
          into impactful products. Whether it's brainstorming innovative
          features or troubleshooting technical challenges, I approach every
          task with enthusiasm and a can-do attitude.
        </p>
      </motion.p>
    </SectionContainer>
  );
};

export default About;
