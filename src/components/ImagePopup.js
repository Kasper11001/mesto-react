import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup  ${props.name} ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container popup-image__container">
        <button
          onClick={props.onClose}
          className="popup__close-icon popup-image__close-icon"
          type="button"
        ></button>
        <img
          className="popup-image__block"
          src={props.selectedCard.link}
          alt={props.selectedCard.name}
        />
        <p className="popup-image__text">{props.selectedCard.name}</p>
      </div>
    </div>
  );
}
export default ImagePopup;
