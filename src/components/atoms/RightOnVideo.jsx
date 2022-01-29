import React from "react";
import { Grid } from "@material-ui/core";

function RightOnVideo() {
  return (
      <Grid xs={12} sm={12} md={8}>
        <iframe
          width="100%"
          height="420"
          src="https://www.youtube.com/embed/ETvpOCfGDlY"
          title="RightOn! Beta overview"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Grid>
  );
}

export default RightOnVideo;
