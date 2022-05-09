import React from "react";
import { Paper } from "@material-ui/core";
import placeholder from "../../images/team-monster-banner.png";

function LandingBannerImage(props) {
  const { styles } = props;

  return (
    <Paper elevation={2} className={styles.bannerImage}>
      <img 
        src={placeholder}
        alt="right-on-education-monster-banner"
        width="100%"
        max-width="756.4px"
        align="top"
      />
    </Paper>
  );
}

export default LandingBannerImage;
