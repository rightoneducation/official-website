import React from 'react'
import { Box } from "@material-ui/core";
import AboutBannerImage from '../molecules/AboutBannerImage'
import AboutVisionCard from '../molecules/AboutVisionCard'
import AboutMissionCard from '../molecules/AboutMissionCard';


function OurVision (props) {
  const {styles} = props
    return (
      <Box components="section">
        <AboutBannerImage styles={styles}/>
        <AboutVisionCard styles={styles}/>
        <AboutMissionCard styles={styles}/>
      </Box>
    );
}

export default OurVision;