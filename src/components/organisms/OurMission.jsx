import React from 'react'
import { Box } from "@material-ui/core";
import LandingBannerImage from "../molecules/LandingBannerImage";
import LandingTopIntro from "../molecules/LandingTopIntro";
import AboutTopMission from "../molecules/AboutTopMission"

function OurMission(props) {
  const { styles } = props
  return (
    <Box width="100%">
      {/* <LandingBannerImage styles={styles} />
        <LandingTopIntro styles={styles} /> */}
      <AboutTopMission styles={styles} />
    </Box>
  );
}

export default OurMission;