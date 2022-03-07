import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  const cardItems = props.cards.map((card, i) => (
    <Card
      onCardDelete={props.onCardDelete}
      onCardLike={props.onCardLike}
      onCardClick={props.onCardClick}
      key={card._id}
      card={card}
      deleteCard={props.deleteCard}
      handleCardClick={props.handleCardClick}
    />
  ));

  return (
    <main className="main container">
      <section className="profile">
        <div className="profile__edit-block">
          <div onClick={props.onEditAvatar} className="profile__marker"></div>
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__edit-button"
            type="button"
          ></button>
          <p className="profile__about">{currentUser.about}</p>
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
