import React from 'react'
import { Box, Grid } from "@material-ui/core";
import CultureOfErrorImage from "../atoms/CultureOfErrorImage";
import CultureOfErrorText from "../atoms/CultureOfErrorText";

function CultureOfError (props) {
    return (
      <Box components="section" style={{ background: "#772A79" }}>
        <Grid container alignItems="center">
          <CultureOfErrorImage />
          <CultureOfErrorText /> 
        </Grid>
      </Box>
    );
}

export default CultureOfError;