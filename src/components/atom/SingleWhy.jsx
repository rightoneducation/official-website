import React from 'react'
import {
  Grid,
  Card,
  CardContent,
  Paper,
  Typography
} from "@material-ui/core";

function singleWhy(props) {
  const { title, featureImage, description } = props.singleWhy
  return (
    <Card>
      <CardContent>
        <Grid container justify="space-around" alignItems="center" spacing={3}>
          <Grid item md={5}>
          <img
            src={featureImage}
            alt="right-on-education-product-features"
            width="100%"
          />
          </Grid>
          <Grid item md={7}>
          <h3
            style={{
              marginBottom: "20px",
              paddingBottom: "5px",
              borderBottom: "2px solid red"
            }}
          >
            {title}
          </h3>
          <p>{description}</p>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default singleWhy;

// 