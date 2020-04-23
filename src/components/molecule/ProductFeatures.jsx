import React from 'react'
import { Box, Paper, Grid, Container, Typography } from "@material-ui/core";
import SingleFeature from '../atom/SingleFeature'

function ProductFeatures (props) {
    return (
      <Box component="section" id="features">
        <Typography variant="h4" className="half-circle" style={{ textAlign: "center", color: "white", fontWeight: "bold", margin: "30px auto" }}>
              Product Features
          </Typography>
        <Grid container justify="space-around">
          {props.features.features.map((feature, key) => {
            return (
              <Grid item xs={10} sm={8} md={3}>
                <SingleFeature key={key} feature={feature} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
}

export default ProductFeatures;