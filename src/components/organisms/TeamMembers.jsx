import React from 'react'
import { Box, Grid } from "@material-ui/core";
import ProfileMembers from '../molecules/ProfileMembers'
import placeholder from '../../images/our-team.png'
function TeamMembers(props) {
  return (
    <Box component="section" style={{ background: "#322759"}}>
      <Grid container justify="center" >
      <img className="team-banner"
        src={placeholder}
        alt="right-on-education-our-team"
        width="45%"
        align="top"
      />
        <ProfileMembers {...props}/>
      </Grid>
    </Box>
  );
}
  
  export default TeamMembers;