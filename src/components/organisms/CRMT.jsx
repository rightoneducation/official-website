import React from 'react';
import { Box, Grid, Typography } from "@material-ui/core";
import CRMTimage from '../../images/CRMT.png';

export default function CRMT(props) {
    // const { styles } = props;
    return(
        <Box component="section">
            <Grid container style={ {justifyContent: "center", paddingTop: '10px'} }>
                <Typography variant="h4" style={{color: 'white'}}>Culturally Responsive Mathematics Teaching</Typography>
            <Grid container style={ {justifyContent: "center", paddingTop: '10px'} }>
                <Typography variant="h4" style={{color: 'white', textAlign: 'center'}}>Culturally Responsive Mathematics Teaching</Typography>
            </Grid>
            <img src={CRMTimage} alt="CRMT-Diagram" style={ {display: 'flex', margin:'auto', width: "70%"} } />
        </Box>
    );
}