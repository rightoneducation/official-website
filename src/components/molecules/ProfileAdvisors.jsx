import React from "react";
import { Grid } from "@material-ui/core";
import SingleAdvisor from "../atoms/SingleAdvisor";

function Advisors({ advisorProfiles }) {
  return (
    <Grid container justify="space-evenly" >
      {advisorProfiles.map((advisor, index) => {
        return (
          <Grid item >
            <SingleAdvisor
              key={index}
              advisor={advisor}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Advisors;
