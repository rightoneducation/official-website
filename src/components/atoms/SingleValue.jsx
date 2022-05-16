import React from 'react'
import {Grid} from "@material-ui/core";

function singleValue(props) {
  const {featureImage} = props.singleValue
  return (
        <Grid>
            <img
              src={featureImage}
              alt="right-on-education-our-values"
              width="100%"
              />
        </Grid>
  );
}
export default singleValue;