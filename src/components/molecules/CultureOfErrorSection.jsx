import React from 'react'
import { Box, Grid } from "@material-ui/core";
import CultureOfErrorImage from "../atoms/CultureOfErrorImage";
import CultureOfErrorText from "../atoms/CultureOfErrorText";

function CultureOfError (props) {
    return (
      <Box components="section">
        <Grid container alignItems="center">
          <CultureOfErrorImage />
          <CultureOfErrorText /> 
        </Grid>
      </Box>
    );
}

export default CultureOfError;