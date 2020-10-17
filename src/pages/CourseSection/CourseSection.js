import React, { Fragment } from "react";
import Courses from "../Courses/Courses";

const foundationCourses = [
  {
    image: "c",
    title: "C Programming",
  },
  {
    image: "c++",
    title: "C++",
  },
  {
    image: "java",
    title: "Java",
  },
  {
    image: "python",
    title: "Python",
  },
];

const developmentCourses = [
  {
    image: "android",
    title: "Android Application Development",
  },
  {
    image: "full_stack",
    title: "Full Stack Development",
  },
  {
    image: "frontend",
    title: "Frontend Development",
  },
  {
    image: "backend",
    title: "Backend Development",
  },
];

const coreComputerScienceCourses = [
  {
    image: "data_structure",
    title: "Data Structures and Algorithms",
  },
];

function CourseSection() {
  return (
    <Fragment>
      <div className="foundationCourses">
      <Courses title="Foundation Courses"  sectionid={foundationCourses} courseList={foundationCourses} />
      </div>
      <div className="developmentCourses" >
      <Courses title="Development Courses" sectionid={developmentCourses} courseList={developmentCourses} />
      </div>

      <div className="corecomputerScience">
      <Courses
        title="Core Computer Science"
        courseList={coreComputerScienceCourses}
      />
      </div>
      
    
    </Fragment>
  );
}

export default CourseSection;
