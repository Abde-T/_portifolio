import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { pj3_features } from "../contants";
import mv from "../assets/mvh.png";
import mvp from "../assets/mvhp.png";
import mvt from "../assets/mnht.png";

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
            className="project_model__exit exit click"
            onClick={() => closeModal(false)}
          />
        </div>
        <header className="section__container header__container">
          <div className="header__content">
            <span className="header__blur-"></span>
            <h1>
              <span>Movie Heaven</span>
            </h1>
            <p>
              A cutting-edge movie streaming application designed for cinematic
              enthusiasts.
            </p>
            <div className="links">
              <Link to="https://movieheaven.vercel.app/" target="_blank">
                <button className="btn--">Check Website</button>
              </Link>
              <Link to="https://github.com/Abde-T/movieheaven" target="_blank">
                <button className="github_btn">
                  <img
                    src="https://ik.imagekit.io/lqn2gvopq/github.png?updatedAt=1704352962522"
                    alt=""
                    className="github-- unselectable"
                    loading="lazy"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="header__image">
            <img
              src={mvp}
              alt="logo"
              className="landing unselectable"
              loading="lazy"
            />
          </div>
        </header>
        <section className="section__container explore__container">
          <div className="explore__header">
            <h2 className="section__header">WEBSITE FEATURES:</h2>
          </div>
          <div className="explore__grid">
            {pj3_features.map((project, index) => (
              <div key={index} className="explore__card-">
                <h4>{project.h1}</h4>
                <p>{project.p}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section__container class__container details_container-">
          <div className="class__image">
            <span className="bg__blur"></span>
            <img
              src={mv}
              alt="class"
              className="class__img-2 unselectable"
              loading="lazy"
            />
          </div>
          <div className="class__content ">
            <h2 className="section__header ">The Movie Heaven website</h2>
            <p>
              Is a premier movie streaming platform. Discover, watch, and
              enjoy a curated collection of the latest blockbuster hits and
              timeless classics. Your gateway to unparalleled cinematic
              experiences awaits.
            </p>
            <Link to="https://movieheaven.vercel.app/">
              <button className="btn--">Check website</button>
            </Link>
          </div>
        </section>
        <div className="laptop_gif ">
          <img
            src={mvt}
            className="gif unselectable"
            alt="class "
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
