import React from "react";
import { Grid } from "@material-ui/core";
import placeholder from "../../images/banner-background.png"

function AboutBannerImage(props) {
  const { styles } = props;
 
  return (
      <Grid>
        <img
          src={placeholder}
          alt="banner-background"
          width="100%"
          className="page-triangle-banner"
          // align="top"
          // height="200px"
        />
      </Grid>
  );
}

export default AboutBannerImage;
