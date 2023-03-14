import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal({ closeModal }) {
  return (
    <>
    <div className="modal--open modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about">
          Here's a bit about me.
        </h3>
        <h4 className="modal__sub-title modal__sub-title--about">
          {" "}
          Frontend software engeneer.
        </h4>
        <p className="modal__para">
          Lorem ipsum dolor sit <b className="blue">amet consectetur</b>{" "}
          adipisicing elit. Nobis explicabo itaque minima alias Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aut illo dolore fugit.
          Quia neque debitis similique ex, maiores optio cum exercitationem. Ut
          ab ducimus voluptate blanditiis?
        </p>
      </div>
      <div className="modal__half modal__contact">
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
          currently open for new opertunities
        </h3>
        <form id="contact__form">
          <div className="form__item">
            <label className="form__item--lable">Name</label>
            <input className="input" name="user_name" type="text"></input>
          </div>
          <div className="form__item">
            <label className="form__item--lable">Email</label>
            <input className="input" name="user_email" type="email"></input>
          </div>
          <div className="form__item">
            <label className="form__item--lable">Massage</label>
            <textarea className="input" name="message" type="text"></textarea>
          </div>
          <button id="contact__submit" className="form__submit">
            Send it my way
          </button>
        </form>
        <div className="modal__overlay modal__overlay--loading">
          <FontAwesomeIcon icon="fa-spinner" className="spinner" />
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for the message! Looking forward to speaking to you soon.
        </div>
      </div>
    </div>
          </>
  );
}

export default Modal;
