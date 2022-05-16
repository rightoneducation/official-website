import React from "react";
import { Grid } from "@material-ui/core";
import image from "../../images/students-pointing-at-screen.jpg";
import placeholder from "../../images/banner-background.png"

function AboutBannerImage(props) {
  const { styles } = props;
 
  return (
      <Grid>
        <img
          src={placeholder}
          alt="banner-background"
          width="100%"
          align="top"
        />
      </Grid>
  );
}

export default AboutBannerImage;
