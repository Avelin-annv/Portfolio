import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  diario,
  codeEditor,
  blink,
  foodApp,
  blabble,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    id: "001",
    name: "HTML 5",
    icon: html,
  },
  { id: "002", name: "CSS 3", icon: css },
  { id: "003", name: "JavaScript", icon: javascript },

  {
    id: "004",
    name: "React JS",
    icon: reactjs,
  },
  {
    id: "005",
    name: "Redux",
    icon: redux,
  },
  {
    id: "006",
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: "007",
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: "008",
    name: "MongoDB",
    icon: mongodb,
  },

  {
    id: "009",
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    id: "exp-001",
    title: "Frontend developer",
    company_name: "Tata Consultancy Services",
    iconBg: "#383E56",
    date: "Nov 2020 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    id: "exp-002",
    title: "Software intern",
    company_name: "Tata Consultancy Services",
    iconBg: "#E6DEDD",
    date: "May 2019 - July 2019",
    points: [
      "Worked as a project intern at the Robotics and Cognitive Solution lab.",
      "Implemented CNN and RNN networks for developing a machine-learning model for extracting invoice information for a leading logistics company.",
    ],
  },
];

const projects = [
  {
    id: "p001",
    name: "Diario",
    description:
      "A MERN stack application that serves as a digital counterpart of Diary .Allows users to create and save notes in different formats.",

    image: diario,
    source_code_link: "https://github.com/",
  },
  {
    id: "p002",
    name: "Blink",
    description:
      "A web application build using React that allows users to search for movies and shows.",

    image: blink,
    source_code_link: "https://github.com/",
  },
  {
    id: "p003",
    name: "Blabble",
    description:
      "A MERN stack chat application with real-time messaging functionality using SOCKET-IO.",

    image: blabble,
    source_code_link: "https://github.com/",
  },
  {
    id: "p004",
    name: "Code Editor",
    description:
      "A real-time collaborative code editor that compiles 40+ languages.",

    image: codeEditor,
    source_code_link: "https://github.com/",
  },
  {
    id: "p005",
    name: "Food ordering app",
    description: "A food ordering application build using React. ",

    image: foodApp,
    source_code_link: "https://github.com/",
  },
];
export const SOCIAL_LINKS = {
  linkedIn: "https://www.linkedin.com/in/avelin-ann-49aa56187/",
  github: "https://github.com/Avelin-annv",
};

export { technologies, experiences, projects };
