import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/Abde-T resume.pdf";
import StarsCanvas from "./Stars";
import EarthCanvas from "./Earth";



const Container = () => {
  return (
    <div className="container__wrapper">
      <div className="row">
        <div className="container-">
          <div className="left " data-aos="fade-right" data-aos-once="true">
            <h1 className="title- ">
            <span id="hover" className="title- white">H</span> 
              <span id="hover" className="title- white">e</span>
              <span id="hover" className="title- white">y,</span> 
            </h1>

            <h1 className=" title_">
              <div className="space">
              <span id="hover" className="title_ blue">I'</span> 
              <span id="hover" className="title_ blue">m</span> 
              </div>
              <span id="hover" className="title_ blue">A</span> 
              <span id="hover" className="title_ blue">b</span>
              <span id="hover" className="title_ blue">d</span> 
              <span id="hover" className="title_ blue">e</span>
            </h1>

            <p className="header__para">
              I am a <b className="blue">Self-Taught developer, </b> With a
              strong passion for building <b className="blue"> web applications </b>{" "}
              with a  <b className="blue"> responsive </b>and <b className="blue"> interactive </b> design.
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
          <div className="right" data-aos="fade-left" data-aos-once="true">
            <EarthCanvas/>
          </div>
           {<StarsCanvas/> || ''}
        </div>
      </div>
    </div>
)};

export default Container;


