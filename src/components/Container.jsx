import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Kinetic from "./Kinetic";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"



const Container = () => {
  return (
    <div className="container__wrapper">
      <div className="row">
        <div className="container">
        <div className="left">
          <h1 className="title">Hey</h1>
          <h1 className="title blue">I'm Abde</h1>
          <p className="header__para">
            Lorem ipsum dolor sit,
            <b className="blue"> amet consectetur adipisicing </b> elit. Amet
            sapiente cum, maiores ipsam voluptatem nam enim repellat ad in Quam
            quasi odit adipisci veritatis, <b className="blue click"> cum. </b>
          </p>
          <div className="social__list">
            <a href="www.linkedin" target="_blank" className="social__link click">
              <img src={github} alt=""  className="ic__img"/>
            </a>
            <a href="github." target="_blank" className="social__link click">
            <img src={linkedin} alt=""  className="ic__img"/>
            
            </a>
            <a
              href="./assets/Resume.pdf"
              target="_blank"
              className="social__link click"
            >
               <FontAwesomeIcon icon="fa-file-pdf"/>
            </a>
          </div>
        </div>
        <div className="right">
          <Kinetic/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
