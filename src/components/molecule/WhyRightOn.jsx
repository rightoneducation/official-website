import React from 'react'
import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import SectionHeading from '../atom/SectionHeading'
import SingleWhy from '../atom/SingleWhy'

import iphonemockup from 'images/app-iphone-mockup.png'

function WhyRightOn(props) {
  // const { title, featureImage, description } = props.valueprops
  return (
    <Box component="section" id="why-righton">
        <SectionHeading />
        <Grid container justify="space-around" alignItems="center" spacing={2}>
          <Grid container xs={10} sm={10} md={8} spacing={3}>
            {props.valueprops.map((valueprop, key) => {
              return (
                // <Grid container justify="space-around" alignItems="center" spacing={3}>
                  <SingleWhy key={key} singleWhy={valueprop} />
                // </Grid>
                );
              })}
          </Grid>
          <Grid item xs={3} sm={3} md={2}>
            <img src={iphonemockup} width="100%" />
          </Grid>
        </Grid>
    </Box>
  );
}

export default WhyRightOn;




         