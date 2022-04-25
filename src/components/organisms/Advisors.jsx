import React from 'react'
import { Box, Typography } from "@material-ui/core";
import ProfileAdvisors from '../molecules/ProfileAdvisors'

function Advisors(props) {
  return (
    <Box component="section" style={{ background: "#322759", color: "white" }}>
      <Typography
        variant="h4"
        style={{ marginBottom: "1.5em", fontWeight: "500", textAlign: "center" }}
      >
        Our Advisors
      </Typography>
      <ProfileAdvisors {...props}/>
    </Box>
  );
}

export default Advisors;