import React from 'react'
import { Grid, Box } from '@material-ui/core';

function AboutErrorAnalysisActivities(props) {
    const { styles } = props
    return (
        <Box component="section">
            <Grid container justify="right">
                <div className='error-analysis'>
                    <h1 className='error-analysis-header'>
                        Error Analysis Activities
                    </h1>
                    <hr className='error-analysis-underline' />
                    <h6 className='error-analysis-description'>
                        During classroom discussions, singling out students who’ve made a mistake can cause embarrassment.
                        But when it’s a cartoon character who does so, students engage and open up more. &nbsp;
                        <br/>
                        <u><a href="https://docs.google.com/document/d/17aGvKUd4NGeZBh4vjCaVU7ybj_Kd5CkAVZBIHnhGLjQ/edit?usp=sharing" target="/" style={{color: "#E87DA6", fontStyle: "italic"}}>
                            Check out other activities from math teachers here.
                        </a></u>
                    </h6>
                </div>
            </Grid>
        </Box>
    )
}

export default AboutErrorAnalysisActivities;