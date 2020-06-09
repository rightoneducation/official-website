import React from 'react'
import {
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";

function singleWhy(props) {
  const { title, featureImage, description } = props.singleWhy
  return (
    <Card>
        <Grid>
        {/* <Grid container alignItems="center" justify="space-around" spacing={1}> */}
          <Grid>
            <img
              src={featureImage}
              alt="right-on-education-product-features"
              width="100%"
              />
          </Grid>
          <Grid>
          <CardContent>
            <h3
              style={{
                marginBottom: "20px",
                paddingBottom: "5px",
                borderBottom: "2px solid red",
              }}
            >
              {title}
            </h3>
            <p>{description}</p>
          </CardContent>
          </Grid>
        </Grid>
    </Card>
  );
}

export default singleWhy;