import React, { Fragment } from "react";
import Carousel from "../../components/Home/Carousel/carousel";
import Courses from "../Courses/Courses";

const foundationCourses = [
  {
    
    image: "C",
    title: "C Programming",
  },
  {
    image: "CPP",
    title: "C++",
  },
  {
    image: "Java",
    title: "Java",
  },
  {
    image: "Python",
    title: "Python",
  },
];

const developmentCourses = [
  {
    image: "Android",
    title: "Android Application Development",
  },
  {
    image: "FullStack",
    title: "Full Stack Development",
  },
  {
    image: "Frontend",
    title: "Frontend Development",
  },
  {
    image: "Backend",
    title: "Backend Development",
  },
];

const coreComputerScienceCourses = [
  {
    image: "DSA",
    title: "Data Structures and Algorithms",
  },
  {
    image: "SystemDesign",
    title: "System Design"
  }
];

function CourseSection() {
  return (
    <Fragment className="my-4">
      <div className="container carouselDiv">
      <Carousel></Carousel>
      </div>
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
