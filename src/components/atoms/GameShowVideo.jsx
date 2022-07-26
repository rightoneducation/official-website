import React from "react";
import { Grid } from "@material-ui/core";

export default function GameShowVideo() {
  return (
    <Grid>
      <iframe
        className="game-show-video"
        src="https://www.youtube.com/embed/_dNfmPa6CRo"
        title="RightOn! Gameshow"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Grid>
  );
}