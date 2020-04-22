import React from 'react'
import { Grid, Typography } from "@material-ui/core";

function singleFeature (props) {
  const {title, featureIcon, description} = props.feature
  return(
    <Grid container justify="center" spacing={2} style={{ color: 'white' }}>
        <Grid item sm={6} md={7}>
          <center><img src={featureIcon} width='100%' alt="Icons made by Freepik from Flaticon is licensed by CC 3.0 BY" /></center>
        </Grid>
        <Grid item style={{ textAlign: "left"}}>
        <h3 style={{marginBottom: '20px'}}>{title}</h3>
        <Typography variant="body1" style={{ fontWeight:"300" }}>{description}</Typography>
        </Grid>
    </Grid>
  )
}

export default singleFeature;