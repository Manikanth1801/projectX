import React from "react";
import "./TeamCard.css";

function TeamCard({ url, name }) {
  return (
    <div className="TeamCard offset-7">
      <img src={`/assets/images/teamMembers/${url}.jpg`} alt={url} className="TeamCard-image" />
      <h3>{name}</h3>
    </div>
  );
}

export default TeamCard;
