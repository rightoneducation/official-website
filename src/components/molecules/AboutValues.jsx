import React from "react";
import { Grid } from "@material-ui/core";
import SingleValue from '../atoms/SingleValue'

function AboutValues(props) {
  const {ourValues} = props
  return (
    <Grid item container>
          {ourValues.map((singleValue, key) => {
            return (
              <Grid item md={4}>
                <SingleValue key={key} singleValue={singleValue} />
              </Grid>
            );
          })}
    </Grid>
  );
}

export default AboutValues;