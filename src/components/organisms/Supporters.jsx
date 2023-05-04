import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";

import Logos from '../atoms/Logos' ;
import SectionHeading from '../atoms/SectionHeading';


function Supporters(props) {
  const { supporters } = props
  return (
    <Box component="section">
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item sm={12} style={{ zIndex:3 }}>
          <SectionHeading title="With support from" />
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={5} >
          <Grid
          item
          container
          spacing={5}
          justify="center"
          className="why-cards-section"
          style={{ marginBottom: "20px" }}
          >
            {supporters.map((logos, key) => { 
              return (
              <Grid item>
                <Logos key={key} logos={logos} />
              </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Supporters;