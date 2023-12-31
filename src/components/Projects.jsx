import React, { useState } from "react";
import { project1, project2, project3 } from "../contants";
import Project1Card from "../ui/Project1Card"
import Project2Card from "../ui/Project2Card"
import Project3Card from "../ui/Project3Card"

function Projects() {
  
  return (
    <section id="projects">
      <div className="row">
        <div className="projects__wrapper">
          <h1 className="proj__header" data-aos="fade-up" data-aos-once="true">
            Here are some of my <span className="blue">projects:</span>{" "}
          </h1>
          <div className="project__list">
            {project1.map((project) => (
              <Project1Card project={project} key={project.name} />
            ))}

            {project2.map((project) => (
              <Project2Card project={project} key={project.name} />
            ))}

            {project3.map((project) => (
              <Project3Card project={project} key={project.name} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;
