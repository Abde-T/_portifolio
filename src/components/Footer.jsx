import React from "react";
import logo from "../assets/logo.png";
function Footer(props) {
    let isModalOpen = false;
    function toggleModal(){
        if(isModalOpen){
            isModalOpen = false;
            return document.body.classList.remove("modal--open")
        }
        isModalOpen = true;
        document.body.classList += " modal--open";
    }

  return (
    <footer>
      <div className="row footer__wrapper">
        <figure>
          <img className="footer__logo--img" src={logo} alt="" />
        </figure>
        <div className="footer__social--list">
          <a
            href="#"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Github
          </a>
          <a
            href="#"
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
            href="#"
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
