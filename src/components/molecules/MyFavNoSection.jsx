import React from 'react'
import { Box, Grid } from "@material-ui/core";
import MyFavNoText from '../atoms/MyFavNoText'
import MyFavNoVideo from '../atoms/MyFavNoVideo'

function MyFavNo () {
    return (
      <Box components="section" style={{ background: "#772A79" }}>
        <Grid container alignItems="center">
          <MyFavNoText />
          <MyFavNoVideo />
        </Grid>
      </Box>
    );
}

export default MyFavNo;