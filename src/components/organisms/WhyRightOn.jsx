import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";
import SectionHeading from '../atoms/SectionHeading'
import SingleWhy from '../atoms/SingleWhy'
import chromebook from '../../images/chromebook_mockup.jpg'
import RightOnVideo from '../atoms/RightOnVideo';
import bottomBackground from '../../images/math-symbol-bg-bottom.png'
import redMonster from '../../images/red-monster.png'
import blueMonster from '../../images/blue-monster.png'

function WhyRightOn(props) {
  const { whyRightOn } = props
  return (
    <Box component="section">
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item sm={12}>
          <SectionHeading />
        </Grid>
        <RightOnVideo />
        <Grid item sm={12}>
          <img
          src={redMonster}
          alt="red-monster"
          className='red-monster'
          />
          <img
          src={blueMonster}
          alt="blue-monster"
          className='blue-monster'
          />
        </Grid>
        <Grid item>
          <img
            src={bottomBackground}
            alt="math-background"
            className='why-right-on-bottom-background'
          />
        </Grid>
        <Grid
          item
          container
          spacing={5}
          justify="center"
          style={{ zIndex: "1" }}
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