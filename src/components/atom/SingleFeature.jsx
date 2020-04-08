import React from 'react'
import { Box, Paper, Grid, Container, Typography } from "@material-ui/core";

function singleFeature (props) {
  const {title, featureIcon, description} = props.feature
  return(
    <Grid container spacing={2}>
      <div className='card' style={{color: 'white'}}>
        <Grid >
        <div classNme='feature-items'>
          <center><img src={featureIcon} width='100%' id="feature-graphic" alt="Icons made by Freepik from Flaticon is licensed by CC 3.0 BY" /></center>
        </div>
        </Grid>
        <Grid>
        <h3 style={{marginBottom: '20px'}}>{title}</h3>
        <p>{description}</p>
        </Grid>
      </div>
    </Grid>
  )
}

export default singleFeature;