import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import vision from '../../images/vision.png'

function AboutTopIntro(props) {
  const { styles } = props;
  return (
    <Grid>
      <Card style={{ background: "#394A99", filter: "drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25))", borderRadius: "30px" }}
        className='vision-card'>
        <CardContent>
          <h1 className="mission-and-vision-header">Vision</h1>
          <div className="mission-and-vision-underline"></div>
        </CardContent>
        <CardContent style={{ padding: "0px" }}>
          <div className="mission-and-vision-text">
            Unlocking STEM potential in all youth.
          </div>
        </CardContent>
      </Card >
      <img
        src={vision}
        style={{ marginLeft: "140px" }}
      />
    </Grid>
  );
}

export default AboutTopIntro;
