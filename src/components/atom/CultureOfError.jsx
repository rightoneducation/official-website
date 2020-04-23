import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import image from '../../images/believe-in-yourself.jpg'

function CultureOfError (props) {
    return (
      <Box components="section" style={{ background: "#772A79" }}>
        <Grid container alignItems="center">
          <Grid xs={12} sm={12} md={8} style={{ padding: "0" }}>
            <img src={image} width="100%" />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={4}
            style={{ padding: "5%", color: "white" }}
          >
            <Typography variant="h5" style={{ marginBottom: "10px" }}>
              Positive Culture of Error
            </Typography>
            <Typography
              variant="body1"
              style={{ fontWeight: "300", lineHeight: "1.4" }}
            >
              <b>
                <em>RightOn!</em>
              </b>{" "}
              creates a simple way for math teachers to foster a positive
              culture of error: increasing engagement and building
              self-confidence through an app-based activity that surfaces
              mistakes and misconceptions in a safe, fun environment.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
}

export default CultureOfError;