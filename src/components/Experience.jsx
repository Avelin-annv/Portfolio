import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import SectionContainer from "./SectionContainer";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";
import { styles } from "../style";
const ExperienceCard = (exp) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: exp.iconBg }}
      iconOnClick={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={exp.icon}
            alt={exp.company_name}
            className="w-[60%] h=[60%] object-contain"
          />
        </div>
      }
    >
      <div className="text-white text-xl">
        <h3 className="font-bold">{exp.title}</h3>
        <p className="text-secondary text-xl">{exp.company_name}</p>
        <p> {exp.date}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {exp.points.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <SectionContainer>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <VerticalTimeline>
        {experiences.map((exp) => ExperienceCard(exp))}
      </VerticalTimeline>
    </SectionContainer>
  );
};

export default Experience;
