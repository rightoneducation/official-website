import React from 'react'
import { Box } from "@material-ui/core";

function OurNewMission (props) {
  const{styles} = props
    return (
      <Box>
        <LandingBannerImage styles={styles} />
        <LandingTopIntro styles={styles} />
      </Box>
    );
}

export default OurNewMission;