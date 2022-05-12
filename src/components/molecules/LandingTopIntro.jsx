import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import placeholder from "../../images/chromebook_mockup.png";

function LandingTopIntro(props) {
  const { styles } = props;
  return (
    <Grid alignItems="center">
      <img src={placeholder} 
      width="70%" 
      alignItems="center"
      alt="chromebook-mockup" 
      />
    </Grid>
  );
}

export default LandingTopIntro;
