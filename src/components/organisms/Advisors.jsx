import React from 'react'
import { Box, Grid } from "@material-ui/core";
import ProfileAdvisors from '../molecules/ProfileAdvisors'
import placeholder from '../../images/advisor-title.png'

function Advisors(props) {
  return (
    <Box component="section" style={{ background: "#322759"}}>
      {/* <Typography
        variant="h4"
        style={{ marginBottom: "1.5em", fontWeight: "500", textAlign: "center" }}
      >
        Our Advisors
      </Typography> */}
      <Grid container justify="center">
      <img
        className="advisors-banner"
        src={placeholder}
        alt="advisor-title"
        width="45%"
        align="top"
      />
      <ProfileAdvisors {...props}/>
      </Grid>
      
    </Box>
  );
}

export default Advisors;