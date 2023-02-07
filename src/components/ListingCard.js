import React, { useState } from "react";

function ListingCard({ listingObj, onClickDelete }) {
  const { id, description, name, location, image } = listingObj;
  const [ isStarred, setIsStarred ] = useState(false);

  function handleDelete() {
    onClickDelete(id);
  }

  function handleStarClick() {
    setIsStarred((currentIsStarred) => !currentIsStarred)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={name} />
      </div>
      <div className="details">
        {isStarred ? (
          <button className="emoji-button favorite active" onClick={handleStarClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleStarClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
