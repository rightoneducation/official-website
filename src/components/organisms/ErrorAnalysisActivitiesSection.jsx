import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@material-ui/core';
import Uno from '../../images/uno-and-text.png'
import AboutErrorAnalysisActivities from '../molecules/AboutErrorAnalysisActivities';
import InteractiveErrorAnalysisActivities from '../molecules/InteractiveErrorAnalysisActivities';

function ErrorAnalysisActivitiesSection(props) {
    const { styles } = props
    return(
        <div>
            <Box component="section">
                <Grid container justify="space-around" alignItems="center" spacing={1}>
                <Grid xs={9} sm={3}>
                        <img src={Uno} alt="monster-with-speech-bubble" width="140%" />
                    </Grid>
                    <Grid xs={9} sm={6}>
                        <AboutErrorAnalysisActivities styles={styles}/>
                        <InteractiveErrorAnalysisActivities/>
                    </Grid>
                    
                </Grid>
            </Box>
            
        </div>
    )
}

export default ErrorAnalysisActivitiesSection;