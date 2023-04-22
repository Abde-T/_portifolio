import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { technologies } from "../contants";

function Modal({ closeModal }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const success = document.querySelector(".modal__overlay--success");
    const failed = document.querySelector(".modal__overlay--failed");
    const loading = document.querySelector(".modal__overlay--loading");
    loading.classList += " modal__overlay--visible";

    emailjs
      .sendForm(
        "service_y0ht9qx",
        "template_s3chdi9",
        form.current,
        "3ThcibD0QCcn_eL_t"
      )
      .then(
        (result) => {
          loading.classList.remove("modal__overlay--visible");
          success.classList += " modal__overlay--visible";
        },
        (error) => {
          loading.classList.remove("modal__overlay--visible");
          failed.classList += " modal__overlay--visible";
        }
      );
  };

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div
          className="modal__half modal__about"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <h3 className="modal__title modal__title--about modal__white">
            Here's a bit about me.
          </h3>
          <h4 className="modal__sub-title modal__sub-title--abou modal__white">
            Junior Frontend developer
          </h4>
          <p className="modal__para modal__white">
            I'm an incredibly  <b className="blue"> motivated </b> individual looking for a role as a
            <b className="blue"> Front-end developer </b>. I have a great interest in learning new tech
            and a solid ability to work <b className="blue">independently</b> and <b className="blue"> learn quickly </b> due to
            my high drive to learn new things and broaden my skill sets to
            quickly adapt to new and unusual situations in order to be an <b className="blue">excellent 
            fit </b> for your organization. 

          </p>
          <div className="language__list ">
            {technologies.map((technology) => (
              <div className="language" key={technology.name}>
                <figure className="language__img--wrapper">
                  <img src={technology.icon} alt="" className="language__img" />
                </figure>
                <span className="language__name"> {technology.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="modal__half modal__contact "
          data-aos="fade-left"
          data-aos-once="true"
        >
          <FontAwesomeIcon
            icon="fa-times"
            className="model__exit click"
            onClick={() => closeModal(false)}
          />
          <h3 className="modal__title modal__title--contact">
            Let's have a chat
          </h3>
          <h3 className="modal__sub-title modal__sub-title--contact">
            {" "}
            currently open for new opportunities
          </h3>
          <form ref={form} id="contact__form" onSubmit={sendEmail}>
            <div className="form__item">
              <label className="form__item--lable">Name</label>
              <input className="input" name="name" type="text"></input>
            </div>
            <div className="form__item">
              <label className="form__item--lable">Email</label>
              <input
                className="input"
                name="email"
                type="email"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--lable">Massage</label>
              <textarea className="input" name="message" type="text"></textarea>
            </div>
            <button id="contact__submit" className="form__submit" type="submit">
              Send it my way
            </button>
          </form>
          <div className="modal__overlay modal__overlay--loading">
            <FontAwesomeIcon icon="fa-spinner" className="spinner" />
          </div>
          <div className="modal__overlay modal__overlay--success">
            <FontAwesomeIcon icon="circle-exclamation" className="success" />
            Thanks for the message! Looking forward to speaking to you soon.
          </div>
          <div className="modal__overlay modal__overlay--failed">
            The email service is temporarily unavalible. Please contact me
            diractly on " tiamani3939@gmail.com "
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
