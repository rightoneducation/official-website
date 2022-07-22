import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import SingleFeature from '../atoms/SingleFeature'
import placeholder from '../../images/background-triangle.png'

function ProductFeatures (props) {
  const { productFeatures } = props
    return (
      // <div id="productFeatures">
      <Grid container justify="center" style={{marginTop: "350px"}}>
        <Grid container justify="space-around" style={{zIndex: "1"}} id="productFeatures">
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
      // </div>
    );
}

export default ProductFeatures;