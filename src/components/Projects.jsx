import React from "react";
import img from "../assets/blinker mockup.png";
import movieheaven from "../assets/movieHeaven.png";
import fakeshop from "../assets/fakeShop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../assets/github.png";

function Projects() {
  return (
    <section className="projects">
      <div className="row">
        <div className="projects__wrapper">
          <h1 className="proj__header" data-aos="fade-up"  data-aos-once="true">
            Here are some of my <span className="blue">projects:</span>{" "}
          </h1>
          <div className="project__list">
            <div className="project" data-aos="fade-left"  data-aos-once="true">
              <div className="project__wrapper">
                <img src={fakeshop} className="project__img" alt="" />
                <div className="project_wrapper--bg"></div>
                <div className="project__description">
                  <h3 className="project__description--title">
                    Fake shop Project
                  </h3>
                  <h4 className="project__description--sub-title">
                    Html, Css, JavaScript, React
                  </h4>
                  <p className="project__description--para">
                    An E-Commerce website built using React. Makes use of API
                    calss, and includes a responsive and interactive
                    design.
                  </p>
                  <div className="project__description--links">
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
                      <FontAwesomeIcon icon="fa-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project" data-aos="fade-right"  data-aos-once="true">
              <div className="project__wrapper">
                <img src={movieheaven} className="project__img" alt="" />
                <div className="project_wrapper--bg"></div>
                <div className="project__description">
                  <h3 className="project__description--title">
                    Movie heaven Project
                  </h3>
                  <h4 className="project__description--sub-title">
                    Html, Css, JavaScript, React
                  </h4>
                  <p className="project__description--para">
                    A web application that fetches and displays movies using OMdbapi
                    The website includes search bar, and a responsive and interactive
                    design.
                  </p>
                  <div className="project__description--links">
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
                      <FontAwesomeIcon icon="fa-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project" data-aos="fade-up"  data-aos-once="true">
              <div className="project__wrapper">
                <img src={img} className="project__img" alt="" />
                <div className="project_wrapper--bg"></div>
                <div className="project__description">
                  <h3 className="project__description--title">
                    Car Sales Project
                  </h3>
                  <h4 className="project__description--sub-title">
                    Html, Css, JavaScript
                  </h4>
                  <p className="project__description--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla, similique unde! Repellendus ipsam iure voluptatibus
                    ex quaerat facere est libero!
                  </p>
                  <div className="project__description--links">
                    <a href="" className="project__description--link">
                      <img src={github} alt="" className="ic__img" />
                    </a>
                    <a href="" className="project__description--link">
                      <FontAwesomeIcon icon="fa-link" />
                    </a>
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
