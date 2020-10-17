import React from "react";
import "./CourseCard.css";
import Button from "../Button/Button";
import {Link} from 'react-router-dom';


function CourseCard({ image, title }) {
  return (
    <div style={cardStyle} className="CourseCard">
      <img className="CourseCard-img" src={image} alt="image here" />
      <h3 className="CourseCard-title">{title}</h3>
      <Link to="course-description">
      <Button buttonStyle="btn--primary" buttonColor="primary">
            Enroll Now
        </Button>
      </Link>
       
    </div>
  );
}

const cardStyle = {
    width: 250,
    height: 320,
    margin: 10,
    padding: 10
}
export default CourseCard;
