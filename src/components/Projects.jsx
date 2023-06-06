import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../assets/github.png";
import { projects } from "../contants";

const ProjectCard = ({ project }) => {
  return (
    <div className="card" data-aos="fade-right" data-aos-once="true">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img
              src={project.image}
              className="project__img"
              alt={project.name}
              loading="lazy"
            />
            <strong>
              <span className="blue">{project.name}</span>
            </strong>
            {project.tech}
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>

          <div className="front-content">
            <small className="badge">
              <div className="project__description--para">
                {project.para}
              </div>
            </small>
            <div className="description">
              <div className="card-footer">
                <div>
                  <a
                    href={project.github}
                    target={"_blank"}
                    className="project__description--link click"
                  >
                    <img src={github} alt="" className="ic__img-" loading="lazy"/>
                  </a>
                  <a
                    href={project.link}
                    className="project__description--link click"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon
                      icon="fa-link"
                      className="ic__img--"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



function Projects() {
  return (
    <section id="projects">
      <div className="row">
        <div className="projects__wrapper">
          <h1
            className="proj__header"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Here are some of my <span className="blue">projects:</span>{" "}
          </h1>
          <div className="project__list">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;