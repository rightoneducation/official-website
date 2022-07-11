import React from 'react'
import { Box, Grid } from '@material-ui/core';
import GreenMonster from '../../images/uno-and-speech.png'
import InteractiveErrorAnalysisActivities from '../molecules/InteractiveErrorAnalysisActivities';
import PinkMonster from '../../images/pink-monster.png'
import GreenMonsterMobile from '../../images/green-monster-mobile.png'
import PinkMonsterMobile from "../../images/pink-monster-mobile.png"

function ErrorAnalysisActivitiesSection(props) {
    const { styles } = props
    return (
        <Box
            style={{ marginTop: "200px" }}
        >
            <Grid container style={{ justifyContent: "center" }}>
                <h1 className='error-analysis-header-mobile'>
                    Error Analysis Activities
                    <hr className='error-analysis-underline-mobile' />
                </h1>

                <h6 className='error-analysis-description-mobile'>
                    During classroom discussions, singling out students who’ve made a mistake can cause embarrassment.
                    But when it’s a cartoon character who does so, students engage and open up more. Check out&nbsp; <u><a href="https://docs.google.com/document/d/17aGvKUd4NGeZBh4vjCaVU7ybj_Kd5CkAVZBIHnhGLjQ/edit?usp=sharing" target="/" className='error-analysis-link'>other activities</a></u>
                    &nbsp; from math teachers.
                </h6>

                <div className="error-analysis-speech-mobile">
                    <h5 className='error-analysis-activity-text-mobile'>The factors of 14 are <br className='mobile-break' /> 2 and 7.</h5>
                    <img src={GreenMonsterMobile} alt="monster-with-speech-bubble" className='error-analysis-mobile-green-monster' />
                </div>
                


                <Grid item >
                    <img src={GreenMonster} alt="monster-with-speech-bubble" className="error-analysis-desktop-green-monster" />

                </Grid>
                <Grid item style={{ marginTop: "168px" }}>
                    <div className="error-analysis-speech">
                        <h5 className='error-analysis-activity-text'>The factors of 14 are <br className='mobile-break' /> 2 and 7.</h5>
                    </div>
                    <InteractiveErrorAnalysisActivities />
                </Grid>
                {/* <img src={GreenMonsterMobile} alt="monster-with-speech-bubble" className='error-analysis-mobile-green-monster' />
                <img src={PinkMonsterMobile} alt="monster-with-speech-bubble" className='error-analysis-mobile-pink-monster' /> */}
                <Grid Item>
                    <h1 className='error-analysis-header '>
                        Error Analysis Activities</h1>
                    <hr className='error-analysis-underline ' />
                    <div>
                        <h6 className='error-analysis-description'>
                            During classroom discussions, singling <br className="desktop-break" /> out students who’ve made a mistake can <br className="desktop-break" />  cause embarrassment.
                            But when it’s a<br className="desktop-break" />  cartoon character who does so, students <br className="desktop-break" />  engage and open up more. Check out<br className="desktop-break" />&nbsp; <u><a href="https://docs.google.com/document/d/17aGvKUd4NGeZBh4vjCaVU7ybj_Kd5CkAVZBIHnhGLjQ/edit?usp=sharing" target="/" className='error-analysis-link'>other activities</a></u>
                            &nbsp; from math teachers.
                        </h6>
                        <img src={PinkMonster} alt="monster-with-speech-bubble" className='error-analysis-desktop-pink-monster' />

                    </div>
                </Grid >
            </Grid>
        </Box >


    )
}

export default ErrorAnalysisActivitiesSection;