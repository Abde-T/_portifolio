import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pj2_features } from "../contants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import twitterTab from "../assets/twitter-tab.png";
import twitterPhone from "../assets/twiter-phone.png";
import twitter from "../assets/twitter.png";

const Project2Modal = ({ closeModal }) => {
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
            <h1>
              <div className="header__content-span"> Twitter clone </div>
            </h1>
            <p>
              A Twitter clone, leveraging modern web development technologies to
              create a seamless social media experience. The project
              incorporates Firebase for authentication, data storage, and
              real-time updates, Redux for efficient state management, and
              Tailwind CSS for a sleek and responsive user interface.
            </p>
            <div className="links">
              <Link
                to="https://twitter-clone-qviutiu6e-abde-t.vercel.app/"
                target="_blank"
              >
                <button className="btn-"> Check Website</button>
              </Link>
              <Link
                to="https://github.com/Abde-T/twitter_clone"
                target="_blank"
              >
                <button className="github_btn">
                  <img
                    src="https://ik.imagekit.io/lqn2gvopq/github.png?updatedAt=1704352962522"
                    alt=""
                    className="github- unselectable"
                    loading="lazy"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="header_image">
            <img
              src={twitterTab}
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
            {pj2_features.map((project, index) => (
              <div key={index} className="explore__card-">
                <h4>{project.h1}</h4>
                <p>{project.p}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section__container class__container details_container--">
          <div className="class__image">
            <span className="bg__blur"></span>
            <img
              src={twitterPhone}
              alt="class"
              className="class__img- unselectable"
              loading="lazy"
            />
          </div>
          <div className="class__content ">
            <h2 className="section__header ">The Twitter clone website</h2>
            <p>
              Is a robust social media platform designed and developed to provide
              users with a seamless and familiar tweeting experience. Leveraging
              cutting-edge technologies and frameworks, this project offers a
              feature-rich environment that allows users to connect, share their
              thoughts, and engage with others in real-time.
            </p>
            <Link to="https://twitter-clone-qviutiu6e-abde-t.vercel.app/">
              <button className="btn">Check website</button>
            </Link>
          </div>
        </section>
        <div className="class__image pj2_img">
          <span className="bg__blur "></span>
          <img
            src={twitter}
            alt="class"
            className="class__img-2 unselectable"
            loading="lazy"
          />
        </div>
        <span className="bg__blur"></span>
      </div>
    </div>
  );
};

export default Project2Modal;
