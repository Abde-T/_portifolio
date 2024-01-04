import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { pj3_features } from "../contants";


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
            <span className="bg__blur"></span>
            <span className="bg__blur header__blur-"></span>
            <h1>
              <span>Fake Shop</span>
            </h1>
            <p>
              A fully functional e-commerce website, leveraging
              React and integrating the Fake Store API to showcase a variety of
              products. The website provides an intuitive user interface for
              browsing, selecting, and managing products in a virtual shopping
              cart.
            </p>
            <div className="links">
              <Link to="https://fake-shop-three.vercel.app/" target="_blank">
                <button className="btn-">Check Website</button>
              </Link>
              <Link to="https://github.com/Abde-T/Fake-shop" target="_blank">
                <button className="github_btn">
                  <img
                    src='https://ik.imagekit.io/lqn2gvopq/github.png?updatedAt=1704352962522'
                    alt=""
                    className="github- unselectable"
                    loading="lazy"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="header__image">
            <img
              src='https://ik.imagekit.io/lqn2gvopq/pj3p.png?updatedAt=1704352965496'
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
              <div key={index} className="explore__card">
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
              src='https://ik.imagekit.io/lqn2gvopq/pj3u.png?updatedAt=1704352980659'
              alt="class"
              className="class__img-2 unselectable"
              loading="lazy"
            />
          </div>
          <div className="class__content ">
            <h2 className="section__header ">The Fake Shop website</h2>
            <p>
              Is a responsive eCommerce website built using React.js,
              designed to provide users with an intuitive shopping experience.
              Leveraging the Fake Store API, the platform showcases a wide array
              of products, offers detailed product views, and facilitates
              seamless checkout processes.
            </p>
            <Link to="https://fake-shop-three.vercel.app/">
              <button className="btn-">Check website</button>
            </Link>
          </div>
        </section>
        <div className="laptop_gif ">
          <img
            src='https://ik.imagekit.io/lqn2gvopq/pj3.gif?updatedAt=1704353426222'
            className="gif unselectable"
            alt="class "
            loading="lazy"
          />
        </div>
        <span className="bg__blur"></span>
      </div>
    </div>
  );
}

export default ProjectModal;
