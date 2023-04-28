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
      name: "ReactJS",
      icon: reactjs,
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
      tech: " Nextjs, Redux, Firebase, TailwindCss ",
      para:'A web application that fetches and displays movies using Tmdb, The website, includes search bar and a responsive and interactive design with multiple pages, carousel and user signup and login.',
      github: 'https://github.com/Abde-T/movieheaven',
      link:'https://movieheaven.vercel.app/',

    },
    {
      name: " Social media website / twitter clone  ",
      image: ultra,
      tech: "Next.js, Redux, Tailwindcss, Firebase",
      para:'Developed a social media app with Posting Tweets, Commenting, and logging-in functionalities',
      github: 'https://github.com/Abde-T/socialmedia',
      link:'https://social-media-git-master-abde-t.vercel.app/',

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