import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";

function MyFavNo () {
    return (
      <Box components="section" style={{ background: "#772A79" }}>
        <Grid container alignItems="center">
          <Grid
            xs={12}
            sm={12}
            md={4}
            style={{ padding: "5%", color: "white" }}
          >
            <Typography variant="h5" style={{ marginBottom: "10px" }}>
              "My Favorite No"
            </Typography>
            <Typography
              variant="body1"
              style={{ fontWeight: "300", lineHeight: "1.4" }}
            >
              “My Favorite No” and other similar math classroom activities have
              been both a foundation and inspiration for{" "}
              <b>
                <em>RightOn!</em>
              </b>
              . Watch the video to learn more!
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={8}>
            <iframe
              width="100%"
              height="550"
              src="https://www.youtube.com/embed/srJWx7P6uLE"
              title="My Fav No"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    );
}

export default MyFavNo;