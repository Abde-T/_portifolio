import React from "react";
import ShapeCanvas from "./Shape";
import { technologies } from "../contants";

const Tech = () => {
  return (
    <section className="tech">
      <div className="row">
        <div className="tech__wrapper">
          <h1 className="proj__header" data-aos="fade-up" data-aos-once="true">
            This is my <span className="blue">technology stack</span>{" "}
          </h1>
          <div className="technologies">
          {technologies.map((technology) => (
            <div className="technologie" key={technology.name}>
            <div className="tech_" data-aos="fade-down" data-aos-once="true" key={technology.name}>
              <ShapeCanvas icon={technology.icon} />

            </div>
            <span className="technologie__name"> {technology.name}</span>
          </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
