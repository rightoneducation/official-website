import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";
import SectionHeading from '../atoms/SectionHeading'
import SingleWhy from '../atoms/SingleWhy'
import topBackground from '../../images/background-symbols.svg'
import RightOnVideo from '../atoms/RightOnVideo';

function WhyRightOn(props) {
  const { whyRightOn } = props

  return (
    <Box component="section">
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item sm={12} style={{ zIndex:3 }}>
          <SectionHeading title="Check out how teachers are using RightOn!" />
        </Grid>
            <RightOnVideo />
        <Grid item sm={12} style={{ zIndex:3 }}>
          <SectionHeading title="Why RightOn!" />
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={5} style={{ zIndex:'2', marginBottom: '40px'}}>
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
        

      </Grid>
      
    </Box>
  );
}

export default WhyRightOn;