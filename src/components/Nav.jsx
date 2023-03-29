import React, { useState } from "react";
import logo from "../assets/logo.png";
import Modal from "./Modal";
import ReactSwitch from "react-switch";

function Nav({ toggleTheme, theme }) {
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
                className="nav__link link__hover-effect link__hover-effect--black displ__none "
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                About
              </a>
            </li>
            <li className="nav__link">
              <a
                href="#projects"
                className="displ__none nav__link link__hover-effect link__hover-effect--black"
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
            <li className="nav__link switch click">
              <a href="#" className="nav__link ">
                {/*<FontAwesomeIcon icon="fa-adjust" />*/}
                <ReactSwitch
                  width={50}
                  height={20}
                  offColor={"#242424"}
                  onColor={"#0077ff"}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
