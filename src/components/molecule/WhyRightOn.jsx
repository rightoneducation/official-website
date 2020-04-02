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
    <Box>
      <section id="why-righton">
        <SectionHeading />
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={12} md={5}>
            {props.valueprops.map((valueprop, key) => {
              return <SingleWhy key={key} singleWhy={valueprop} />;
            })}
          </Grid>
          <Grid item xs={3} sm={3} md={2}>
            <img src={iphonemockup} width="100%" />
          </Grid>
        </Grid>
      </section>
    </Box>
  );
}

export default WhyRightOn;




         