import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isOpenImagePopup, setIsOpenImagePopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", about: "" });
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((data) => {
        const newArrCards = cards.filter((oldCard) => oldCard._id !== card._id);
        setCards(newArrCards);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    api
      .getProfileData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateUser(formValues) {
    api
      .updateProfileData(formValues)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(err));
    setIsEditProfilePopupOpen(false);
    formValues.name = "";
    formValues.about = "";
  }

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
  function udateAvatar(formValues) {
    api
      .updateProfileAvatar(formValues)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
    setIsEditAvatarPopupOpen(false);
  }
  function handleAddPlaceSubmit(formValues) {
    api.addCard(formValues).then((newCard) => {
      setCards([newCard, ...cards]);
    });
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <ImagePopup
        selectedCard={selectedCard}
        isOpen={isOpenImagePopup}
        onClose={handleClosePopup}
        name={"popup-image"}
      />
      <CurrentUserContext.Provider value={currentUser}>
        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={handleClosePopup}
        />
      </CurrentUserContext.Provider>
      <AddPlacePopup
        onSubmit={handleAddPlaceSubmit}
        onClose={handleClosePopup}
        isOpen={isAddPlacePopupOpen}
      />
      {/* <PopupWithForm
        onClose={handleClosePopup}
        title={"Вы уверены?"}
        name={"popup-confirmation"}
        isOpen={isDeleteCardPopupOpen}
        safe={"Да"}
      /> */}
      <EditAvatarPopup
        onUpdateAvatar={udateAvatar}
        isOpen={isEditAvatarPopupOpen}
        onClose={handleClosePopup}
      />

      <Header />
      <CurrentUserContext.Provider value={currentUser}>
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onCardClick={onCardClick}
          handleCardClick={handleCardClick}
          deleteCard={deleteCardOpenPopup}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
      </CurrentUserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
