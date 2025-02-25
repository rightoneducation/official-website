import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import CRMTimage from '../../images/CRMT.png';
import triangleUp from "../../images/background-triangle-up.png"
import triangleDown from "../../images/background-triangle.png"

const useStyles = makeStyles((theme) => ({
    centralButton: {
      borderRadius: '40px',
      textTransform: 'none',
      background: `#08458F`,
      '&:hover': {
        background: `#08458F`,
      },
    },
  }));

export default function AI(props) {
    const { styles } = props;
    const classes = useStyles();
    const isLargeScreen =  useMediaQuery('(min-width:2000px)');
    return (
        <Box style={{backgroundImg: triangleUp, width: '100%', marginTop: '50px'}}>
            <Box className="crmt-section" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '10%', paddingRight: '10%'}}>
                <Box>
                    <h1 className='crmt-header' width='100%' >
                        RightOn! is Powered by AI
                        <hr className='crmt-underline'/>
                    </h1>
                </Box>
                <Box style={{width:  '100%', display: 'flex', gap: '20%'}}>
                    <p className='crmt-description'>
                        <span className='crmt-description-bold'>RightOn! offers a range of AI-powered features designed to help students and teachers in and out of the classroom.</span>
                        <br/>
                        <br/>
                        <li className='crmt-description-bold'>Surfacing Student Thinking</li>
                        <br/>
                        <span className='crmt-description' style={{marginLeft: 0}}>Uses AI to provide teachers with themes and categories of student-submitted hints in the classroom. Check out the video!</span>
                        <br/>
                        <br/>
                        <li className='crmt-description-bold'>Wrong Answer Explanation Prototype</li>
                        <br/>
                        <span className='crmt-description'  style={{marginLeft: 0}}>Helps teachers save time during lesson prep by automatically generating explanations for wrong answers.
                        </span>
                        <br/>
                        <br/>
                        <Box style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <Button 
                                className={classes.centralButton} 
                                style={{
                                minWidth: '200px',
                                height: '40px' 
                                }}
                                onClick={() => { window.location.href = 'https://prototype.rightoneducation.com'}}
                                >
                                <Typography style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
                                Try it out!
                                </Typography>
                            </Button>
                        </Box>
                    </p>            
                    {isLargeScreen && 
                        <video style={{minWidth: '640px', maxWidth: '640px', minHeight: '360px', maxHeight: '360px'}} controls >
                            <source src='https://www.rightoneducation.com/video/RightOn_SurfacingStudentThinking.mp4'/>
                        </video>
                    }
                </Box>
                {!isLargeScreen && 
                    <>
                        <br/>
                        <br/>
                        <Box style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <video style={{ width: '100%', height: 'auto', maxWidth: '640px', maxHeight: '360px'}} controls >
                                <source src='https://www.rightoneducation.com/video/RightOn_SurfacingStudentThinking.mp4'/>
                            </video>
                        </Box>
                    </>
                }
            </Box>
            <br/>
            <br/>
        </Box >
    );
}