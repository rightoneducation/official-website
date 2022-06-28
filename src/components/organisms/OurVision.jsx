import React from 'react'
import { Box, Grid } from "@material-ui/core";
import AboutBannerImage from '../molecules/AboutBannerImage'
import AboutTopIntro from '../molecules/AboutTopIntro'
import AboutTopMission from '../molecules/AboutTopMission';


function OurVision(props) {
  const { styles } = props
  return (
    <Box components="section">
      <AboutBannerImage styles={styles} />
      <Grid container justifyContent='space-evenly' styles={styles}>
        <AboutTopMission />
        <AboutTopIntro />
      </Grid>
    </Box>
  );
}

export default OurVision;