import React from "react";
import { Grid, GridDirection } from "@material-ui/core";
import placeholder from '../../images/vision-desktop.png';
import vision from '../../images/vision.png';

function AboutTopIntro(props) {
  const { styles } = props;
  return (
    <Grid>
      <div className="vision-card">
        <h1 className="mission-and-vision-header">Vision</h1>
        <div className="mission-and-vision-underline"></div>
        <p className="mission-and-vision-text">Unlocking STEM potential in all youth.</p>


      </div>
      <img
        src={vision}
        alt="right-on-education-vision"
        textAlign="center"
        width="380px" />



      {/*<img
    src={placeholder}
    alt="right-on-education-vision"
    width="85%"
    max-width="756.4px"
    />*/}
    </Grid>
  );
}

export default AboutTopIntro;
