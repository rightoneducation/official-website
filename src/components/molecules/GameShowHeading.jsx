import React from "react";
import { Grid } from "@material-ui/core"; //Card, CardContent

export default function GameShowHeading(props) {
//   const { styles } = props;
  return (
    <Grid container justify="space-around" alignItems="center" style={ {marginBottom: '30px', marginTop: '20px'} }>
      <Grid item md={3}>
        <div className="divider"/>
      </Grid>
      <Grid item>
        <h1 style={ {color: 'white', margin: '0px'} }>RightOn! Game Show</h1>
      </Grid>
      <Grid item md={3}>
        <div className="divider" />
      </Grid>
    </Grid>
  );
}