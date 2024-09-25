import React from 'react';
import { Box } from "@material-ui/core";
import ResourceBannerImage from '../molecules/ResourceBannerImage'
import PositiveCultureBox from '../molecules/PositiveCultureBox'

function PositiveCultureOfErrorSection(props) {
    const { styles } = props
        return(
            <Box style={{width: '100%',}}>
                <PositiveCultureBox styles={styles}/>
            </Box>
        );
}

export default PositiveCultureOfErrorSection;