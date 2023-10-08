import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../assets/github.png";
const ProjectCard = ({ project }) => {
  return (
    <article className="card" data-aos="zoom-out-right" data-aos-once="true">
      <div>
        <img
          src={project.image}
          className="project__img"
          alt={project.name}
          loading="lazy"
        />
      </div>
      <div className="card_content" >
        <span className="card_title " >{project.name}</span>
        <span className="card_subtitle">{project.tech}</span>
        <p className="card_description">{project.para}</p>
        <div className="card_description">
          <a
            href={project.github}
            target={"_blank"}
            className="project__description--link click"
          >
            <img src={github} alt="" className="ic__img-" loading="lazy" />
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
  );
};

export default ProjectCard;
