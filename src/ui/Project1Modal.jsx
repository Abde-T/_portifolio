import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pj1 from "../assets/pj1.gif";
import { Link } from "react-router-dom";
import { pj1_features } from "../contants";
import rmpPhone from "../assets/rmpPhone.gif";
import laptop from "../assets/laptop.gif";
import github from "../assets/github.png";

function ProjectModal({ closeModal }) {
  return (
    <div className="project_modal">
      <div
        className="modal__container "
        data-aos="fade-left"
        data-aos-once="true"
      >
         <div className="modal_exit">
          <FontAwesomeIcon
            icon="fa-times"
            className="project_model__exit click"
            onClick={() => closeModal(false)}
          />
        </div>
        <header className="section__container header__container">
          <div className="header__content">
            <span className="bg__blur"></span>
            <span className="bg__blur header__blur"></span>
            <h4> Review - My - Project</h4>
            <h1>
              <span>RMP</span> MERN CRUD Website
            </h1>
            <p>
              A full-stack web application developed using the MERN (MongoDB,
              Express.js, React, Node.js) stack. It serves as a platform for
              users to share and evaluate projects, fostering a collaborative
              environment for feedback and improvement.
            </p>
            <div className="links">
              <Link to="https://rmp-abde-t.vercel.app/">
                <button className="btn">Check Website</button>
              </Link>
              <Link to="https://github.com/Abde-T/rmp">
                <button className="github_btn">
                  <img src={github} alt="" className="github" />
                </button>
              </Link>
            </div>
          </div>
          <div className="header__image">
            <img src={pj1} alt="logo" className="landing" />
          </div>
        </header>
        <section className="section__container explore__container">
          <div className="explore__header">
            <h2 className="section__header">WEBSITE FEATURES:</h2>
          </div>
          <div className="explore__grid">
            {pj1_features.map((project, index) => (
              <div key={index} className="explore__card">
                <h4>{project.h1}</h4>
                <p>{project.p}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section__container class__container details_container">
          <div className="class__image">
            <span className="bg__blur"></span>
            <img src={rmpPhone} alt="class" className="class__img-1" />
          </div>
          <div className="class__content ">
            <h2 className="section__header ">The RMP CRUD website</h2>
            <p>
              Provides a seamless and engaging user experience, facilitating
              project sharing, feedback, and collaboration within the user
              community. The implementation of advanced features,
              responsiveness, and performance optimizations demonstrates a
              commitment to delivering high-quality web applications.
            </p>
            <Link to="https://rmp-abde-t.vercel.app/">
              <button className="btn">Check website</button>
            </Link>
          </div>
        </section>
        <div className="laptop_gif ">
          <img src={laptop} alt="class " />
        </div>
        <span className="bg__blur"></span>
        
      </div>
    </div>
  );
}

export default ProjectModal;
