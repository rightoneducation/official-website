import React from 'react';
import { Box, Grid } from "@material-ui/core";
import CRMTDiagram from '../molecules/CRMTDiagram';

export default function CRMT(props) {
    // const { styles } = props;
    return(
        <Box components="section" style={ { background: "transparent", marginTop: '150px', color: 'white' } }>
            <Grid container style={ {justifyContent: "center"} }>
                    <h1>Culturally Responsive Mathematics Teaching</h1>
            </Grid>
            <CRMTDiagram />
        </Box>
    );
}