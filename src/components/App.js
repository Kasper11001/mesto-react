import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isOpenImagePopup, setIsOpenImagePopup] = useState(false);

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
    setSelectedCard({});
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

  return (
    <div className="page">
      <ImagePopup
        selectedCard={selectedCard}
        isOpen={isOpenImagePopup}
        onClose={handleClosePopup}
        name={"popup-image"}
      ></ImagePopup>
      <PopupWithForm
        onClose={handleClosePopup}
        isOpen={isEditProfilePopupOpen}
        name={"popup-edit-profile"}
        title={"Редактировать профиль"}
        safe={"Сохранить"}
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
        </form>
      </PopupWithForm>
      <PopupWithForm
        onClose={handleClosePopup}
        title={"Вы уверены?"}
        name={"popup-confirmation"}
        isOpen={isDeleteCardPopupOpen}
        safe={"Да"}
      >
        <form className="form__fields" name="confirmation" noValidate></form>
      </PopupWithForm>
      <PopupWithForm
        onClose={handleClosePopup}
        isOpen={isEditAvatarPopupOpen}
        name={"popup-confirmation-edit-profile"}
        title={"Обновить аватар"}
        safe={"Сохранить"}
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
        </form>
      </PopupWithForm>
      <PopupWithForm
        onClose={handleClosePopup}
        isOpen={isAddPlacePopupOpen}
        name={"popup-new-card"}
        title={"Новое место"}
        safe={"Сохранить"}
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
