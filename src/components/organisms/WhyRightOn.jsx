import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";
import SectionHeading from '../atoms/SectionHeading'
import SingleWhy from '../atoms/SingleWhy'
import RightOnVideo from '../atoms/RightOnVideo';

function WhyRightOn(props) {
  const { whyRightOn } = props
  return (
    <Box component="section">
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item sm={12}>
          <SectionHeading />
        </Grid>
            <RightOnVideo/>
        <Grid
          item
          container
          spacing={5}
          justify="center"
          className="why-cards-section"
        >
          {whyRightOn.map((singleWhy, key) => {
            return (
              <Grid item>
                <SingleWhy key={key} singleWhy={singleWhy} />
              </Grid>
            );
          })}
        </Grid>

      </Grid>
    </Box>
  );
}

export default WhyRightOn;