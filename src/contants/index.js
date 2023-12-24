import css from "../assets/tech/css1.png";
import html from "../assets/tech/html1.png";
import javascript from "../assets/tech/js.png";
import next from "../assets/tech/next1.png";
import reactjs from "../assets/tech/react.png";
import tailwind from "../assets/tech/tailwind.png";
import MongoBD from "../assets/tech/mongodb.png";
import Nodejs from "../assets/tech/nodejs.png";
import Expressjs from "../assets/tech/expressjs.png";
import mui from "../assets/tech/mui.png";
import redux from "../assets/tech/redux.png";
import Python from "../assets/tech/python.png";
import kivy from "../assets/tech/kivy.png";
import pong from "../assets/pong.gif";

const technologies = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Python", icon: Python },
  { name: "MongoDB", icon: MongoBD },
  { name: "ExpressJS", icon: Expressjs },
  { name: "ReactJS", icon: reactjs },
  { name: "NodeJS", icon: Nodejs },
  { name: "NextJS", icon: next },
  { name: "TailwindCss", icon: tailwind },
];

import rmp from "../assets/rmp.gif";

const project1tech = [
  { name: "MongoDB", image: MongoBD },
  { name: "ExpressJS", image: Expressjs },
  { name: "ReactJS", image: reactjs },
  { name: "NodeJS",image: Nodejs },
  { name: "CSS3", image: css },
  { name: "MUI",image: mui },
  { name: "Redux", image: redux },
];
const project1 = [
  {
    name: "Review My Project (RMP)",
    image: rmp,
    para: "Developed a high-performance website using the MERN stack, allowing developers to create an account and upload their Projects for review, providing a platform for showcasing their skills and receiving feedback from peers.",
    github: "https://github.com/Abde-T/rmp",
    link: "https://rmp-abde-t.vercel.app/",
  },
];

const project2tech = [
  {name: "Python", image: Python },
  {name: "kivy", image: kivy },
];
const project2 = [
  {
    name: "Pong Game",
    image: pong,
    github: "https://github.com/Abde-T/rmp",
    link: "https://rmp-abde-t.vercel.app/",
  },
];
const pj1_features = [
  {
    h1: "User Authentication",
    p: " Implemented secure user authentication, allowing users to register, log in, and securely authenticate their identity.",
  },
  {
    h1: "CRUD Functionality",
    p: " Developed robust CRUD (Create, Read, Update, Delete) operations, enabling users to post, edit, and delete their projects seamlessly.",
  },
  {
    h1: "Interactivity with Likes and Comments",
    p: " Integrated features for users to express appreciation through likes and engage in discussions through comments, promoting community interaction.",
  },
  {
    h1: "Pagination for Enhanced User Experience",
    p: "Implemented pagination for efficient content navigation, enhancing the user experience, especially as the volume of content grows.",
  },
  {
    h1: "Responsive and Dynamic Design",
    p: " Ensured a responsive design, making the website accessible and visually appealing across various devices. Dynamic elements provide a modern and engaging user interface.",
  },
  {
    h1: "Performance Optimization",
    p: " Implemented compression and caching middleware to optimize website performance. This results in faster loading times and improved overall responsiveness.",
  },
  {
    h1: "Tech Stack Mastery",
    p: "Showcased proficiency in the MERN stack, utilizing MongoDB for the database, Express.js for server-side logic, React for the frontend, and Node.js for server-side execution.",
  },
  {
    h1: "Version Control and Deployment",
    p: "Utilized version control (Github) for efficient collaboration and deployed the application to a hosting platform for public access.",
  },
];

const pj2_features = [
  {
    h1: "Classic Pong Gameplay",
    p: " Revitalized the classic Pong game, providing users with a nostalgic gaming experience while incorporating modern design principles for a visually appealing interface.",
  },
  {
    h1: "Touch Controls",
    p: "Utilized Kivy's touch input features to create responsive and intuitive controls, allowing users to interact seamlessly with the game on both mobile devices and tablets.",
  },
  {
    h1: "Real-time Score Tracking",
    p: "Implemented real-time score tracking, providing instant feedback to players on their performance and progress within the game.",
  },
  {
    h1: "Python and Kivy Expertise",
    p: "Showcased proficiency in Python programming and Kivy framework, leveraging the framework's capabilities to create a cross-platform gaming application.",
  },
  {
    h1: "Innovative AI Implementation",
    p: "The incorporation of an AI opponent adds an innovative touch to the classic Pong game, demonstrating skills in artificial intelligence and game development.",
  },
];



export {
  project1,
  project2,
  technologies,
  pj2_features,
  pj1_features,
  project1tech,
  project2tech,
};
