import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./CourseDetails.css";
import CourseHero from "./CourseHero";

const CourseDetails = () => {
  return (
    <div className="course-details">
     <CourseHero/>
    </div>
  );
};
export default CourseDetails;
