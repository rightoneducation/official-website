import React from 'react'
import { Box, Paper, Card, CardContent, Typography } from "@material-ui/core";
import LandingBannerImage from "../molecules/LandingBannerImage";
import LandingTopIntro from "../molecules/AboutTopIntro";

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