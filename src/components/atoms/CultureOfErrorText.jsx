import React from "react";
import { Grid, Typography } from "@material-ui/core";

function CultureOfErrorContent(props) {
  return (
    <Grid xs={12} sm={12} md={4} style={{ padding: "5%", color: "white" }}>
      <Typography variant="h5" style={{ marginBottom: "10px" }}>
        Positive Culture of Error
      </Typography>
      <Typography
        variant="body1"
        style={{ fontWeight: "300", lineHeight: "1.4" }}
      >
        <b>
          <em>RightOn!</em>
        </b>{" "}
        creates a simple way for math teachers to foster a positive culture
        of error: increasing engagement and building self-confidence through
        an app-based activity that surfaces mistakes and misconceptions in a
        safe, fun environment.
      </Typography>
    </Grid>
  );
}

export default CultureOfErrorContent;
