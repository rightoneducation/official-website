import React from 'react'
import { Box, CardContent, Grid, } from "@material-ui/core";
import AboutBannerImage from '../molecules/AboutBannerImage'
import AboutTopIntro from '../molecules/AboutTopIntro';
import AboutTopMission from '../molecules/AboutTopMission';
import vision from '../../images/vision.png';


function OurVision(props) {
  const { styles } = props
  return (
    <Box components="section">
      <AboutBannerImage styles={styles} />
      <Grid container style={{ padding: "40px", justifyContent: "space-around" }} styles={styles}>
        <AboutTopMission />
        <AboutTopIntro />

      </Grid>
    </Box>
  );
}

/*<img
            src={vision}
            style={{}}
          />*/
export default OurVision;