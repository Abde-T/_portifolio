import css from "../assets/tech/css1.png";
import html from "../assets/tech/html1.png";
import javascript from "../assets/tech/js.png";
import ts from "../assets/tech/ts1.png";
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
import ultra from "../assets/ultra.png";
import movieheaven from "../assets/movieHeaven.png";
import fakeshop from "../assets/fakeShop.png";
import chatApp from "../assets/chatapp.png";
import carcatalogue from "../assets/carcatalogue.png";
const projects = [
  {
    name: " Car Catalogue   ",
    image: carcatalogue,
    tech: "Nextjs 13, Typescript, TailwindCSS",
    para: "•Developed and implemented a modern web application utilizing Next.js 13, TypeScript, and Tailwind CSS, providing advanced search functionality with filtering capabilities, resulting in a user-friendly experience and increased customer engagement.",
    github: "https://github.com/Abde-T/carcatalogue",
    link: "https://carcatalogue.vercel.app/",
  },
  {
    name: "Fake shop",
    image: fakeshop,
    tech: "Html, Css, JavaScript, React",
    para: 'Developed a high-performance e-commerce website using React, integrating seamlessly with the "Fakestoreapi" through Axios to bring dynamic and up-to-date product data to users. Implemented responsive design principles and optimized loading times for all pages, resulting in a faster browsing experience and increased customer satisfaction.',
    github: "https://github.com/Abde-T/Fake-shop",
    link: "https://fake-shop-three.vercel.app/",
  },
  {
    name: "Movie heaven",
    image: movieheaven,
    tech: " Nextjs, Redux, Firebase, TailwindCss ",
    para: "Developed a dynamic and visually stunning movie application using Next.js, Redux, Firebase, and TMDB API that provides seamless browsing experience for all users Implemented advanced pagination functionality to allow easy navigation through the extensive movie collections.",
    github: "https://github.com/Abde-T/movieheaven",
    link: "https://movieheaven.vercel.app/",
  },
  {
    name: " Twitter Clone  ",
    image: ultra,
    tech: "Next.js, Redux, Tailwindcss, Firebase",
    para: "Created a social media application inspired by Twitter, built with Next.js, Redux, and Firebase. Empowering users with the ability to post tweets, engage in lively discussions through comments, and seamlessly log in to the platform.",
    github: "https://github.com/Abde-T/socialmedia",
    link: "https://social-media-abde-t.vercel.app/",
  },
  {
    name: " ChatApp  ",
    image: chatApp,
    tech: "Node.js, Expressjs, Socket.io",
    para: "Engineered a cutting-edge chat application in MERN stack, utilizing Node.js and Socket.io to deliver instantaneous messaging capabilities for users across multiple chat rooms, resulting in improved user engagement and satisfaction.",
    github: "https://github.com/Abde-T/chat_app",
    link: "https://chatapp-ybq3.onrender.com/",
  },
];
export { projects };
export { technologies };
