import React from 'react'
import { Box, Grid } from "@material-ui/core";
import ProfileAdvisors from '../molecules/ProfileAdvisors'
import placeholder from '../../images/advisor-title.png'



function Advisors(props) {
  return (
    <Box component="section" style={{marginTop: "-25px"}}>
      <Grid container justify="center" >
      <div className='team-page-intros'>
        <h1 
          className='page-banners'>
          Our Advisors
          <hr className='page-banners-underline'/>
        </h1>
        </div>
        <ProfileAdvisors {...props}/>
      </Grid>
    </Box>
  );
}

export default Advisors;