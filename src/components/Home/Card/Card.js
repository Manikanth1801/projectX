import React from "react";
import "./Card.css";

const Card = ({ url, title }) => {
  const cardStyle = {
    backgroundImage: "url(" + url + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="card">
      <div className="bg-image" style={cardStyle}></div>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
