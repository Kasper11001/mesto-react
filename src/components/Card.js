import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `${
    isOwn ? "card__delete-icon card__delete-icon_active" : "card__delete-icon"
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `${
    isLiked ? "card__like card__like_active" : "card__like"
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }
  function cardLike() {
    props.onCardLike(props.card);
  }
  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="card">
      <button
        onClick={handleDeleteClick}
        className={cardDeleteButtonClassName}
      ></button>
      <img
        onClick={handleClick}
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
      />
      <h2 className="card__title">{props.card.name}</h2>
      <div className="card__like-container">
        <button
          onClick={cardLike}
          className={cardLikeButtonClassName}
          type="button"
        ></button>
        <p className="card__like-counter">{props.card.likes.length}</p>
      </div>
    </div>
  );
}
export default Card;
