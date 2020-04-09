import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Grid, Container, Typography } from "@material-ui/core";
import SingleFeature from '../atom/SingleFeature'

function ProductFeatures (props) {
    return (
      <Box component="section" id="features">
        <Typography variant="h4" className="section-heading half-circle" style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
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