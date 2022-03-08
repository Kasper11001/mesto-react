import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.name} ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          className="popup__close-icon"
          type="button"
        ></button>
        <div className="form">
          <h2 className="form__title">{props.title}</h2>
          <form
            className="form__fields"
            name={props.name}
            noValidate
            onSubmit={props.onSubmit}
          >
            {props.children}
            <button className="form__safe-btn" type="submit">
              {props.safe}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PopupWithForm;
