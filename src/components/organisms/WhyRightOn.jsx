import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";
import SectionHeading from '../atoms/SectionHeading'
import SingleWhy from '../atoms/SingleWhy'
import chromebook from 'images/chromebook_mockup.jpg'
import monsterGreen from 'images/monster_1.svg'
import monsterPink from 'images/monster_2.svg'

function WhyRightOn(props) {
  const { whyRightOn } = props
  return (
    <Box component="section">
      <Grid container justify="space-around" alignItems="center" spacing={8}>
        <Grid item sm={12}>
          <SectionHeading />
        </Grid>
        <Grid item sm={12}>
          <img
            src={chromebook}
            width="30%"
            alt="right-on-education-chromebook-app"
          />
        </Grid>
        <Grid md={1}>
          <img
            src={monsterGreen}
            width="100%"
            alt="right-on-education-character-1"
            style={{
              width: "250px",
              marginLeft: "-120%",
              transform: "rotate(38deg)",
            }}
          />
        </Grid>
        <Grid
          container
          xs={10}
          sm={8}
          md={9}
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
        <Grid md={1}>
          <img
            src={monsterPink}
            width="100%"
            alt="right-on-education-character-2"
            style={{
              width: "250px",
              marginLeft: "10%",
              transform: "rotate(-45deg)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default WhyRightOn;