import React from "react";
import { Grid } from "@material-ui/core";
import placeholder from '../../images/mission-desktop.png'
import monster from '../../images/mission.png'

function AboutTopMission(props) {

  return (

    <Grid>

      <div className="mission-card">
        <h1 className="mission-and-vision-header">Mission</h1>
        <div className="mission-and-vision-underline"></div>


        <div className="mission-and-vision-text" >

          Creating classroom environments<br></br>that
          <strong> embrace mistakes and</strong><br></br>
        </div>

        <div>
          <img src={monster}
            alt="right-on-education-mission"
            width="230px" float="left" />

          <div className="mission-and-vision-text">


            <strong>misconceptions </strong><br></br>by turning them into<br></br>
            learning opportunities.</div>
        </div>

      </div>



      {/*<img
        src={placeholder}
        alt="right-on-education-mission"
        width="85%"
  />*/}
    </Grid >
  );
}

export default AboutTopMission;