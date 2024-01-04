const fakeShop = "https://ik.imagekit.io/lqn2gvopq/pj3.gif?updatedAt=1704353426222"
const rmp = 'https://ik.imagekit.io/lqn2gvopq/rmp.gif?updatedAt=1704353497565'
const css = 'https://ik.imagekit.io/lqn2gvopq/css1.png?updatedAt=1704352972985'
const html = 'https://ik.imagekit.io/lqn2gvopq/html1.png?updatedAt=1704352988720'
const javascript = 'https://ik.imagekit.io/lqn2gvopq/js.png?updatedAt=1704352996156'
const next = 'https://ik.imagekit.io/lqn2gvopq/next1.png?updatedAt=1704353007729'
const reactjs = 'https://ik.imagekit.io/lqn2gvopq/react.png?updatedAt=1704353019160'
const tailwind = 'https://ik.imagekit.io/lqn2gvopq/tailwind.png?updatedAt=1704353024228'
const MongoBD = 'https://ik.imagekit.io/lqn2gvopq/mongodb.png?updatedAt=1704353002585'
const Nodejs = 'https://ik.imagekit.io/lqn2gvopq/nodejs.png?updatedAt=1704353014426'
const Expressjs = 'https://ik.imagekit.io/lqn2gvopq/expressjs.png?updatedAt=1704352981173'
const mui = 'https://ik.imagekit.io/lqn2gvopq/mui.png?updatedAt=1704353008343'
const redux = 'https://ik.imagekit.io/lqn2gvopq/redux.png?updatedAt=1704353023216'
const Python = 'https://ik.imagekit.io/lqn2gvopq/python.png?updatedAt=1704353016286'
const kivy = 'https://ik.imagekit.io/lqn2gvopq/kivy.png?updatedAt=1704352998604'
const pong = 'https://ik.imagekit.io/lqn2gvopq/pong.gif?updatedAt=1704353477931'


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

const project3 = [
  {
    name: "Fake Shop",
    image: fakeShop,
    github: "https://github.com/Abde-T/Fake-shop",
    link: "https://fake-shop-three.vercel.app/",
  },
];

const project3tech = [
  { name: "HTML5", image: html },
  { name: "CSS3", image: css },
  { name: "JavaScript", image: javascript },
  { name: "ReactJS", image: reactjs },
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

const pj3_features = [
  {
    h1: "React Framework",
    p: " Implemented the project using the React framework, ensuring a modular and efficient front-end structure.",
  },
  {
    h1: "Fake Store API Integration",
    p: "Utilized the Fake Store API to dynamically fetch and display product information, including images, descriptions, and prices, offering users a realistic shopping experience.",
  },
  {
    h1: "Pagination",
    p: "Implemented a robust pagination system, enabling users to navigate seamlessly through different product pages, improving overall user experience.",
  },
  {
    h1: "Shopping Cart Functionality",
    p: "Developed a user-friendly shopping cart feature that allows users to add, remove, and view selected items. The cart displays a summary of products along with their individual prices and a total amount.",
  },
  {
    h1: "Responsive Design",
    p: "Ensured a responsive design to provide a consistent and visually appealing experience across various devices, including desktops, tablets, and mobile phones.",
  },
];



export {
  project1,
  project2,
  project3,
  technologies,
  pj2_features,
  pj1_features,
  project1tech,
  project2tech,
  project3tech,
  pj3_features
};
