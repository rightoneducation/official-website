import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import SingleFeature from '../atoms/SingleFeature'
import placeholder from '../../images/background-triangle.png'

function ProductFeatures (props) {
  const { productFeatures } = props
    return (
      <Grid container justify="center" style={{marginTop: "935px"}} id="productFeatures">
        {/* <Typography variant="h4" className="half-circle" style={{ textAlign: "center", color: "white", fontWeight: "bold", margin: "30px auto" }}>
              Product Features
          </Typography> */}
        <Grid container justify="space-around" style={{zIndex: "1"}}>
          {productFeatures.map((feature, key) => {
            return (
              <Grid item >
                <SingleFeature key={key} feature={feature} />
              </Grid>
            );
          })}
        </Grid>
        <img
        src={placeholder}
        width="100%"
        alt="triangle background"
        className="about-page-triangle"
      />
      </Grid>
    );
}

export default ProductFeatures;