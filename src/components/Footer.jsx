import React, { useState } from "react";
import logo from "../assets/logo.png";
import resume from "../assets/resume.pdf";

function Footer(props) {

  return (
    <footer>
      <div className="row footer__wrapper">
        <a href="#" className="footer__anchor">
        <figure>
          <img className="footer__logo--img" src={logo} alt="" />
        </figure>
        <span className="footer__logo--up">
            Top ↑
          </span>
        </a>
        <div className="footer__social--list">
          <a
            href="https://github.com/Abde-T" target={"_blank"}
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/abderrahmane-tiamani-911b48266/" target={"_blank"}
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            LinkdIn
          </a>
          <a
          href="#"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Contact
          </a>
          <a
            href={resume}
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Resume
          </a>
        </div>
        <div className="footer__copyright">Copyright © Abde Tiamani</div>
      </div>
    </footer>
  );
}

export default Footer;
