import React from 'react'
import { Box, Grid } from "@material-ui/core";

function SectionHeading (props) {
    return(
        <Box>
          <Grid container justify="space-around" alignItems="center">
            <Grid item style={{marginBottom: "20px"}}>
              <h4 className='landing-page-banners'>
                {props.title}
                <hr className='team-page-banners-underline'/>
              </h4>
            </Grid>
          </Grid>
        </Box>
    )
}

export default SectionHeading;