import React from 'react'
import { Box, Grid } from "@material-ui/core";

function SectionHeading () {
    return(
        <Box>
          <Grid container justify="space-around" alignItems="center">
            <Grid item style={{marginBottom: "20px"}}>
              <h4 className='team-page-banners'>
              Check Out How Teachers Are Using RightOn!
                <hr className='team-page-banners-underline'/>
                
              </h4>
            </Grid>
            {/* <Grid item md={3}>
              <div className="divider"/>
            </Grid>
            <Grid item>
              <h1 style={{fontWeight: '400', textAlign:'center', fontSize:'3em', margin: '0 20px', flexFlow: 'inherit'}}>
              Why <b><em>RightOn!</em></b>
              </h1>
            </Grid>
            <Grid item md={3}>
            <div className="divider"/>
            </Grid> */}
          </Grid>
        </Box>
    )
}

export default SectionHeading;