import React from "react";
import './Card.css';

function Card({ index, image, onClick, flipped }) {
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
        </div>
        <div className="card-back">
          <img src={image} alt={`Card ${index}`} />
        </div>
      </div>
    </div>
  );
}

export default Card;
