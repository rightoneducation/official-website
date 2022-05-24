import React from 'react'
import { Grid, Typography } from "@material-ui/core";

function singleFeature (props) {
  const {title, featureIcon, description} = props.feature
  return(
    <Grid container justify="center" spacing={2}>
        <Grid item>
          <center><img src={featureIcon} width='90%' alt="product-features" /></center>
        </Grid>
        {/* <Grid item style={{ textAlign: "left"}} sm={12} md={10}>
        <h3 style={{marginBottom: '20px'}}>{title}</h3>
        <Typography variant="body1" style={{ fontWeight:"300", lineHeight: "1.4" }}>{description}</Typography>
        </Grid> */}
    </Grid>
  )
}

export default singleFeature;