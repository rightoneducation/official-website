import React, { Component } from "react"
import { Grid } from "@material-ui/core";

export default function OverviewVideo() {
  return (
    <Grid xs={12} sm={12} md={8} style={{ marginBottom: "70px" }}>
      <iframe
        width="860"
        height="483"
        src="https://www.youtube.com/embed/sUlnToE2bqQ"
        title="RighOn! Overview"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Grid>
  );
}

