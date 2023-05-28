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
            Junior MERN fullstack developer
          </h4>
          <p className="modal__para modal__white">
            Passionate and highly motivated junior <span className="blue"> MERN full-stack developer </span>
            actively seeking new opportunities. I thrive on learning 
            <span className="blue"> new technologies</span> and possess the ability to <span className="blue"> work independently</span>, adapt
            quickly to unconventional situations, and broaden my skill set. I am
            excited to contribute my expertise and dedication to your
            organization. Let's <span className="blue"> connect</span> and explore how my skills can help drive
            success and innovation.
          </p>
          <div className="language__list ">
            {technologies.slice(3, 7).map((technology) => (
              <div className="language" key={technology.name}>
                <figure className="language__img--wrapper">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="language__img"
                  />
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
