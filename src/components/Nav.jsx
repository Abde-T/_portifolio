import React from "react";
import logo from "../assets/logo.png";

function Nav() {
  return (
    <div className="nav__wrapper">
      <div className="row">
        <nav>
          <figure>
            <img src={logo} alt="logo" className="logo" />
          </figure>
          <ul className="nav__link--list">
            <li className="nav__link">
              <a href="#" className="nav__link ">
                About
              </a>
            </li>
            <li className="nav__link">
              <a href="#Projects" className="nav__link ">
                Projects
              </a>
            </li>
            <li className="nav__link" >
              <a href="#" className="nav__link ">
                Contact
              </a>
            </li>
            <li className="nav__link click" >
              <a href="#" className="nav__link ">
                <i className="fas fa-adjust"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
