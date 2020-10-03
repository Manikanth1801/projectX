import React from "react";
import "./CourseCard.css";
import Button from "../Button/Button";

function CourseCard({ image, title }) {
  return (
    <div style={cardStyle} className="CourseCard">
      <img className="CourseCard-img" src={image} alt="" />
      <h3 className="CourseCard-title">{title}</h3>
      <Button buttonStyle="btn--primary" buttonColor="primary">
        Enroll Now
      </Button>
    </div>
  );
}

const cardStyle = {
    width: 300,
    height: 300,
    margin: 10,
    padding: 10
}
export default CourseCard;
