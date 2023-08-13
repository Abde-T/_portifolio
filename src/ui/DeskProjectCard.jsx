import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../assets/github.png";
const ProjectCard = ({ project }) => {
  return (
    <section
      className="desk_card_container"
      data-aos="fade-right"
      data-aos-once="true"
    >
      <div className="desk_card_details">
        <span className="">{project.name}</span>
        <span className="">{project.role}</span>
        <span className="">{project.tech}</span>
        <p className="">{project.para}</p>
        <div className="">
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
      <div className="desk_card">
        <div className="blob"></div>
        <img
          src={project.image}
          className="desk_project__img"
          alt={project.name}
          loading="lazy"
        />

        <div class="card1">
          <div class="item item--1">
          <img
          src={project.image1}
          className="sub_project__img"
          alt={project.name}
          loading="lazy"
        />
          </div>
          <div class="item item--1">
          <img
          src={project.image2}
          className="sub_project__img"
          alt={project.name}
          loading="lazy"
        />
          </div>
          <div class="item item--1">
          <img
          src={project.image3}
          className="sub_project__img"
          alt={project.name}
          loading="lazy"
        />

          </div>
          <div class="item item--1">
          <img
          src={project.image4}
          className="sub_project__img"
          alt={project.name}
          loading="lazy"
        />

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
