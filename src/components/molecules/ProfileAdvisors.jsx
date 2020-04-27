import React from "react";
import { Grid } from "@material-ui/core";
import SingleAdvisor from "../atoms/SingleAdvisor";

function Advisors({ advisorProfiles }) {
  return (
    <Grid container spacing={10}>
      {advisorProfiles.map((advisor, index) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <SingleAdvisor key={index} advisor={advisor} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Advisors;
