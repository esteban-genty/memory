import React from "react";

function Card({ index, image, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={image} alt={`Card ${index}`} />
        </div>
    );
}

export default Card;
