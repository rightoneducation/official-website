import React from 'react'
import { Box, Grid } from '@material-ui/core';
import Uno from '../../images/uno-and-speech.png'
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
                <Grid item style={{ marginTop: "168px" }}>
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
                            During classroom discussions, singling <br/> out students who’ve made a mistake can <br/> cause embarrassment.
                            But when it’s a<br/> cartoon character who does so, students <br/> engage and open up more. Check out <br/> &nbsp;
                            <u><a href="https://docs.google.com/document/d/17aGvKUd4NGeZBh4vjCaVU7ybj_Kd5CkAVZBIHnhGLjQ/edit?usp=sharing" target="/" style={{ color: "#FFB8D3", fontStyle: "italic" }}>
                                 other activities 
                            </a></u>
                            &nbsp; from math teachers.
                        </h6>
                        <img src={PinkMonster} alt="monster-with-speech-bubble" width="250px" />
                    </div>
                </Grid >
            </Grid>
        </Box >


    )
}

export default ErrorAnalysisActivitiesSection;