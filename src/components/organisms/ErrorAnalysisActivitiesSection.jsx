import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from '@material-ui/core';
import Uno from '../../images/uno-and-speech.png'
import AboutErrorAnalysisActivities from '../molecules/AboutErrorAnalysisActivities';
import InteractiveErrorAnalysisActivities from '../molecules/InteractiveErrorAnalysisActivities';
import PinkMonster from '../../images/pink-monster.png'

function ErrorAnalysisActivitiesSection(props) {
    const { styles } = props
    return (
        <Box style={{ marginTop: "200px" }}>
            <Grid container style={{ justifyContent: "center" }}>

                <Grid item style={{ marginTop: "227px" }}>
                    <img src={Uno} alt="monster-with-speech-bubble" width="250px" />
                </Grid>
                <Grid item style={{ marginTop: "155px" }}>
                    <div className="error-analysis-speech">
                        <h5 className='error-analysis-activity-text'>The factors of 14 are 2 and 7.</h5>
                    </div>

                    <InteractiveErrorAnalysisActivities />
                </Grid>

                <Grid Item>
                    <h1 className='error-analysis-header '>
                        Error Analysis Activities</h1>
                    <hr className='error-analysis-underline ' />
                    <div>
                        <h6 className='error-analysis-description'>
                            During classroom discussions,<br></br> singling out students who’ve made<br></br> a mistake can cause<br></br> embarrassment.
                            But when it’s a<br></br> cartoon character who does so,<br></br> students engage and open up more.<br></br> &nbsp;
                            <u><a href="https://docs.google.com/document/d/17aGvKUd4NGeZBh4vjCaVU7ybj_Kd5CkAVZBIHnhGLjQ/edit?usp=sharing" target="/" style={{ color: "#E87DA6", fontStyle: "italic" }}>
                                Check out other activities<br></br> from math teachers here.
                            </a></u>
                        </h6>
                        <img src={PinkMonster} alt="monster-with-speech-bubble" width="250px" />
                    </div>
                    {/*<Grid container justify-content="right" margin-top="20px" margin-left="50%" spacing={1}>
                <Grid xs={9} sm={3}>
                    <InteractiveErrorAnalysisActivities />
                    <img src={Uno} alt="monster-with-speech-bubble" width="140%" />
                </Grid>
                <Grid xs={9} sm={6}>
                    <AboutErrorAnalysisActivities styles={styles} />
                </Grid>

    </Grid>*/}
                </Grid >
            </Grid>
        </Box >


    )
}

export default ErrorAnalysisActivitiesSection;