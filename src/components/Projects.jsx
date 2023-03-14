import React from "react";
import img from "../assets/blinker mockup.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../assets/github.png"



function Projects() {


  return (
    <section className="projects">
      <div className="row">
        <div className="projects__wrapper">
          <h2>
            Here are some of my <span className="blue">projects:</span>{" "}
          </h2>
          <div className="project__list">
 
            <div className="project">
              <div className="project__wrapper">
                <img src={img} className="project__img" alt="" />
                <div className="project_wrapper--bg"></div>
                <div className="project__description">
                  <h3 className="project__description--title">
                    Car Sales Projects
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
                    <img src={github} alt=""  className="ic__img"/>
                    </a>
                    <a href="" className="project__description--link">
                      <FontAwesomeIcon icon="fa-link"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__wrapper">
                <img src={img} className="project__img" alt="" />
                <div className="project_wrapper--bg"></div>
                <div className="project__description">
                  <h3 className="project__description--title">
                    Car Sales Projects
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
                    <img src={github} alt=""  className="ic__img"/>
                    </a>
                    <a href="" className="project__description--link">
                    <FontAwesomeIcon icon="fa-link"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__wrapper">
                <img src={img} className="project__img" alt="" />
                <div className="project_wrapper--bg"></div>
                <div className="project__description">
                  <h3 className="project__description--title">
                    Car Sales Projects
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
                    <img src={github} alt=""  className="ic__img"/>
                    </a>
                    <a href="" className="project__description--link">
                    <FontAwesomeIcon icon="fa-link"/>
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
