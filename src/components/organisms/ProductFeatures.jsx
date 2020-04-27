import React from 'react'
import { Box, Paper, Grid, Container, Typography } from "@material-ui/core";
import SingleFeature from '../atoms/SingleFeature'

function ProductFeatures (props) {
  const { productFeatures } = props
    return (
      <Box component="section" style={{background: "linear-gradient(221.31deg, #FF3369 0%, #662AAF 73.19%)"}}>
        <Typography variant="h4" className="half-circle" style={{ textAlign: "center", color: "white", fontWeight: "bold", margin: "30px auto" }}>
              Product Features
          </Typography>
        <Grid container justify="space-around">
          {productFeatures.map((feature, key) => {
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