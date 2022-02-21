import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="card">
      <button onClick={props.deleteCard} className="card__delete-icon"></button>
      <img
        onClick={handleClick}
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
      />
      <h2 className="card__title">{props.card.name}</h2>
      <div className="card__like-container">
        <button className="card__like" type="button"></button>
        <p className="card__like-counter">{props.card.likes.length}</p>
      </div>
    </div>
  );
}
export default Card;
