import React from 'react';
import { Box } from "@material-ui/core";
import ResourceBannerImage from '../molecules/ResourceBannerImage'
import PositiveCultureBox from '../molecules/PositiveCultureBox'

function PositiveCultureOfErrorSection(props) {
    const { styles } = props
        return(
            <Box>
                <ResourceBannerImage styles={ styles }/>
                <PositiveCultureBox styles={ styles }/>
            </Box>
        );
}

export default PositiveCultureOfErrorSection;