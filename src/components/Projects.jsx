import React from "react";
import game from "../assets/game.png";
import movieheaven from "../assets/movieHeaven.png";
import fakeshop from "../assets/fakeShop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../assets/github.png";

function Projects() {
  return (
    <section id="projects">
      <div className="row">
        <div className="projects__wrapper">
          <h1 className="proj__header" data-aos="fade-up" data-aos-once="true">
            Here are some of my <span className="blue">projects:</span>{" "}
          </h1>
          <div className="project__list">
            <div className="container noselect">
              <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>
                <div id="card">
                  <p id="prompt">
                    {" "}
                    <h4 className="project__description--sub-title">
                    Fake shop Project: <br />
                      Html, Css, JavaScript, React
                    </h4>
                  </p>
                  <img src={fakeshop} className="project__img" alt="" />
                  <div className="title">
                    <div className="project__description--para">
                      An E-Commerce website built using React. Makes use of API
                      calss, and includes a responsive and interactive design.
                    </div>
                    <div>
                      <a
                        href="https://github.com/Abde-T/Fake-shop"
                        className="project__description--link"
                        target={"_blank"}
                      >
                        <img src={github} alt="" className="ic__img" />
                      </a>
                      <a
                        href="https://fake-shop-three.vercel.app/"
                        className="project__description--link"
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon="fa-link" className="ic__img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container noselect">
              <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>
                <div id="card">
                  <p id="prompt">
                    {" "}
                    <h4 className="project__description--sub-title">
                    Movie heaven Project: <br />
                      Html, Css, JavaScript, React
                    </h4>
                  </p>
                  <img src={movieheaven} className="project__img" alt="" />
                  <div className="title">
                    <div className="project__description--para">
                      A web application that fetches and displays movies using
                      OMdbapi The website includes search bar, and a responsive
                      and interactive design.
                    </div>
                    <div>
                      <a
                        href="https://github.com/Abde-T/movie-heaven"
                        className="project__description--link"
                        target={"_blank"}
                      >
                        <img src={github} alt="" className="ic__img" />
                      </a>
                      <a
                        href="https://movie-heaven.vercel.app/"
                        className="project__description--link"
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon="fa-link" className="ic__img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container noselect">
              <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>
                <div id="card">
                  <p id="prompt">
                    {" "}
                    <h4 className="project__description--sub-title"> Car Sales Project:
                    <br />
                      Html, Css, JavaScript, React
                    </h4>
                  </p>
                  <img src={game} className="project__img" alt="" />
                  <div className="title">
                    <div className="project__description--para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nulla, similique unde! Repellendus ipsam iure voluptatibus
                      ex quaerat facere est libero!
                    </div>
                    <div>
                      <a href="" className="project__description--link">
                        <img src={github} alt="" className="ic__img" />
                      </a>
                      <a href="" className="project__description--link">
                        <FontAwesomeIcon icon="fa-link" className="ic__img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
