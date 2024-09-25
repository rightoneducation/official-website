import React from 'react';
import { Box, Grid, Typography } from "@material-ui/core";
import CRMTimage from '../../images/CRMT.png';
import triangleUp from "../../images/background-triangle-up.png"
import triangleDown from "../../images/background-triangle.png"

export default function CRMT(props) {
    const { styles } = props;
    return (
        <Box style={{backgroundImg: triangleUp, width: '100%', marginTop: '50px'}}>
            <Box className="crmt-section" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '10%', paddingRight: '10%'}}>
                <Box>
                    <h1 className='crmt-header' style={{textAlign: 'center'}}>
                        Culturally Responsive <br /> Mathematics Teaching
                        <hr className='crmt-underline' style={{width: '100%'}}/>
                    </h1>
                    <h1 className='crmt-header-mobile'>
                        CRMT
                        <hr className='crmt-underline' />
                    </h1>
                    <p className='crmt-description'>
                        <span className='crmt-description-bold'>CRMT is about </span>
                        <div className="desktop-break">
                            <li className='crmt-description'>Inviting all students into mathematics as participants</li>
                            <li className='crmt-description'>Sharing thinking and reasoning</li>
                            <li className='crmt-description'>“Ensuring each and every learner not only has success <div style={{ marginLeft: "35px" }}>
                                with mathematics, but also comes to see mathematics
                                <br></br>as a tool to examine the world” <br className='mobile-break' /> - Dr. Mark Ellis</div></li>
                            <br /></div>
                        <div className="tablet-br">
                            <li className='crmt-description'>Inviting all students into mathematics as participants</li>
                            <li className='crmt-description'>Sharing thinking and reasoning</li>
                            <li className='crmt-description'>“Ensuring each and every learner not only has success <div style={{ marginLeft: "35px" }}>
                                with mathematics, but also comes to see mathematics
                                <br></br>as a tool to examine the world” <br className='mobile-break' /> - Dr. Mark Ellis</div></li>
                            <br /></div>

                        <div className="small-desk-breaks">
                            <li className='crmt-description'>Inviting all students into <div style={{ marginLeft: "35px" }}>mathematics as participants</div></li>
                            <li className='crmt-description'>Sharing thinking and reasoning</li>
                            <li className='crmt-description'>“Ensuring each and every learner <div style={{ marginLeft: "35px" }}>not only has success
                                with </div><div style={{ marginLeft: "35px" }}>mathematics, but also comes to see mathematics
                                    as a tool to <br></br>examine the world” <br className='mobile-break' /> <br></br>- Dr. Mark Ellis</div></li>
                            <br /></div>
                        <div className="mobile-break">
                            <li className='crmt-description'>Inviting all students into <div style={{ marginLeft: "35px" }}>mathematics as participants</div></li>
                            <li className='crmt-description'>Sharing thinking and <div style={{ marginLeft: "35px" }}>reasoning</div></li>
                            <li className='crmt-description'>“Ensuring each and <div style={{ marginLeft: "35px" }}>every learner not only <br></br>has success
                                with <br></br>mathematics, but also <br></br>comes to see <br></br>mathematics
                                as a tool <br></br>to examine the world” <br /> - Dr. Mark Ellis</div></li>
                            <br /></div>
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
                    <div className='tablet-br'>
                        <img src={CRMTimage} alt="CRMT-Diagram" className='crmt-diagram' />
                    </div>
                </Box>
                <Box className="desktop-break">
                    <img src={CRMTimage} alt="CRMT-Diagram" className='crmt-diagram' />
                </Box>
            </Box>
        </Box >
    );
}