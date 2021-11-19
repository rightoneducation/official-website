import React from 'react'
import { Typography } from '@material-ui/core';

function AboutErrorAnalysisActivities() {
    return(
        <div>
            <Typography variant="h5" style={{fontWeight: "700", marginBottom: "10px" }}>
                Error Analysis Activities
            </Typography>
            <Typography variant="body1" style={{fontWeight: "400", lineHeight: "1.4", marginBottom: "40px"}}>
                During classroom discussions, singling out students who’ve made a mistake can cause embarrassment.
                But when it’s a cartoon character who does so, students engage and open up more.
                Check out other activities from math teachers here.
            </Typography>
        </div>
    )
}

export default AboutErrorAnalysisActivities;