import React from "react";
import "./Features.css";
import Grid from "@material-ui/core/Grid";

function Features() {
  return (
    <div className="features">
      <h2>Why ProInsite ?</h2>
      <Grid className="feature-grid" container spacing={3}>
        <Grid alignItems="center" justify="center" item xs={12} sm={6}>
          <img
            src="/assets/images/features.jpg"
            alt=""
            className="feature-img"
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <div className="feature-content">
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
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Features;
