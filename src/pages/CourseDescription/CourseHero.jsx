import React, { Fragment } from 'react';
import SignUp from '../../components/registration form/signup';
import BenifitCard from './BenifitCards';
import CourseItenary from './courseItenary';
import Box from '@material-ui/core/Box';
import PriceCard from './PriceCard';
import FeedbackCard from './feedbackCards';
import{Link, animateScroll} from 'react-scroll'

const CourseHero=(props)=> {
    return (
       <Fragment>
        <div className="coursedetailsHero container-fluid">
          <div className="container">
            <h1 className="text-white display-3">	&lt;{props.features.courseName}	/&nbsp;&gt;</h1>
          </div>
          <div className="heroContent col-xs-12 col-sm--12 col-md-7 col-lg-8">
            <p className="text-white">{props.heroContent.headContent}</p>
          </div>
          <div className="heroBtn col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-row-reverse ">
            <Link to="signUp" smooth={true} offset={-100} duration={1000}>
            <button className="btn btn-primary" type="submit">
              Register
              </button>
            </Link>
            
          </div>
        </div>
        <div className="container">
          {/* <div className="headTop">
            <h1 className="display-4 mt-4">Course Name</h1>
          </div>

          <div>
            <div className=" headDes col-xs-12 col-sm-12 col-md-7 col-lg-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste hic facere saepe distinctio explicabo similique nisi, voluptates excepturi ut assumenda quia optio dignissimos impedit quisquam dolore laborum animi doloremque et!
            </div>
          </div> */}
          <div className="content my-5">
            <div className="row">
              <div className="courseFetures col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <h3>{props.features.courseName} <strong style={{ borderBottom: "1px solid darkred" }}>Features</strong> in <span style={{ color: "#012971" }}>Proinsite</span></h3>
                <div className="row mt-3" style={{fontSize:"medium"}}>
                  <div className="col-sm-12 col-md-6 col-lg-6 " >
                    <span >{props.features.feature1} </span>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <span>{props.features.feature2}</span>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm-12 col-md-6 col-lg-6 ">
                    <span>{props.features.feature3} </span>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <span>{props.features.feature4} </span>
                  </div>
                </div>
              </div>
              {/* <div className="skill col-sm-12 col-md-5 col-lg-5 border-left ">
                <h3 className="border-bottom border-danger py-2">
                  Skill gained
                </h3>
                <div className="row">

                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                    
                  <i className="fab fa-git-alt h4">{props.skill.skill1}</i>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                  <i className="fab fa-node-js h4">{props.skill.skill2}</i>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                  <i className="fab fa-git-alt h4">{props.skill.skill3} </i>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                  <i className="fab fa-node-js h4">{props.skill.skill4}</i>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                  <i className="fab fa-node-js h4">{props.skill.skill5}</i>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                  <i className="fab fa-node-js h4">{props.skill.skill6}</i>
                  </div>
                
                </div>
                
              </div> */}
            </div>
            <div className="row benifits my-5">
              <div className="col-sm-12 col-md-12 col-lg-12">
              <h3>
                Benifits
              </h3>
              <p className="benifitContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ab. 
                Id impedit sequi placeat vitae voluptatem delectus, quasi harum ipsam dolores tempora doloremque at
              iure nam animi. Nemo, possimus quia.</p>
              </div>
              
              {/* <div className="col-sm-12 col-md-3 col-lg-3 benifitCard">
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3  benifitCard">
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3  benifitCard">
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3  benifitCard">
              </div> */}
              
              <BenifitCard ></BenifitCard>

              <BenifitCard ></BenifitCard>

              <BenifitCard ></BenifitCard>

              <BenifitCard ></BenifitCard>

              
            </div>

            <div className="aboutCourse ">
              <div className="row">
                
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <h1 className="container">About Course</h1>
                  <p>
                  {props.about.aboutContent}
                  </p>
                  <div className="courseItenary">
                    <CourseItenary></CourseItenary>
                  </div>
                  
                 
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 " id="signUp" >
                  <SignUp ></SignUp>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-12 col-md-12 col-lg-12 pricing">
             <PriceCard></PriceCard>
            </div> */}
            {/* <div className="col-sm-12 col-md-12 col-lg-12 my-5 feedback" style={{marginTop:"40px"}}>
            <FeedbackCard triCard={props.triCard}> </FeedbackCard>
            </div> */}
            
            
             
          </div>
        </div>
       </Fragment>
    )
}

export default CourseHero
