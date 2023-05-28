import css from "../assets/tech/css1.png";
import html from "../assets/tech/html1.png";
import javascript from "../assets/tech/js.png";
import ts from "../assets/tech/ts1.png";
import next from "../assets/tech/next1.png";
import reactjs from "../assets/tech/react.png";
import threejs from "../assets/tech/three.png";
import tailwind from "../assets/tech/tailwind.png";
import redux from "../assets/tech/redux.png";
import Firebase from "../assets/tech/fire.png";
import MongoBD from "../assets/tech/mongodb.png";
import Nodejs from "../assets/tech/nodejs.png";
import Expressjs from "../assets/tech/expressjs.png";


  const technologies = [
    {
      name: "HTML5",
      icon: html,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   /*  {
      name: "TypeScript",
      icon: typescript,
    }, */
    {
      name: "MongoDB",
      icon: MongoBD,
    },
    {
      name: "ExpressJS",
      icon: Expressjs,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "NodeJS",
      icon: Nodejs,
    },
    {
      name: "NextJS",
      icon: next,
    },
    {
      name: "TailwindCss",
      icon: tailwind,
    },
    {
      name: "ThreeJS",
      icon: threejs,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
  ];
  
import ultra from "../assets/ultra.png";
import movieheaven from "../assets/movieHeaven.png";
import fakeshop from "../assets/fakeShop.png";
import chatApp from "../assets/chatapp.png";

  const projects = [
    {
      name: "Fake shop",
      image: fakeshop,
      tech: "Html, Css, JavaScript, React",
      para:'•	Created a captivating and user-centric E-Commerce website utilizing the power of React. Seamlessly integrated with the "Fakestoreapi" through Axios, enabling dynamic retrieval and presentation of product data. Designed an engaging and responsive user interface across various pages, including an enticing landing page, a comprehensive items page showcasing a wide range of products, an immersive product page with detailed information and images, and a streamlined cart page for smooth checkout experiences.',
      github: 'https://github.com/Abde-T/Fake-shop',
      link:'https://fake-shop-three.vercel.app/',

    },
    {
      name: "Movie heaven",
      image: movieheaven,
      tech: " Nextjs, Redux, Firebase, TailwindCss ",
      para:'•	Created an immersive and user-friendly movie application that provides a seamless browsing experience. Leveraging Next.js, Redux, Firebase, and integrating TMDB API to retrieve and showcase movie data dynamically. The advanced pagination functionality provides an effortless navigation experience through the extensive movie collections. ',
      github: 'https://github.com/Abde-T/movieheaven',
      link:'https://movieheaven.vercel.app/',

    },
    {
      name: " Twitter Clone  ",
      image: ultra,
      tech: "Next.js, Redux, Tailwindcss, Firebase",
      para:'•	Created a social media application inspired by Twitter, built with Next.js, Redux, and Firebase. Empowering users with the ability to post tweets, engage in lively discussions through comments, and seamlessly log in to the platform.',
      github: 'https://github.com/Abde-T/socialmedia',
      link:'https://social-media-abde-t.vercel.app/',

    },
    {
      name: " ChatApp  ",
      image: chatApp,
      tech: "Node.js, Expressjs, Socket.io",
      para:'Developed a dynamic and interactive chat application leveraging Node.js and Socket.io. Implemented realtime functionality, enabling users to engage in instant messaging within chat rooms. Incorporated automatic scrolling feature for seamless navigation through the chat history, ensuring a smooth user experience',
      github: 'https://github.com/Abde-T/chat_app',
      link:'https://chatapp-ybq3.onrender.com/',

    },
    
  ];

  export {projects}
  export {technologies};