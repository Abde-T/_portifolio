import React from "react";
import ShapeCanvas from "../threejs/Shape";
import { technologies } from "../contants";

const TechnologyList = () => {
  return (
    <div className="technologies">
      {technologies.map((technology) => (
        <div className="technologie" key={technology.name}>
          <div
            className="tech_"
            data-aos="fade-down"
            data-aos-once="true"
          >
            <ShapeCanvas icon={technology.icon} />
          </div>
          <span className="technologie__name">{technology.name}</span>
        </div>
      ))}
    </div>
  );
};

const Tech = () => {
  return (
    <section className="tech">
      <div className="row">
        <div className="tech__wrapper">
          <h1
            className="proj__header"
            data-aos="fade-up"
            data-aos-once="true"
          >
            This is my <span className="blue">technology stack</span>{" "}
          </h1>
          <TechnologyList /> 
        </div>
      </div>
    </section>
  );
};

export default Tech;