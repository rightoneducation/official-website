import React from "react";
import { Grid, Typography } from "@material-ui/core"; //Card, CardContent


export default function GameShowHeading(props) {
//   const { styles } = props;
  return (
    <Grid  >
      {/* <Grid item md={3}>
        <div className="divider"/>
      </Grid>
      <Grid item>
        <Typography variant="h4" style={{color: "white", padding: '8px 0px'}}>RightOn! Game Show</Typography>
      </Grid> */}
      {/* <Grid item md={3}>
        <div className="divider" />
      </Grid> */}
      <h4 className="team-page-banners">
        RightOn! Game Show
        <hr className="about-page-banners-underline"/>
      </h4>
    </Grid>
  );
}