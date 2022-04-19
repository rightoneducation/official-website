import React from 'react'
import { Box, Typography, Grid } from "@material-ui/core";
import ProfileMembers from '../molecules/ProfileMembers'
import placeholder from '../../images/team-title.png'
import { StylesContext } from '@material-ui/styles';
function TeamMembers(props) {
  return (
    <Box component="section">
      {/* <Typography
        variant="h4"
        style={{ marginBottom: "1.5em", fontWeight: "500", textAlign: "center" }}
      >
        Meet the Team
      </Typography> */}
      
      <Grid container alignItems="center" justify="space-around">
      <img
        src={placeholder}
        alt="right-on-education-team-title"
        width="60%"
        align="top"
      />
        <ProfileMembers {...props}/>
      </Grid>
    </Box>
  );
}
  
  export default TeamMembers;