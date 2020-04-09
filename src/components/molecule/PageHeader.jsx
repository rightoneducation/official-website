import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import logo from 'righton.svg'
// import background from '../../images/header-background.svg'

import MainNav from './MainNav'

function PageHeader () {
    return (
      <Box component="header" className='page-header'>
        <div className='header-elements'>
          <div id='header-element-1'></div>
          <div id='header-element-2'></div>
          <div id='header-element-3'></div>
        </div>
        <Grid container justify="space-between" alignItems="center"  spacing={8}className="header-element-4" >
          <Grid item md={5}>
            <a href='/'><img src={logo} alt="right on education logo" width='100%' /></a> 
          </Grid>
          <Grid container alignItems="flex-end" justify="center" md={6} spacing={10}>
            <Grid item style={{fontStyle: "italic"}}>
              <Typography variant="h4" style={{
                textAlign: "right"}}>
              Unlocking every student’s potential in math!
              </Typography>
            </Grid>
            <Grid item>
              <MainNav />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
}
  
export default PageHeader; 