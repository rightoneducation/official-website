import React from 'react'
import { Grid, Typography } from "@material-ui/core";

function singleFeature (props) {
  const {title, featureIcon, description} = props.feature
  return(
    <Grid container justify="center" spacing={2}>
        <Grid item>
          <center><img src={featureIcon} width='90%' alt="product-features" /></center>
        </Grid>
    </Grid>
  )
}

export default singleFeature;