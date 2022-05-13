import React from 'react'
import {
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";

function singleValue(props) {
  const {featureImage} = props.singleValue
  return (
    <Card>
        <Grid>
        {/* <Grid container alignItems="center" justify="space-around" spacing={1}> */}
          <Grid>
            <img
              src={featureImage}
              alt="right-on-education-our-values"
              width="100%"
              />
          </Grid>
        </Grid>
    </Card>
  );
}

export default singleValue;