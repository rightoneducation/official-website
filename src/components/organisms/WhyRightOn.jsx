import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";
import SectionHeading from '../atoms/SectionHeading'
import SingleWhy from '../atoms/SingleWhy'
import iphonemockup from 'images/app-iphone-mockup.png'

function WhyRightOn(props) {
  const { whyRightOn } = props
  return (
    <Box component="section">
        <Grid container justify="space-around" alignItems="center" spacing={8}>
          <Grid item sm={12}>
            <SectionHeading />
          </Grid>
          <Grid container xs={10} sm={10} md={7} spacing={3}>
            {whyRightOn.map((singleWhy, key) => {
              return (
                <Grid item>
                  <SingleWhy key={key} singleWhy={singleWhy} />
                </Grid>
                );
              })}
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <img src={iphonemockup} width="100%" alt="righton-mobile-app-version"/>
          </Grid>
        </Grid>
    </Box>
  );
}

export default WhyRightOn;