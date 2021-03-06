import React from 'react'
import { Box, Typography, Grid } from "@material-ui/core";
import ProfileMembers from '../molecules/ProfileMembers'

function TeamMembers(props) {
  return (
    <Box component="section">
      <Typography
        variant="h4"
        style={{ marginBottom: "1.5em", fontWeight: "500", textAlign: "center" }}
      >
        Meet the Team
      </Typography>
      <Grid container justify="center">
        <ProfileMembers {...props}/>
      </Grid>
    </Box>
  );
}
  
  export default TeamMembers;