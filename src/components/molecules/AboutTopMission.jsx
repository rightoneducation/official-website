import React from "react";
import { Grid } from "@material-ui/core";
import placeholder from '../../images/mission-desktop.png'

function AboutTopMission(props) {
  const { styles } = props;
  return (
    <Grid>
        <img
        src={placeholder}
        alt="right-on-education-mission"
        width="85%"
        />
  </Grid>
  );
}

export default AboutTopMission;