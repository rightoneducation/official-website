import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";
import SectionHeading from '../atom/SectionHeading'
import SingleWhy from '../atom/SingleWhy'

import iphonemockup from 'images/app-iphone-mockup.png'

function WhyRightOn(props) {
  return (
    <Box component="section" id="why-righton">
        <SectionHeading />
        <Grid container justify="space-around" alignItems="center" spacing={5}>
          <Grid container xs={10} sm={10} md={8} spacing={3}>
            {props.valueprops.map((valueprop, key) => {
              return (
                <Grid item>
                  <SingleWhy key={key} singleWhy={valueprop} />
                </Grid>
                );
              })}
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <img src={iphonemockup} width="100%" />
          </Grid>
        </Grid>
    </Box>
  );
}

export default WhyRightOn;