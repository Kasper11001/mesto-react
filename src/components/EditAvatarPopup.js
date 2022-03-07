import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ onClose, isOpen, onUpdateAvatar }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar:
        inputRef.current.value /* Значение инпута, полученное с помощью рефа */,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      name={"popup-confirmation-edit-profile"}
      title={"Обновить аватар"}
      safe={"Сохранить"}
    >
      <input
        ref={inputRef}
        className="form__field"
        type="url"
        placeholder=""
        name="link"
        id="link"
        minLength="2"
        maxLength="2000"
        required
      />
      <span id="link-error" className="error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
