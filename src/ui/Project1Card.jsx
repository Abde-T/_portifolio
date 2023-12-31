import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project1Modal from "./Project1Modal";
import { project1tech } from "../contants";

const Project1Card = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="card " data-aos="zoom-out-right" data-aos-once="true">
        <div>
          <img
            src={project.image}
            className="project__img unselectable"
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
            {project1tech.map((project) => (
              <div className="language language-" key={project.name}>
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
        </div>
      </div>
      {openModal && <Project1Modal closeModal={() => setOpenModal(false)} />}
    </>
  );
};

export default Project1Card;
