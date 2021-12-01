import React from 'react'
import { Card, Typography } from '@material-ui/core';

function AboutErrorAnalysisActivities(props) {
    const {styles} = props
    return(
        <div style={{color: "white"}}>
            <Typography variant="h4">
                Error Analysis Activities
            </Typography>
            <Typography variant="h6" className={styles.positiveCultureofErrorCardContent}  style={{marginBottom: "20px"}}>
                During classroom discussions, singling out students who’ve made a mistake can cause embarrassment.
                But when it’s a cartoon character who does so, students engage and open up more.&nbsp;
                <u><a href="https://docs.google.com/document/d/17aGvKUd4NGeZBh4vjCaVU7ybj_Kd5CkAVZBIHnhGLjQ/edit?usp=sharing" target="/">
                    Check out other activities from math teachers here.
                </a></u>
            </Typography>
        </div>
    )
}

export default AboutErrorAnalysisActivities;