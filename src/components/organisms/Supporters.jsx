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
        <Box justifyContent="center" alignItems="center" >
          <SectionHeading title="With support from" />
        </Box>
        <Grid container justifyContent="center" alignItems="center" spacing={5} >
          {supporters.map((logo) => (
            <Grid item>
              <img
                src={logo.featureImage}
                alt="right-on-education-product-features"
                style={{  
                  height: '130px', 
                  width: '320px',
                }}
              />
            </Grid>
          ))}
        </Grid>
    </Box>
  );
}

export default Supporters;