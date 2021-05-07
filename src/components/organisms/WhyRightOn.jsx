import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";
import SectionHeading from '../atoms/SectionHeading'
import SingleWhy from '../atoms/SingleWhy'
import chromebook from 'images/chromebook_mockup.jpg'
import RightOnVideo from '../atoms/RightOnVideo';

function WhyRightOn(props) {
  const { whyRightOn } = props
  return (
    <Box component="section">
      <Grid container justify="space-around" alignItems="center" spacing={5}>
        <Grid item sm={12}>
          <SectionHeading />
        </Grid>
        <RightOnVideo/>
        <Grid
          item
          container
          xs={12}
          sm={8}
          md={10}
          spacing={4}
          justify="space-around"
        >
          {whyRightOn.map((singleWhy, key) => {
            return (
              <Grid item md={4}>
                <SingleWhy key={key} singleWhy={singleWhy} />
              </Grid>
            );
          })}
        </Grid>
        {/* <Grid item container justify="space-around" alignItems="center" xs={12} sm={12}> */}
          <Grid align="center" xs={12} sm={12} md={8}>
            <img
              src={chromebook}
              width="100%"
              alt="right-on-education-chromebook-app"
            />
          </Grid>
        {/* </Grid> */}
      </Grid>
    </Box>
  );
}

export default WhyRightOn;