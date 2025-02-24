import React, {useState} from "react";

function ListingCard({item, deleteItem}) {
  const {id, description, image, location} = item; 
  const[favorite, setFavorite] = useState(false)
  
  function favoriteItem(){
    setFavorite(favorite => !favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" >
        {favorite ? (
          <button onClick={favoriteItem} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={favoriteItem} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={(e, id) => deleteItem(e,item.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
