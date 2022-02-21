import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";

function App() {
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleClosePopup() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsOpenImagePopup(false);
  }
  function deleteCardOpenPopup() {
    setIsDeleteCardPopupOpen(true);
  }
  function handleCardClick() {
    setSelectedCard(true);
  }
  function onCardClick(card) {
    setSelectedCard(card);
    setIsOpenImagePopup(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isOpenImagePopup, setIsOpenImagePopup] = React.useState(false);

  return (
    <div className="page">
      <ImagePopup
        selectedCard={selectedCard}
        isOpen={isOpenImagePopup}
        onClose={handleClosePopup}
      >
        <div className="popup popup-image">
          <div className="popup__container popup-image__container">
            <button
              className="popup__close-icon popup-image__close-icon"
              type="button"
            ></button>
            <img className="popup-image__block" src="#" alt="#" />
            <p className="popup-image__text">Карачаево-Черкессия</p>
          </div>
        </div>
      </ImagePopup>
      <PopupWithForm
        onClose={handleClosePopup}
        isOpen={isEditProfilePopupOpen}
        name={"popup-edit-profile"}
        title={"Редактировать профиль"}
      >
        <form className="form__fields form-edit-profile" name="add" noValidate>
          <input
            className="form__field"
            type="text"
            placeholder=""
            value=""
            name="name"
            id="name"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="name-error" className="error"></span>
          <input
            className="form__field"
            type="text"
            placeholder=""
            value=""
            name="profession"
            id="profession"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="profession-error" className="error"></span>
          <button className="form__safe-btn" type="submit">
            Сохранить
          </button>
        </form>
      </PopupWithForm>
      <PopupWithForm
        onClose={handleClosePopup}
        title={"Вы уверены?"}
        name={"popup-confirmation"}
        isOpen={isDeleteCardPopupOpen}
      >
        <form className="form__fields" name="confirmation" noValidate>
          <button className="form__safe-btn" type="submit">
            Да
          </button>
        </form>
      </PopupWithForm>
      <PopupWithForm
        onClose={handleClosePopup}
        isOpen={isEditAvatarPopupOpen}
        name={"popup-confirmation-edit-profile"}
        title={"Обновить аватар"}
      >
        <form className="form__fields" name="edit" noValidate>
          <input
            className="form__field"
            type="url"
            placeholder=""
            value=""
            name="link"
            id="link"
            minLength="2"
            maxLength="2000"
            required
          />
          <span id="link-error" className="error"></span>
          <button className="form__safe-btn" type="submit">
            Сохранить
          </button>
        </form>
      </PopupWithForm>
      <PopupWithForm
        onClose={handleClosePopup}
        isOpen={isAddPlacePopupOpen}
        name={"popup-new-card"}
        title={"Новое место"}
      >
        <form className="form__fields form-add-card" name="place" noValidate>
          <input
            className="form__field"
            type="text"
            placeholder="Название"
            value=""
            name="name"
            id="place"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="place-error" className="error"></span>
          <input
            className="form__field"
            type="url"
            placeholder="Ссылка на картинку"
            value=""
            name="link"
            id="newCardLink"
            required
          />
          <span id="newCardLink-error" className="error"></span>
          <button
            className="form__safe-btn form-new-card__safe-btn"
            type="submit"
          >
            Сохранить
          </button>
        </form>
      </PopupWithForm>
      <Header />
      <Main
        onCardClick={onCardClick}
        handleCardClick={handleCardClick}
        deleteCard={deleteCardOpenPopup}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
    </div>
  );
}

export default App;
