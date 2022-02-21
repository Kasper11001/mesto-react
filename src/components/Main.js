import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  const cardItems = cards.map((card, i) => (
    <Card
      onCardClick={props.onCardClick}
      key={card._id}
      card={card}
      deleteCard={props.deleteCard}
      handleCardClick={props.handleCardClick}
    />
  ));
  useEffect(() => {
    api
      .getProfileData()
      .then((data) => {
        setUserAvatar(data.avatar);
        setUserDescription(data.about);
        setUserName(data.name);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="main container">
      <section className="profile">
        <div className="profile__edit-block">
          <div onClick={props.onEditAvatar} className="profile__marker"></div>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__edit-button"
            type="button"
          ></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button"
          type="button"
        ></button>
      </section>
      <section className="cards">{cardItems}</section>
    </main>
  );
}

export default Main;
