import React from "react";
import game from "../assets/game.png";
import ultra from "../assets/ultra.png";
import movieheaven from "../assets/movieHeaven.png";
import fakeshop from "../assets/fakeShop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../assets/github.png";

function Projects() {
  return (
    <section id="projects">
      <div className="row">
        <div className="projects__wrapper">
          <h1 className="proj__header" data-aos="fade-up" data-aos-once="true">
            Here are some of my <span className="blue">projects:</span>{" "}
          </h1>
          <div className="project__list">
            <div className="card " data-aos="fade-right" data-aos-once="true">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img
                      src={fakeshop}
                      className="project__img"
                      alt=""
                      loading="lazy"
                    />
                    <strong>
                      <span className="blue"> Fake shop</span>
                    </strong>
                    Html, Css, JavaScript, React
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <small className="badge">
                      <div className="project__description--para">
                        An E-Commerce website built using React. It Makes use of
                        API calls, and includes a responsive and interactive
                        design.
                      </div>
                    </small>
                    <div className="description">
                      <div className="card-footer">
                        <div>
                          <a
                            href="https://github.com/Abde-T/Fake-shop"
                            target={"_blank"}
                            className="project__description--link click"
                          >
                            <img src={github} alt="" className="ic__img-" />
                          </a>
                          <a
                            href="https://fake-shop-three.vercel.app/"
                            className="project__description--link click"
                            target={"_blank"}
                          >
                            <FontAwesomeIcon
                              icon="fa-link"
                              className="ic__img--"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card " data-aos="fade-up" data-aos-once="true">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img
                      src={movieheaven}
                      className="project__img"
                      alt=""
                      loading="lazy"
                    />
                    <strong>
                      {" "}
                      <span className="blue"> Movie heaven </span>{" "}
                    </strong>
                    Html, Css, JavaScript, React
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>

                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <small className="badge">
                      {" "}
                      <div className="project__description--para">
                        A web application that fetches and displays movies using
                        OMdbapi, The website, includes search bar and a
                        responsive and interactive design.
                      </div>
                    </small>
                    <div className="description">
                      <div className="card-footer">
                        <div>
                          <a
                            href="https://github.com/Abde-T/movie-heaven"
                            className="project__description--link click"
                            target={"_blank"}
                          >
                            <img src={github} alt="" className="ic__img-" />
                          </a>
                          <a
                            href="https://movie-heaven.vercel.app/"
                            className="project__description--link click"
                            target={"_blank"}
                          >
                            <FontAwesomeIcon
                              icon="fa-link"
                              className="ic__img--"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card " data-aos="fade-down" data-aos-once="true">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img
                      src={ultra}
                      className="project__img"
                      alt=""
                      loading="lazy"
                    />
                    <strong>
                      {" "}
                      <span className="blue"> NFT Marketplace </span>{" "}
                    </strong>
                    Html, Css, JavaScript, React
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>

                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <small className="badge">
                      {" "}
                      <div className="project__description--para">
                        Transformed a static single page application to an
                        interactive user interface. Includes real time API data
                        fetching with skeleton loading states, pagination, and
                        dynamic routing.
                      </div>
                    </small>
                    <div className="description">
                      <div className="card-footer">
                        <div>
                          <a
                            href="https://github.com/Abde-T/Abde-internship/tree/Abde-animations"
                            className="project__description--link click"
                            target={"_blank"}
                          >
                            <img src={github} alt="" className="ic__img-" />
                          </a>
                          <a
                            href="https://ultraverse-gamma.vercel.app/"
                            className="project__description--link click"
                            target={"_blank"}
                          >
                            <FontAwesomeIcon
                              icon="fa-link"
                              className="ic__img--"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" data-aos="fade-left" data-aos-once="true">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img
                      src={game}
                      className="project__img"
                      loading="lazy"
                      alt=""
                    />
                    <strong>
                      <span className="blue"> open world game </span>
                    </strong>
                    React three fiber, React three canon
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>

                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <small className="badge">
                      {" "}
                      <div className="project__description--para">
                        A simple open world-game made with React three fiber and
                        cannon.js physics engine.
                      </div>
                    </small>
                    <div className="description">
                      <div className="card-footer">
                        <div>
                          <a
                            href="https://github.com/Abde-T/car-game"
                            target={"_blank"}
                            className="project__description--link click"
                          >
                            <img src={github} alt="" className="ic__img-" />
                          </a>
                          <a
                            href="https://car-game-sigma.vercel.app/"
                            target={"_blank"}
                            className="project__description--link click"
                          >
                            <FontAwesomeIcon
                              icon="fa-link"
                              className="ic__img--"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
