import React from 'react'
import { Box, Typography, Grid } from "@material-ui/core";
import ProfileMembers from '../molecules/ProfileMembers'
import placeholder from '../../images/team-title.png'
function TeamMembers(props) {
  return (
    <Box component="section">
      {/* <Typography
        variant="h4"
        style={{ marginBottom: "1.5em", fontWeight: "500", textAlign: "center" }}
      >
        Meet the Team
      </Typography> */}
      <img
        src={placeholder}
        alt="right-on-education-team-title"
        width="100%"
        align="top"
      />
      <Grid container justify="center">
        <ProfileMembers {...props}/>
      </Grid>
    </Box>
  );
}
  
  export default TeamMembers;