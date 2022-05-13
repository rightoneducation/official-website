import React from 'react'
import { Box } from "@material-ui/core";
import AboutValues from "../molecules/AboutValues"


function OurValue (props) {
  const { styles } = props
  const {ourValues} = featureData
    return (
      <Box>
        <AboutValues ourValues={ourValues} />
      </Box>
    );
}

export default OurValue;