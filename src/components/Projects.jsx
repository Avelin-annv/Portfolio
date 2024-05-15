import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import SectionContainer from "./SectionContainer";
import { styles } from "../style";
import { textVariant, fadeIn } from "../utils/motion";
import { github, demo } from "../assets";
import { projects } from "../constants";
const ProjectCard = ({ index, description, name, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-3xl sm:w-[350px] w-full m-6"
      >
        <div className="relative w-full h-[250px] ">
          <img src={image} alt={name} className="rounded-2xl w-full h-full" />
        </div>

        <div className="mt-3">
          <h3 className="font-bold text-lg">{name}</h3>
          <h3 className="text-secondary mt-2">{description}</h3>
        </div>
        <div className="flex flex-row">
          <Link to="https://github.com/Avelin-annv" className="mx-2">
            <img src={github} className="w-6 h-6"></img>
          </Link>
          <Link>
            <img src={demo} className="w-6 h-6 rounded-full"></img>
          </Link>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <motion.div variants={textVariant()} className="mt-4 mb-6">
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="flex flex-wrap mt-8">
        {projects.map((project, idx) => (
          <ProjectCard key={`proj-${idx}`} {...project} index={idx} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
