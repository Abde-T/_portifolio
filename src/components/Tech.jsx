import React from "react";
import Ball from "./Ball";

function Tech(props) {
  return (
    <section className="tech">
      <div className="row">
      <div className="tech__wrapper">
        <h1 data-aos="fade-up"  data-aos-once="true">This is my <span className="blue">technology stack</span> </h1>
      <Ball />
      </div>
      </div>
    </section>
  );
}

export default Tech;
