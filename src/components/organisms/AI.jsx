import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import triangleUp from "../../images/background-triangle-up.png"
import thumbnail from '../../images/aithumbnail.png'


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
    const isLargeScreen =  useMediaQuery('(min-width:1500px)');
    return (
        <Box style={{backgroundImg: triangleUp, width: '100%', marginTop: '50px'}}>
            <Box className="crmt-section" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '10%', paddingRight: '10%'}}>
                <Box>
                    <h1 className='crmt-header' width='100%' >
                        RightOn! is Powered by AI
                        <hr className='crmt-underline'/>
                    </h1>
                </Box>
                <Box style={{width:  '100%', display: 'flex', alignItems: 'center', gap: '10%'}}>
                    <p className='crmt-description'>
                        <span className='crmt-description-bold'>RightOn! offers a range of AI-powered features designed to help students and teachers in and out of the classroom.</span>
                        <br/>
                        <br/>
                        <li className='crmt-description-bold'>Surfacing Student Thinking</li>
                        <br/>
                        <span className='crmt-description' style={{marginLeft: 0}}>Uses AI to identify patterns in student responses, providing teachers with deeper insights to further personalize instruction. Check out the video!</span>
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
                        <video style={{minWidth: '512px', maxWidth: '512px', minHeight: '288px', maxHeight: '288px'}} controls poster={thumbnail}>
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