import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../assets/github.png";
import Project2Modal from "./Project2Modal";
import { project2tech } from "../contants";

const Project2Card = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="card " data-aos="zoom-out-right" data-aos-once="true" onClick={openModalClick}>
        <div>
          <img
            src={project.image}
            className="project__img pj2-img unselectable"
            alt={project.name}
            loading="lazy"
            onClick={openModalClick}
          />
        </div>
        <div className="card_content">
          <span className="card_title " onClick={openModalClick}>
            {project.name}
          </span>
          <div className="card_subtitle">
            {project2tech.map((project) => (
              <div className="language " key={project.name}>
                <div className="language__img--wrapper">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="card_tech unselectable"
                    loading="lazy"
                  />
                </div>
                <span className="language__name"> {project.name}</span>
              </div>
            ))}
          </div>
          <button className="pj_button" onClick={openModalClick}> See More </button>
        </div>
      </div>
      {openModal && <Project2Modal closeModal={() => setOpenModal(false)} />}
    </>
  );
};

export default Project2Card;
