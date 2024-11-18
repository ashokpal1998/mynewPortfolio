import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  
  bca,
  intermidiat,
  ten,
  
  amazon,
  social,
  latter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  
  
];

const experiences = [
  {
    title: "Bachelor of computer application",
    company_name: "Mahatma Gandhi Kashi Vidyapith, Varanasi . University",
    icon: bca,

    iconBg: "#383E56",
    date: " June 2017 - June 2019",
    points: [
      "I grew up in a village, but after completing my Senior Secondary School, I moved to Varanasi and joined college. I pursued a BCA degree at this college, and it was one of the most amazing and enjoyable times of my life.",
    ],
  },
  {
    title: "Senior Secondary School",
    company_name: "Ram Harsh Shi v Nandan I C Koosa -Jaunpur.UP",
    icon: intermidiat,
    iconBg: "#E6DEDD",
    date: "June 2014 - June 2015",
    points: [
      "I grew up in a village and completed my primary education at this school, studying from classes 2 to 12. It was one of the most memorable and enjoyable times of my life.",
    ],
  },
  {
    title: "Secondary Education",
    company_name: "Ram Harsh Shi v Nandan I C Koosa -Jaunpur.UP",
    icon: ten,
    iconBg: "#383E56",
    date: "June 2012 - June 2013",
    points: [
      "I grew up in a village and completed my primary education at this school, studying from classes 2 to 12. It was one of the most memorable and enjoyable times of my life.",
    ],
  },
];



const projects = [
  {
    name: "amazon",
    description:
      "I have created a clone website of Amazon and I used HTML, CSS which I wrote in my ID VS code..",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/",
  },
  {
    name: "social media platform",
    description:
      "I had created a small project while learning ReactJS, where I used ReactJS and Bootstrap. I had written the code in VS Code.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: social,
    source_code_link: "https://github.com/",
  },
  {
    name: "Latter box",
    description:
      "I created a Letter Box component for my project. It allows users to send and manage messages efficiently, with a clean and user-friendly interface.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: latter,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences,  projects };
