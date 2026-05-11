import React from "react";

const Card = ({ name = "Sourav Acharjya" }) => {
  return (
      <div className="card">
        <h1>{name}</h1>
        <p>Software Engineer</p>
        <button>See Profile</button>
      </div>

  );
};

export default Card;
