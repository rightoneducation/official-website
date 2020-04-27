import React from "react";
import { Grid } from "@material-ui/core";
import image from "../../images/believe-in-yourself.jpg";

function CultureOfErrorImage(props) {
  return (
    <Grid xs={12} sm={12} md={8} style={{ padding: "0" }}>
      <img src={image} width="100%" />
    </Grid>
  );
}

export default CultureOfErrorImage;
