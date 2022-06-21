import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import placeholder from '../../images/mission-desktop.png'
import monster from '../../images/mission.png'

function AboutTopMission(props) {

  return (

    /* <Grid>
 
       <div className="mission-card">
         <h1 className="mission-and-vision-header">Mission</h1>
         <div className="mission-and-vision-underline"></div>
 
 
         <div className="mission-and-vision-text">
 
 
           Creating classroom environments<br></br>that
           <strong> embrace mistakes and</strong><br></br>
           <strong>misconceptions </strong><br></br>by turning them into<br></br>
           learning opportunities.
           <img
             src={monster}
             style={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               position: "absolute",
               //left: "100px",
               top: "620px"
             }}
 
           />
         </div>
 
       </div>
 
 
       {/*<img
         src={placeholder}
         alt="right-on-education-mission"
         width="85%"
   />
       
     </Grid > */
    <Card style={{ backgroundColor: "#800D15", filter: "drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25))", borderRadius: "30px" }}
      className='mission-card'>
      <CardContent>
        <h1 className="mission-and-vision-header">Mission</h1>
        <div className="mission-and-vision-underline"></div>
      </CardContent>
      <CardContent style={{ padding: "0px" }}>

        <div className="mission-and-vision-text">
          Creating classroom environments<br></br>that
          <strong> embrace mistakes and</strong><br></br> <img
            src={monster}
            style={{ float: "left", marginTop: "10px" }}
          />
          <strong>misconceptions </strong><br></br>by turning them into<br></br>
          learning opportunities.
        </div>
      </CardContent>

    </Card >
  );
}

export default AboutTopMission;