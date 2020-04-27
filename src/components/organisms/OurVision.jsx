import React from 'react'
import { Box } from "@material-ui/core";
import AboutBannerImage from '../molecules/AboutBannerImage'
import AboutTopIntro from '../molecules/AboutTopIntro'


function OurVision (props) {
  const {styles} = props
    return (
      <Box components="section">
        <AboutBannerImage styles={styles}/>
        <AboutTopIntro styles={styles}/>
      </Box>
    );
}

export default OurVision;