import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      name={"popup-edit-profile"}
      title={"Редактировать профиль"}
      safe={"Сохранить"}
    >
      <input
        onChange={(e) => setName(e.target.value)}
        className="form__field"
        type="text"
        placeholder=""
        value={name}
        name="name"
        id="name"
        minLength="2"
        maxLength="40"
        required
      />
      <span id="name-error" className="error"></span>
      <input
        onChange={(e) => setDescription(e.target.value)}
        className="form__field"
        type="text"
        placeholder=""
        value={description}
        name="profession"
        id="profession"
        minLength="2"
        maxLength="200"
        required
      />
      <span id="profession-error" className="error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
