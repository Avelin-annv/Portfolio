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
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="mx-auto lg:mx-1 my-2"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-3xl md:w-[350px] w-full lg:m-6 "
      >
        <div className="relative w-full h-[250px] ">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="rounded-2xl w-full h-full "
          />
        </div>

        <div className="mt-3">
          <h3 className="font-bold text-lg">{name}</h3>
          <h3 className="text-secondary mt-2 min-h-[85px]">{description}</h3>
        </div>
        <div className="flex flex-row mt-2">
          <Link to="https://github.com/Avelin-annv" className="mx-2">
            <img src={github} loading="lazy" className="w-6 h-6"></img>
          </Link>
          <Link>
            <img
              src={demo}
              loading="lazy"
              className="w-6 h-6 rounded-full"
            ></img>
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
      <p className="my-2 text-xl text-secondary">
        Some of the personal projects that I've worked on{" "}
      </p>
      <div className="flex flex-wrap mt-8 ">
        {projects.map((project, idx) => (
          <ProjectCard key={`proj-${project.id}`} {...project} index={idx} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
