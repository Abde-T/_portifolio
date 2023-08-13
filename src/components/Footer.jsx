import React, { useState } from "react";
import logo from "../assets/logo.png";
import resume from "../assets/Abde-T resume.pdf";
import Modal from "../ui/Modal";

function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <footer>
      <div className="row footer__wrapper">
        <a href="#" className="footer__anchor">
          <figure>
            <img className="footer__logo--img" src={logo} alt="" />
          </figure>
          <span className="footer__logo--up">Top ↑</span>
        </a>
        <div className="footer__social--list">
          <a
            href="https://github.com/Abde-T"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/abde-t/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            LinkedIn
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
          {openModal && <Modal closeModal={setOpenModal} />}
          <a
            href={resume}
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Resume
          </a>
        </div>
        <div className="footer__copyright">
          Copyright © Abde Tiamani
        </div>
      </div>
    </footer>
  );
}

export default Footer;