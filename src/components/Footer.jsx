import React, { useState } from "react";
import logo from "../assets/logo.png";
import Modal from "./Modal";
import resume from "../assets/resume.pdf";

function Footer(props) {
  const [openMomdal, setOpenModal] = useState(false);

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
            onClick={() => {
              setOpenModal(true);
            }}
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Contact
          </a>
          {openMomdal && <Modal closeModal={setOpenModal} />}
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
