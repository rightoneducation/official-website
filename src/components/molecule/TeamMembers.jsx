import React from 'react'
import { Box, Typography, Grid } from "@material-ui/core";
import SingleMember from '../atom/SingleMember'

function TeamMembers({ profileCards, handleFlip }) {
  return (
    <Box component="section">
      <Typography
        variant="h4"
        style={{ marginBottom: "1em", fontWeight: "500", textAlign: "center" }}
      >
        Meet the Team
      </Typography>
      <Grid container justify="center">
        <Grid container justify="center" spacing={3} lg={10}>
          {profileCards.map((profile, index) => {
            return (
              <Grid item>
                <SingleMember
                  key={index}
                  profile={profile}
                  handleFlip={() => handleFlip(profile)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
  
  export default TeamMembers;