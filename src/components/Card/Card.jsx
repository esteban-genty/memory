import React from "react";

function Card({content}){
    return(
        <div className="card">
            <img src={content.image} />
        </div>
    )
}

export default Card;