import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../assets/github.png";
import { projects } from "../contants";

const ProjectCard = ({ project }) => {
  return (
    <>
      <article className="card" data-aos="fade-right" data-aos-once="true">
        <div>
          <img
            src={project.image}
            className="project__img"
            alt={project.name}
            loading="lazy"
          />
        </div>
        <div className="card_content">
          <span className="card_title">
              {project.name}
          </span>
          <span className="card_subtitle">{project.tech}</span>
          <p className="card_description">{project.para}</p>
          <div className="card_description">
                  <a
                    href={project.github}
                    target={"_blank"}
                    className="project__description--link click"
                  >
                    <img
                      src={github}
                      alt=""
                      className="ic__img-"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href={project.link}
                    className="project__description--link click"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon icon="fa-link" className="ic__img--" />
                  </a>
                </div>
        </div>
      </article>
    </>
  );
};

function Projects() {
  return (
    <section id="projects">
      <div className="row">
        <div className="projects__wrapper">
          <h1 className="proj__header" data-aos="fade-up" data-aos-once="true">
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
