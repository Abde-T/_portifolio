import React from "react";
import Ball from "./Ball";
import css1 from "../assets/tech/css1.png";
import html1 from "../assets/tech/html1.png";
import js from "../assets/tech/js.png";
import react from "../assets/tech/react.png";
import three from "../assets/tech/three.png";

function Tech(props) {
  return (
    <section className="tech">
      <div className="row">
      <div className="tech__wrapper">
        <h1 data-aos="fade-up"  data-aos-once="true">This is my <span className="blue">technology stack</span> </h1>
      <Ball />
      <div className="language__list" data-aos="fade-left"  data-aos-once="true">
            <div className="language">
              <figure className="language__img--wrapper">
                <img
                  src={html1}
                  alt=""
                  className="language__img"
                />
              </figure>
              <span className="language__name"> HTML</span>
            </div>
            <div className="language">
              <figure className="language__img--wrapper">
                <img
                  src={css1}
                  alt=""
                  className="language__img"
                />
              </figure>
              <span className="language__name"> CSS</span>
            </div>
            <div className="language">
              <figure className="language__img--wrapper">
                <img
                  src={js}
                  alt=""
                  className="language__img"
                />
              </figure>
              <span className="language__name"> JavaScript</span>
            </div>
            <div className="language">
              <figure className="language__img--wrapper">
                <img
                  src={react}
                  alt=""
                  className="language__img"
                />
              </figure>
              <span className="language__name"> Reactjs</span>
            </div>
            <div className="language">
              <figure className="language__img--wrapper">
                <img
                  src={three}
                  alt=""
                  className="language__img"
                />
              </figure>
              <span className="language__name"> Threejs</span>
            </div>
          </div>
      </div>
      </div>
    </section>
  );
}

export default Tech;
