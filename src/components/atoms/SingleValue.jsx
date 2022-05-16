import React from 'react'
import {
  Grid
} from "@material-ui/core";

function singleValue(props) {
  const {featureImage} = props.singleValue
  console.log(props.singleValue)
  return (
        <Grid>
        {/* <Grid container alignItems="center" justify="space-around" spacing={1}> */}
            <img
              src={featureImage}
              alt="right-on-education-our-values"
              width="100%"
              />
        </Grid>
  );
}

export default singleValue;