import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { technologies } from "../contants";

function Modal({ closeModal }) {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const successOverlay = document.querySelector(".modal__overlay--success");
    const failedOverlay = document.querySelector(".modal__overlay--failed");
    const loadingOverlay = document.querySelector(".modal__overlay--loading");

    loadingOverlay.classList.add("modal__overlay--visible");

    emailjs
      .sendForm(
        "service_y0ht9qx",
        "template_s3chdi9",
        form.current,
        "3ThcibD0QCcn_eL_t"
      )
      .then(
        (result) => {
          loadingOverlay.classList.remove("modal__overlay--visible");
          successOverlay.classList.add("modal__overlay--visible");
        },
        (error) => {
          loadingOverlay.classList.remove("modal__overlay--visible");
          failedOverlay.classList.add("modal__overlay--visible");
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
            Junior software engineer 
          </h4>
          <p className="modal__para modal__white">
            Passionate and highly motivated individual looking for a role as a
            <span className="blue"> Software Engineer </span>I thrive on learning
            <span className="blue"> new technologies</span> and possess the
            ability to <span className="blue"> work independently</span>, adapt
            quickly to unconventional situations, and broaden my skill set. I am
            excited to contribute my expertise and dedication to your
            organization. Let's <span className="blue"> connect</span> and
            explore how my skills can help drive success and innovation.
          </p>
          <div className="language__list ">
            {technologies.slice(3, 7).map((technology) => (
              <div className="language" key={technology.name}>
                <figure className="language__img--wrapper">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="language__img"
                    loading="lazy"
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
          <form
            ref={form}
            id="contact__form"
            autoComplete="off"
            onSubmit={sendEmail}
          >
            <div className="form__item">
              <label className="form__item--lable">Name</label>
              <input
                className="input"
                name="name"
                autoComplete="off"
                type="text"
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--lable">Email</label>
              <input
                autoComplete="off"
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
            The email service is temporarily unavailable. Please contact me
            directly at "tiamani3939@gmail.com".
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
