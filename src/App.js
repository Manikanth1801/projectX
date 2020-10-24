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
import CourseDetails from "./pages/CourseDescription/CourseDetails";

const componentRender = () => {
  return (
    <div>
        <Home />
        <CourseSection/>
        <Features />
        <AboutTeam />
    </div>
  );
}
const Error = () => {
  return(
    <div>
      <Home />
      <CourseSection/>
      <Features />
      <AboutTeam />
    </div >
  );

}
const CoursePageRender = () => {
  return (
    <div>
      <CourseDetails ></CourseDetails>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={componentRender} />
        <Route exact path="/courseDescription" component={CourseDetails}/>
        <Route component={Error} />        
      </Switch>
      <ContactUs />

    </div>
  );
}

export default App;
