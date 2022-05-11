import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import ProfileMembers from '../molecules/ProfileMembers'
import placeholder from '../../images/our-team.png'
function TeamMembers(props) {
  return (
    <Box component="section" style={{ background: "#322759"}}>
      <Grid container justify="center">
        <Grid style={{marginBottom: "45px"}}>
        <Typography>
        <h1 
          className='team-banner'>
          Meet Our Team
        </h1>
        <hr className='team-banner-underline'/>
        </Typography>
        </Grid>
      {/* <img className="team-banner"
        style={{marginBottom: "28px"}} 
        src={placeholder}
        alt="right-on-education-our-team"
        width="45%"
        align="top"
      /> */}
        <ProfileMembers {...props}/>
      </Grid>
    </Box>
  );
}
  
  export default TeamMembers;