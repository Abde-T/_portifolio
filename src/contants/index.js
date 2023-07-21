import css from "../assets/tech/css1.png";
import html from "../assets/tech/html1.png";
import javascript from "../assets/tech/js.png";
import next from "../assets/tech/next1.png";
import reactjs from "../assets/tech/react.png";
import tailwind from "../assets/tech/tailwind.png";
import MongoBD from "../assets/tech/mongodb.png";
import Nodejs from "../assets/tech/nodejs.png";
import Expressjs from "../assets/tech/expressjs.png";

const technologies = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "MongoDB", icon: MongoBD },
  { name: "ExpressJS", icon: Expressjs },
  { name: "ReactJS", icon: reactjs },
  { name: "NodeJS", icon: Nodejs },
  { name: "NextJS", icon: next },
  { name: "TailwindCss", icon: tailwind },
];

import movieheaven from "../assets/movieHeaven.png";
import fakeshop from "../assets/fakeShop.png";
import rmp from '../assets/rmp.png'

const projects = [
  {
    name: "Fake shop",
    image: fakeshop,
    tech: "Html, Css, JavaScript, React",
    para: ' High-performance e-commerce website using React, integrating seamlessly with the "Fakestoreapi" through Axios to bring dynamic and up-to-date product data to users. Implemented responsive design principles and optimized loading times for all pages, resulting in a faster browsing experience.',
    github: "https://github.com/Abde-T/Fake-shop",
    link: "https://fake-shop-three.vercel.app/",
  },
  {
    name: "Movie heaven",
    image: movieheaven,
    tech: " Nextjs, Redux, Firebase, TailwindCss ",
    para: " A dynamic and visually stunning movie application using Next.js, Redux, Firebase, and TMDB API that provides seamless browsing experience for all users Implemented advanced pagination functionality allowing easy navigation through the extensive movie collections.",
    github: "https://github.com/Abde-T/movieheaven",
    link: "https://movieheaven.vercel.app/",
  },
  {
    name: "Review My Project",
    image: rmp,
    tech: "MERN stack",
    para: 'Developed a high-performance website using the MERN stack, allowing developers to create an account and upload their Projects for review, providing a platform for showcasing their skills and receiving feedback from peers.',
    github: "https://github.com/Abde-T/rmp",
    link: "https://rmp-abde-t.vercel.app/",
  },

];
export { projects };
export { technologies };
