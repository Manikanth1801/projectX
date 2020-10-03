import React from 'react';
import Courses from '../Courses/Courses';

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
    }
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
  }
];

const coreComputerScienceCourses = [
  {
    image: "data_structure",
    title: "Data Structures and Algorithms",
  }
];

function CourseSection() {
    return (
        <div>
            <Courses title="Foundation Courses" courseList={foundationCourses}/>
            <Courses title="Development Courses" courseList={developmentCourses}/>
            <Courses title="Core Computer Science" courseList={coreComputerScienceCourses}/>
        </div>
    )
}

export default CourseSection;
