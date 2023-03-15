import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Modal from "./Modal";

function Nav() {
  const [openMomdal, setOpenModal] = useState(false);

  return (
    <div className="nav__wrapper">
      <div className="row">
        <nav>
          <figure>
            <img src={logo} alt="logo" className="logo" />
          </figure>
          <ul className="nav__link--list">
            <li className="nav__link">
              <a
               
                className="nav__link link__hover-effect link__hover-effect--black "
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                About
              </a>
            </li>
            <li className="nav__link">
              <a
                href=".projects"
                className="nav__link link__hover-effect link__hover-effect--black"
              >
                Projects
              </a>
            </li>
            <li className="nav__link">
              <a
                className="nav__link link__hover-effect link__hover-effect--black"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Contact
              </a>
              {openMomdal && <Modal closeModal={setOpenModal} />}
            </li>
            <li className="nav__link click">
              <a href="#" className="nav__link ">
                <FontAwesomeIcon icon="fa-adjust" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
