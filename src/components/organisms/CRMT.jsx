import React from 'react';
import { Box, Grid, Typography } from "@material-ui/core";
import CRMTimage from '../../images/CRMT.png';
import triangleUp from "../../images/background-triangle-up.png"
import triangleDown from "../../images/background-triangle.png"

export default function CRMT(props) {
    const { styles } = props;
    return (
        <Box >
            <img
                src={triangleUp}
                width="100%"
                style={{ marginBottom: "-250px" }}
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
                    <h1 className='crmt-header-mobile'>
                        CRMT
                        <hr className='error-analysis-underline-mobile' />
                    </h1>
                    <p className='crmt-description'>
                        <span className='crmt-description-bold'>CRMT is about </span>
                        <li className='crmt-description'>Inviting all students into mathematics as participants</li>
                        <li className='crmt-description'>Sharing thinking and reasoning</li>
                        <li className='crmt-description'>“Ensuring each and every learner not only has success
                            <br></br>with mathematics, but also comes to see mathematics
                            <br></br>as a tool to examine the world” <br className='mobile-break'/> - Dr. Mark Ellis</li>
                        <br />
                        <span className='crmt-description-bold'>Pioneers in CRMT: </span>
                        <br />
                        <span>
                            <li><a href='https://scholar.google.com/scholar?hl=en&as_sdt=0%2C39&q=Dr.+Geneva+Gay&btnG=' target="/">
                                <u className='crmt-pioneers'>Dr. Geneva Gay</u></a></li></span>
                        <li><a className='crmt-pioneers' href='https://scholar.google.com/scholar?hl=en&as_sdt=0%2C39&q=Dr.+Gloria+Ladson-Billings&btnG=' target="/">
                            <u>Dr. Gloria Ladson-Billings</u></a></li>
                        <li><a className='crmt-pioneers' href='https://scholar.google.com/scholar?hl=en&as_sdt=0%2C39&q=Zaretta+Hammond&btnG=' target="/">
                            <u>Zaretta Hammond</u></a></li>

                    </p>
                </Grid>
                <Grid item>
                    <img src={CRMTimage} alt="CRMT-Diagram" className='crmt-diagram'/>
                </Grid>
            </Grid>
        </Box >
    );
}