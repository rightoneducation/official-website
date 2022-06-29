import React from "react";
import { Box, Grid, Card, CardContent, CardMedia } from "@material-ui/core";
import vision from '../../images/vision.png'

function AboutTopIntro(props) {
  const { styles } = props;
  return (
    <Card className='vision-card' style={{ background: "rgba(84, 38, 120, 0)", boxShadow: "none" }} >


      <CardContent style={{ background: "#394A99", filter: "drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25))", borderRadius: "30px" }}>
        <h1 className="mission-and-vision-header">Vision</h1>
        <div className="mission-and-vision-underline"></div>
        <div style={{ padding: "0px", marginBottom: "50px" }}>
          <div className="mission-and-vision-text">
            Unlocking STEM potential in all youth.
          </div>
        </div>
      </CardContent>
      <CardContent style={{ padding: "0px", marginLeft: "20%" }}>
        <img
          src={vision}
          width="400px"
        />
      </CardContent>

    </Card >



  );
}

export default AboutTopIntro;
