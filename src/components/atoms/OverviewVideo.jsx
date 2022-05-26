import React from "react";
import { Grid } from "@material-ui/core";

function OverviewVideo() {
  return (
    <Grid xs={12} sm={12} md={8} style={{ marginBottom: "70px" }}>
      <iframe 
      width="100%" 
      height="480" 
      src="https://www.youtube.com/embed/sUlnToE2bqQ" 
      title="RighOn! Overview" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      ></iframe>
    </Grid>
  );
}

export default OverviewVideo;