import React, { useState } from "react";
import "./Courses.css";
import { Grid } from "@material-ui/core";
import {CourseCard} from "../../components/CourseCard/CourseCard";


function Courses({ courseList, title, sectionid }) {
  const [courses] = useState(courseList);
  
  return (
    <div className="Courses" id={sectionid}>
      <h1  style={titleStyle}>{title}</h1>
      <Grid container spacing={3}>
        {courses.map((course) => {
          return (
            <Grid item xs={12} sm={6} lg={3}>
              <CourseCard image={`/assets/images/courseImage/${course.image}.png`} title={course.title} test={course.image} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

const titleStyle = {
  display: "flex",
  justifyContent: "center",
  margin: 20
}

export default Courses;
