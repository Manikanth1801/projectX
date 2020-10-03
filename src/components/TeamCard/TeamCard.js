import React from "react";
import "./TeamCard.css";

function TeamCard({ url, name }) {
  return (
    <div className="TeamCard">
      <img src={url} alt={url} className="TeamCard-image" />
      <h3>{name}</h3>
    </div>
  );
}

export default TeamCard;
