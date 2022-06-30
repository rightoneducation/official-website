import React from "react";
import { Grid, Typography } from "@material-ui/core"; //Card, CardContent

export default function GameShowHeading(props) {
  return (
    <Grid container style={ {marginBottom: '30px', marginTop: '20px'} }>
      <Grid item>
        <h4 className="game-show-header">
          RightOn! Game Show
          <hr className="game-show-header-underline"/>
          </h4>
      </Grid>
    </Grid>
  );
}