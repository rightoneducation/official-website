import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";

import Logos from '../atoms/Logos' ;
import SectionHeading3 from '../atoms/SectionHeading3';
//import Supporters from '../../_localDb/features';

function Supporters(props) {
  const { supporters } = props
  return (
    <Box component="section">
      <Grid container justify="center" alignItems="center" spacing={5}>
        
        <Grid item sm={12}>
          <SectionHeading3 />
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid
          item
          container
          spacing={5}
          justify="center"
          className="why-cards-section"
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