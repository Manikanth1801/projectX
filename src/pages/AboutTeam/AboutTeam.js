import React from "react";
import "./AboutTeam.css";
import { Grid } from "@material-ui/core";
import TeamCard from "../../components/TeamCard/TeamCard";

const teams = [
  {
    url:
      "Ritik",
    name: "Ritik Kumar",
  },

  {
    url:
      "Reedam",
    name: "Reedam Jain",
  },

  {
    url:
      "sachin",
    name: "Sachin Mali",
  },
  {
    url:
      "abhay",
    name: "Abhay Pratap",
  }
];

function AboutTeam() {
  return (
    <div className="AboutTeam" id="aboutUs">
      <h1>Who are we ?</h1>
      <p>
      Proinsite is one of the largest online tech education company in India, focusing on courses on C++, Java, Python, Android, Machine Learning, Data science, WebDev, interview prep, tech aptitude etc. 
With the vision to teach millions in a scalable way,Proinsite  provides online teaching platform, which completely mirrors the offline classroom experience into online, and thus delivers a world-class learning experience to students.
      </p>
      <div className="team-container">
        <Grid container spacing={3}>
          {teams.map((team) => {
            return (
              <Grid item xs={12} sm={6} lg={3}>
                <TeamCard url={team.url} name={team.name} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default AboutTeam;
