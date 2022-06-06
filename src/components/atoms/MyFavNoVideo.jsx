import React from "react";
import { Grid } from "@material-ui/core";

function MyFavNoVideo() {
  return (
    <Grid xs={12} sm={12} md={8}>
      <iframe
        width="100%"
        height="550"
        src="https://www.youtube.com/embed/srJWx7P6uLE"
        title="My Fav No"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Grid>
  );
}

export default MyFavNoVideo;
