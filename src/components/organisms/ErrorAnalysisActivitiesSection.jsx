import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@material-ui/core';
import Uno from 'images/Uno.svg'
import AboutErrorAnalysisActivities from '../molecules/AboutErrorAnalysisActivities';
import InteractiveErrorAnalysisActivities from '../molecules/InteractiveErrorAnalysisActivities';


const useStyles = makeStyles( theme => ({
    boxSeperate: {
        marginTop: '30px',
        marginLeft: '40px',
    }
  })
)

function ErrorAnalysisActivitiesSection() {
    const styles = useStyles()
    return(
        <div>
            <Box component="section" style={{backgroundColor: 'purple'}}>
                <Grid container justify="center" alignItems="center" spacing={1}>
                    <Grid xs={9} sm={4} md={3}>
                        <img src={Uno} alt="monster-with-speech-bubble" width="100%" />
                    </Grid>
                    <Grid xs={9} sm={5} md={4} className={styles.boxSeperate}>
                        <AboutErrorAnalysisActivities/>
                        <InteractiveErrorAnalysisActivities/>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    )
}

export default ErrorAnalysisActivitiesSection;