import React from "react";
import { Grid } from "@material-ui/core";
import SingleAdvisor from "../atoms/SingleAdvisor";

function Advisors({ advisorProfiles }) {
  return (
    <Grid container justify="center">
      {advisorProfiles.map((advisor, index) => {
        return (
          <Grid item xs={10} sm={10} md={4} lg={4}>
            <SingleAdvisor key={index} advisor={advisor} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Advisors;
