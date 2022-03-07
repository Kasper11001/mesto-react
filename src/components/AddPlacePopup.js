import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onClose, isOpen, onSubmit }) {
  const [place, setPlace] = useState("");
  const [link, setLink] = useState("");
  function onAddPlace(e) {
    e.preventDefault();
    onSubmit({ place, link });
  }
  return (
    <PopupWithForm
      onSubmit={onAddPlace}
      onClose={onClose}
      isOpen={isOpen}
      name={"popup-new-card"}
      title={"Новое место"}
      safe={"Сохранить"}
    >
      <input
        onChange={(e) => setPlace(e.target.value)}
        className="form__field"
        type="text"
        placeholder="Название"
        value={place}
        name="name"
        id="place"
        minLength="2"
        maxLength="30"
        required
      />
      <span id="place-error" className="error"></span>
      <input
        onChange={(e) => setLink(e.target.value)}
        className="form__field"
        type="url"
        placeholder="Ссылка на картинку"
        value={link}
        name="link"
        id="newCardLink"
        required
      />
      <span id="newCardLink-error" className="error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
