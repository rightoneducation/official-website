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
      <Grid container style={{ padding: "0px", justifyContent: "space-around", width: "100%" }} styles={styles}>
        <AboutTopMission style={{ width: "100%" }} />
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