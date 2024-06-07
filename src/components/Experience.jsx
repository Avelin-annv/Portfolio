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
      key={exp.id}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: exp.iconBg }}
      icon={exp.icon}
    >
      <div className="text-white text-xl">
        <h3 className="font-bold">{exp.title}</h3>
        <p className="text-secondary text-xl">{exp.company_name}</p>
        <p> {exp.date}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2 text-justify">
        {exp.points.map((point, idx) => (
          <li key={idx}>{point}</li>
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
