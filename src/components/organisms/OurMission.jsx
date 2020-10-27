import React from 'react'
import { Box } from "@material-ui/core";
import LandingBannerImage from "../molecules/LandingBannerImage";
import LandingTopIntro from "../molecules/LandingTopIntro";

function OurMission (props) {
  const{styles} = props
    return (
      <Box>
        <LandingBannerImage styles={styles} />
        <LandingTopIntro styles={styles} />
      </Box>
    );
}

export default OurMission;