import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import ProfileMembers from '../molecules/ProfileMembers'
import placeholder from '../../images/our-team.png'
function TeamMembers(props) {
  return (
    <Box component="section" style={{ background: "#322759"}}>
      <Grid container justify="center" >
        <div className='team-intro'>
        <h1 
          className='team-banner'>
          Meet Our Team
          <hr className='team-banner-underline'/>
        </h1>
        </div>
        <ProfileMembers {...props}/>
      </Grid>
    </Box>
  );
}
  
  export default TeamMembers;