import React from "react";
import { Grid, Typography } from "@material-ui/core"; //Card, CardContent

export default function GameShowHeading(props) {
  return (
    <Grid container className="game-show-align">
      <Grid item>
        <h4 className="game-show-header">
          RightOn! <br className="mobile-break"></br>Game Show
          <hr className="game-show-header-underline" />
        </h4>
      </Grid>
    </Grid>
  );
}