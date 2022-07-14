import React from "react";
import { Paper } from "@material-ui/core";
import placeholder from "../../images/team-monster-banner.png";
import mobileMonsters from "../../images/team-banner-mobile.png"

function LandingBannerImage(props) {
  const { styles } = props;

  return (
    <Paper elevation={2} >
      <img 
        src={placeholder}
        alt="right-on-education-monster-banner"
        className="team-page-monsters"
      />
      <img
        src={mobileMonsters}
        alt="right-on-education-monster-banner"
        className="team-page-monsters-mobile"
        />
    </Paper>
  );
}

export default LandingBannerImage;
