import React from 'react';
import { Box, Grid, Typography } from "@material-ui/core";
import CRMTimage from '../../images/crmt.png';
import triangleUp from "../../images/background-triangle-up.png"
import triangleDown from "../../images/background-triangle.png"

export default function CRMT(props) {
    // const { styles } = props;
    return (
        <Box >
            <img
                src={triangleUp}
                width="100%"
                style={{marginBottom:"-250px"}}
            />
            <Grid container style={{ margin: "100px", justifyContent: "center", marginLeft: "-2px" }}>
                {/* <Grid item>
                    <img
                        src={triangleUp}
                        width="100%"
                        
                    />
                </Grid> */}
                <Grid item>
                    <h1 className='crmt-header'>
                        Culturally Responsive <br /> Mathematics Teaching
                        <hr className='error-analysis-underline' />
                    </h1>
                    <h4 className='crmt-description'>
                        <span className='crmt-description-bold'>CRMT embraces key essentials and expands them to <br /> include attention to: </span>
                        <br />
                        <li>Academic language needs of English language learners</li>
                        <li>Knowledge and social justice</li>
                        <br />
                        <span className='crmt-description-bold'>CRMT has the potential to: </span>
                        <br />
                        <li>Engage teachers in strategic lesson planning and <br /> purposeful discussions</li>
                        <li>Improve the quality of mathematics teaching in the  <br /> classroom</li>
                    </h4>
                </Grid>
                <Grid item style={{ marginLeft: "150px", marginTop: "100px" }}>
                    <img src={CRMTimage} alt="CRMT-Diagram" />
                </Grid>
            </Grid>
            <img
                src={triangleDown}
                width="100%"
                style={{marginTop:"-550px"}}
            />
            {/* <img src={CRMTimage} alt="CRMT-Diagram" /> */}
        </Box>
    );
}