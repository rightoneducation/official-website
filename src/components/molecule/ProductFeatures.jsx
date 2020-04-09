import React from 'react'
import { Box, Paper, Grid, Container, Typography } from "@material-ui/core";
import SingleFeature from '../atom/SingleFeature'

function ProductFeatures (props) {
    return (
      <Box component="section" id="features">
        <Typography variant="h4" className="half-circle" style={{ textAlign: "center", color: "white", fontWeight: "bold", margin: "30px auto" }}>
              Product Features
          </Typography>
        <Grid container justify="space-around" spacing={5}>
          {props.features.features.map((feature, key) => {
            return (
              <Grid item xs={7} sm={7} md={4}>
                <SingleFeature key={key} feature={feature} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
}

export default ProductFeatures;