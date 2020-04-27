import React from 'react'
import { Box } from "@material-ui/core";
import TeamPageImage from '../molecules/TeamPageImage'
import TeamPageIntro from '../molecules/TeamPageIntro'


function OurValue (props) {
  const { styles } = props
    return (
      <Box>
        <TeamPageImage styles={styles} />
        <TeamPageIntro styles={styles} />
      </Box>
    );
}

export default OurValue;