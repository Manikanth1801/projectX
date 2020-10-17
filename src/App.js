import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import ContactUs from "./components/ContactUs/ContactUs";
import Courses from "./pages/Courses/Courses";
import AboutTeam from "./pages/AboutTeam/AboutTeam";
import CourseSection from "./pages/CourseSection/CourseSection";

import {Route, Switch} from "react-router";
import { BrowserRouter } from "react-router-dom";
import CourseDetails from "./pages/CourseDescription/CourseDetails";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Home />
        <CourseSection/>
        <Features />
        <AboutTeam /> */}
       
        <CourseDetails/>
        <ContactUs />
      </BrowserRouter>
    </div>
  );
}

export default App;
