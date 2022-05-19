import React from "react";
import { Grid } from "@material-ui/core";
import image from "../../images/banner-background.png";

function ResourcesHeader(props) {
  return (
    <Grid>
      <img src={image} width="100%" alt="banner-background"/>
    </Grid>
  );
}

export default ResourcesHeader;