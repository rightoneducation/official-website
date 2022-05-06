import React from "react";
import { Grid } from "@material-ui/core";
import SingleMember from "../atoms/SingleMember";

function ProfileMembers({ profileCards, handleFlip }) {
  return (
    <Grid container justify="space-around" 
    // spacing={3} lg={10}
    >
      {profileCards.map((profile, index) => {
        return (
          <Grid item>
            <SingleMember
              key={index}
              profile={profile}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProfileMembers;
