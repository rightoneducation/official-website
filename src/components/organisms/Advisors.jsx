import React from 'react'
import { Box, Typography, Grid } from "@material-ui/core";
import ProfileAdvisors from '../molecules/ProfileAdvisors'
import placeholder from '../../images/advisor-title.png'

function Advisors(props) {
  return (
    <Box component="section" style={{ background: "#772A79", color: "white" }}>
      {/* <Typography
        variant="h4"
        style={{ marginBottom: "1.5em", fontWeight: "500", textAlign: "center" }}
      >
        Our Advisors
      </Typography> */}
      <Grid container alignItems="center" justify="space-around">
      <img
        src={placeholder}
        alt="advisor-title"
        width="45%"
        align="center"
      />
      <ProfileAdvisors {...props}/>
      </Grid>
    </Box>
  );
}

export default Advisors;