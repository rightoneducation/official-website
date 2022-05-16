import React from "react";
import { Grid, GridDirection } from "@material-ui/core";
import placeholder from '../../images/vision-desktop.png'

function AboutTopIntro(props) {
  const { styles } = props;
  return (
    <Grid>
    <img
    src={placeholder}
    alt="right-on-education-vision"
    width="100%"
  />
  </Grid>
  );
}

export default AboutTopIntro;
