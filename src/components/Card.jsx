import React from "react";


const Card = ({title, description, picture, rating, stay}) => {
  return (
      <div className="villa-card">
        <div className="villa-card__image">
          <img src={picture} alt="Santorini Villa with ocean view" />
        </div>

        <div className="villa-card__content">
          <h2 className="villa-card__title">{title}</h2>

          <p className="villa-card__description">
            {description}
          </p>

          <div className="villa-card__meta">
            <span className="rating"> {rating} ★</span>
            <span className="stay">{stay}</span>
          </div>

          <button className="reserve-btn">Reserve Now</button>
        </div>
      </div>
  );
};

export default Card;
