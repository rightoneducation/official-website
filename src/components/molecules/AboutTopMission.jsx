import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import placeholder from '../../images/mission-desktop.png'
import monster from '../../images/mission.png'

function AboutTopMission(props) {

  return (
    <Card style={{ backgroundColor: "#800D15", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)", borderRadius: "30px", marginBottom: "40px" }}
      className='mission-card'>
      <CardContent>
        <h1 className="mission-and-vision-header">Mission</h1>
        <div className="mission-and-vision-underline"></div>
      </CardContent>
      <CardContent style={{ padding: "0px" }}>

        <div className="mission-and-vision-text">
          Creating classroom environments <br className="mission-desktop-br">
          </br>that <br className="mission-tablet-br"></br><br className="mission-mobile-br"></br>
          <strong> embrace mistakes and </strong><br className="mission-desktop-br"></br>
          <div className="mission-monster-desktop">
            <img
              src={monster}
              style={{ float: "left", marginTop: "10px" }}
            />
          </div>
          <strong>misconceptions </strong><br className="mission-desktop-br"></br>
          <div className="mission-monster-tablet">
            <img
              src={monster}
              style={{ width: "200px", float: "left", marginTop: "15px" }}
            />
          </div>

          by turning <br className="mission-mobile-br"></br>them into <br className="mission-desktop-br"></br>
          learning<br className="mission-tablet-br"></br> opportunities.
          <div className="mission-monster-mobile">
            <img
              src={monster}
              style={{ width: "220px", marginLeft: "10px", marginTop: "15px", transform: "rotate(345deg)" }}
            />
          </div>
        </div>
      </CardContent>

    </Card >
  );
}


export default AboutTopMission;