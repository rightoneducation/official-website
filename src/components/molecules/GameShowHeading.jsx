import React from "react";
import { Grid, Typography } from "@material-ui/core"; //Card, CardContent

export default function GameShowHeading(props) {
//   const { styles } = props;
  return (
    <Grid container style={ {marginBottom: '30px', marginTop: '20px'} }>
      {/* <Grid item md={3}>
        <div className="divider"/>
      </Grid>
      <Grid item>
        <Typography variant="h4" style={{color: "white", padding: '8px 0px'}}>RightOn! Game Show</Typography>
      </Grid>
      <Grid item md={3}>
        <div className="divider" />
      </Grid> */}
      <Grid item>
        <h4 className="crmt-header">
          RightOn! Game Show
          <hr className="error-analysis-underline"/>
          </h4>
      </Grid>
    </Grid>
  );
}