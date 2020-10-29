import React from "react";
import "./Home.css";
import { FaSearch } from "react-icons/fa";
import Carousel from './Carousel/carousel';
import Card from "./Card/Card";
import { Link, animateScroll } from 'react-scroll';


const callCard = () => {
  return (
    <Card
          title="College Courses"
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb-pGFkk0m-FQxmA6wOPXJWh47rBRWF_972Q&usqp=CAU"
        />
  );
}

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">
        Explore <span>Skills</span>
      </h1>
      <div className="home-search">
        <FaSearch className="fa-search" />
        <input name="search" placeholder="Search your favourite courses.." />
      </div>
      <div className="home-selection">
        <h3>What would you like to learn?</h3>
        <p>
          Discover and Enroll New Cources and Get Latest Skills into your Bucket
        </p>
      </div>
      <div className="home-card">
        <Card
          title="School Courses"
          url="/assets/images/kids.jpg"
        />
        <Link to="coursesection" smooth={true} offset={-100} duration={1000}>

        
        </Link>
        <Card
          title="College Courses"
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb-pGFkk0m-FQxmA6wOPXJWh47rBRWF_972Q&usqp=CAU"
          />
      </div>
      {/* <Carousel ></Carousel> */}
    </div>
  );
}

export default Home;
