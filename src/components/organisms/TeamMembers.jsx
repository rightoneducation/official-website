import React from 'react'
import { Box, Grid } from "@material-ui/core";
import ProfileMembers from '../molecules/ProfileMembers'
import placeholder from '../../images/team-title.png'
function TeamMembers(props) {
  return (
    <Box component="section" style={{ background: "#322759"}}>
      <Grid container justify="center">
      <img
        src={placeholder}
        alt="right-on-education-team-title"
        width="45%"
        align="top"
      />
        <ProfileMembers {...props}/>
      </Grid>
    </Box>
  );
}
  
  export default TeamMembers;