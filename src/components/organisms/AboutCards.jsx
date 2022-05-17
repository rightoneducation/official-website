import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";

function AboutCards(props) {
    const { aboutCards } = props
    return (
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
);
}

export default AboutCards;
