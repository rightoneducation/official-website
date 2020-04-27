import React from 'react'
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import AboutBannerImage from '../molecules/AboutBannerImage'
import AboutTopIntro from '../molecules/AboutTopIntro'
import image from '../../images/students-pointing-at-screen.jpg'


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