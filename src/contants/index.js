import css from "../assets/tech/css1.png";
import html from "../assets/tech/html1.png";
import javascript from "../assets/tech/js.png";
import ts from "../assets/tech/ts1.png";
import next from "../assets/tech/next1.png";
import reactjs from "../assets/tech/react.png";
import threejs from "../assets/tech/three.png";



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
   /*  {
      name: "TypeScript",
      icon: typescript,
    }, */
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
import game from "../assets/game.png";
import ultra from "../assets/ultra.png";
import movieheaven from "../assets/movieHeaven.png";
import fakeshop from "../assets/fakeShop.png";

  const projects = [
    {
      name: "Fake shop",
      image: fakeshop,
      tech: "Html, Css, JavaScript, React",
      para:'An E-Commerce website built using React. It Makes use of API calls, and includes a responsive and interactive design.',
      github: 'https://github.com/Abde-T/Fake-shop',
      link:'https://fake-shop-three.vercel.app/',

    },
    {
      name: "Movie heaven",
      image: movieheaven,
      tech: " Html, Css, JavaScript, React",
      para:'A web application that fetches and displays movies using OMdbapi, The website, includes search bar and a responsive and interactive design.',
      github: 'https://github.com/Abde-T/movie-heaven',
      link:'https://movie-heaven.vercel.app/',

    },
    {
      name: " NFT Marketplace ",
      image: ultra,
      tech: "Html, Css, JavaScript, React",
      para:'Transformed a static single page application to an interactive user interface. Includes real time API data fetching with skeleton loading states, pagination, and dynamic routing.',
      github: 'https://github.com/Abde-T/Abde-internship/tree/Abde-animations',
      link:'https://ultraverse-gamma.vercel.app/',

    },
    {
      name: "open world game",
      image: game,
      tech: "React three fiber, React three canon",
      para:' A simple open world-game made with React three fiber and cannon.js physics engine.',
      github: 'https://github.com/Abde-T/car-game',
      link:'https://car-game-sigma.vercel.app/',

    },
    
  ];

  export {projects}
  export {technologies};