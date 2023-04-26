import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Kinetic from "./Kinetic";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/resume.pdf";
import StarsCanvas from "./Stars";

const Container = () => {
  return (
    <div className="container__wrapper">
      <div className="row">
        <div className="container-">
          <div className="left " data-aos="fade-right" data-aos-once="true">
            <h1 className="title-">Hey,</h1>
            <h1 className="title- blue">I'm Abde</h1>
            <p className="header__para">
              I am a <b className="blue">computer science </b> graduate and a
              self-thought <b className="blue"> front-end</b> developer. With a
              strong passion for building <b className="blue"> responsive </b>{" "}
              and <b className="blue"> interactive </b> web applications.
            </p>
            <div className="social__list">
              <a
                href="https://github.com/Abde-T"
                target={"_blank"}
                className="social__link click"
              >
                <img src={github} alt="" className="ic__img" />
              </a>
              <a
                href="https://www.linkedin.com/in/abde-t/"
                target={"_blank"}
                className="social__link click"
              >
                <img src={linkedin} alt="" className="ic__img" />
              </a>
              <a href={resume} target={"_blank"} className="social__link click">
                <FontAwesomeIcon icon="fa-file-pdf" className="ic__img" />
              </a>
            </div>
          </div>
          <div className="right" data-aos="fade-up" data-aos-once="true">
            <Kinetic />
            <StarsCanvas/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
