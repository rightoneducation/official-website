import React from 'react'
import { Box, Typography, Grid } from "@material-ui/core";
import SingleAdvisor from '../atom/SingleAdvisor'

function Advisors({advisorProfiles}) {
  return (
    <Box component="section" style={{ background: "#772A79", color: "white" }}>
      <Typography variant="h4" style={{ marginBottom: "1em" }}>Advisors</Typography>
      <Grid container spacing={10}>
        {advisorProfiles.map((advisor, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <SingleAdvisor key={index} advisor={advisor} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Advisors;