import React, { useState } from "react";
import logo from "../assets/logo.png";
import Modal from "./Modal";
import ReactSwitch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav({ toggleTheme, theme }) {
  const [openModal, setOpenModal] = useState(false);

  const handleAboutClick = () => {
    setOpenModal(true);
  };

  const handleContactClick = () => {
    setOpenModal(true);
  };

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
                className="displ__none nav__link link__hover-effect link__hover-effect--black"
                onClick={handleAboutClick}
              >
                About
              </a>
            </li>
            <li className="nav__link">
              <a
                href="#projects"
                className="nav__link link__hover-effect link__hover-effect--black"
              >
                Projects
              </a>
            </li>
            <li className="nav__link">
              <a
                className="nav__link link__hover-effect link__hover-effect--black"
                onClick={handleContactClick}
              >
                Contact
              </a>
            </li>
            <li className="nav__link switch click">
              <ReactSwitch
                checkedHandleIcon={
                  <FontAwesomeIcon icon="fa-moon" className="moon" />
                }
                uncheckedHandleIcon={
                  <FontAwesomeIcon icon="fa-sun" className="sun" />
                }
                width={40}
                height={20}
                borderRadius={10}
                offHandleColor={"#242424"}
                handleDiameter={0}
                offColor={"#242424"}
                onColor={"#ffffff"}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={toggleTheme}
                checked={theme === "dark"}
                className={"check"}
              />
            </li>
          </ul>
        </nav>
      </div>
      {openModal && <Modal closeModal={() => setOpenModal(false)} />}
    </div>
  );
}

export default Nav;