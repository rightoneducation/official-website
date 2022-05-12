import React from 'react'
import { Box, Grid } from "@material-ui/core";

function SectionHeading () {
    return(
        <Box>
          <Grid container justify="space-around" alignItems="center">
            <Grid item>
              <h1 className='page-banners'>
              Why RightOn!
              <hr className='page-banners-underline'/>
              </h1>
            </Grid>
          </Grid>
        </Box>
    )
}

export default SectionHeading;