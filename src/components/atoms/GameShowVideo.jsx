import React from "react";
import { Grid } from "@material-ui/core";

export default function GameShowVideo() {
  return (
      <Grid xs={12} sm={12} md={8}>
        <iframe
          width="90%"
          height="550"
          src="https://www.youtube.com/embed/_dNfmPa6CRo"
          title="RightOn! Gameshow"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Grid>
  );
}