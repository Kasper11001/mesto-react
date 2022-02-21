import React from "react"

function PopupWithForm(props) {

  return (
    <div className={`popup ${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button onClick={props.onClose} className="popup__close-icon" type="button"></button>
        <div className="form">
          <h2 className="form__title">{props.title}</h2>
          {props.children}
        </div>
      </div>
    </div>

  )
}
export default PopupWithForm;
