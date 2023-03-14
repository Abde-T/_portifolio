import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Modal from "./Modal";

function Nav() {
  const [openMomdal, setOpenModal] = useState(true);

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
                href="#"
                className="nav__link link__hover-effect link__hover-effect--black "
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
              <button
                className="nav__link link__hover-effect link__hover-effect--black"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Contact
              </button>
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
