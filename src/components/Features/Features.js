import React from "react";
import "./Features.css";
import Grid from "@material-ui/core/Grid";
import BenifitCard from "../../pages/CourseDescription/BenifitCards";
import { Typography } from "@material-ui/core";

function Features() {
  return (
    <div className="features" style={{margin:"20px"}}>
      <center><h1>Why ProInsite ?</h1></center>
      <Grid className="feature-grid" container spacing={3}>
        <Grid alignItems="center" justify="center" item xs={12} sm={12} md={4} lg={4}>
          <h2 className="text-center">
            Learning academics
          </h2>
          <center>
          <img style={{justifyContent:"center"}} src="/assets/images/why1.png" alt="icons"/>
          </center>
          
          <Typography align="center">
          gain mastery over markets that empowers people to be more self sufficient allowing the pursuit of a passionate, fulfilling and purpose driven life.
          </Typography>
        </Grid>
        <Grid alignItems="center" justify="center" item xs={12} sm={12} md={4} lg={4}>
          <h2 className="text-center">
            Live mentorship
          </h2>
          <center>
          <img style={{justifyContent:"center"}} src="/assets/images/why2.png" alt="icons"/>

          </center>
        <Typography align='center'>
        accelerate your growth and achieve excellence with exclusive goLIVE training from a team of master educators committed to your success.
        </Typography>
          {/* <div className="feature-content">
            <h3>Discussion Forums</h3>
            <p>
              Now you can ask questions and discuss your problems with
              instructor and other students, within the class.
            </p>
          </div>
          <div className="feature-content">
            <h3>Certificates</h3>
            <p>
              You will get a training certificate (not just a completion
              certificate), signed by instructor with unique ID, after
              completion of course. Certifications are verified and maintained
              by LearnCodeOnline
            </p>
          </div> */}
        </Grid>
        <Grid alignItems="center" justify="center" item xs={12} sm={12} md={4} lg={4}>
          <h2 className="text-center">
            Startegies
          </h2>
          <center>
          <img style={{justifyContent:"center"}} src="/assets/images/why3.png" alt="icons"/>

          </center>
          <Typography align='center'>
          expand your learning and mentorship with simple unique strategies that can make it much easier too
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Features;
