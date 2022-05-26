import React from 'react';
import { Box, Grid, Typography } from "@material-ui/core";
import CRMTimage from '../../images/crmt.png';

export default function CRMT(props) {
    // const { styles } = props;
    return (
        <Box component="section">
            <Grid container style={{margin: "100px"}}>
                <Grid item style={{marginLeft: "-100px"}}>
                <h1 className='crmt-header'>
                    Culturally Responsive <br/> Mathematics Teaching
                    <hr className='error-analysis-underline'/>
                </h1>
                <h4 className='crmt-description'>
                <span className='crmt-description-bold'>CRMT embraces key essentials and expands them to include attention to: </span>
                <br/>
                <li>Academic language needs of English language learners</li>
                <li>Knowledge and social justice</li>
                <br/>
                <span className='crmt-description-bold'>CRMT has the potential to: </span>
                <br/>
                <li>Engage teachers in strategic lesson planning and purposeful discussions</li>
                <li>Improve the quality of mathematics teaching in the classroom</li>
                </h4>
                </Grid>
                <Grid item style={{marginLeft: "100px"}}>
                <img src={CRMTimage} alt="CRMT-Diagram" style={{justifyContent: "right"}}/>
                </Grid>
            </Grid>
            {/* <img src={CRMTimage} alt="CRMT-Diagram" /> */}
        </Box>
    );
}