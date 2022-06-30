import React from "react";
import { Box, Grid, Card, CardContent, CardMedia } from "@material-ui/core";
import vision from '../../images/vision.png'

function AboutTopIntro(props) {
  const { styles } = props;
  return (
    <Card className='vision-card' style={{ background: "rgba(84, 38, 120, 0)", boxShadow: "none", filter: "drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25))" }} >


      <CardContent style={{
        background: "#394A99", borderRadius: "30px",
        paddingTop: "0px", paddingLeft: "0px", paddingRight: "0px", paddingBottom: "2px"
      }}>
        <CardContent>
          <h1 className="mission-and-vision-header">Vision</h1>
          <div className="mission-and-vision-underline"></div>
        </CardContent>
        <div style={{ padding: "0px", marginBottom: "28px" }}>
          <div className="mission-and-vision-text">
            Unlocking STEM potential in all youth.
          </div>
        </div>
      </CardContent>
      <CardContent style={{ padding: "0px" }}>
        <img
          className="vision-monsters-desktop"
          src={vision}
          width="450px"
          style={{ marginLeft: "17%" }}
        />
        <img
          className="vision-monsters-tablet"
          src={vision}
          width="365px"
          style={{ marginLeft: "18%" }}
        />
        <img
          className="vision-monsters-mobile"
          src={vision}
          width="300px"
          style={{ marginLeft: "7%" }}
        />
      </CardContent>

    </Card >



  );
}

export default AboutTopIntro;
