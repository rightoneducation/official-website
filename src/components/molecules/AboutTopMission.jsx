import React from "react";
import { Box, Grid, Typography, styled, useMediaQuery } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import placeholder from '../../images/mission-desktop.png'
import monster from '../../images/mission.png'

const MissionText = styled(Typography)({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 200,
  fontSize: '30px',
  lineHeight: '39px',
  color: '#FFF',
  overflowWrap: 'break-word',
  overflow: 'auto',
});

function AboutTopMission(props) {
  // sizes taken from css files
  const isSmallDevice = useMediaQuery('(max-width:414px)');
  const isMedDevice = useMediaQuery('(max-width:900px)');
  console.log(isSmallDevice, isMedDevice)
  return (
    <Card style={{ backgroundColor: "#800D15", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)", borderRadius: "30px", marginBottom: "40px",position: 'relative', height: 'fit-content' }}
      className='mission-card'>
      <CardContent>
        <h1 className="mission-and-vision-header">Mission</h1>
        <div className="mission-and-vision-underline"></div>
      </CardContent>
      <CardContent
        style={{
          padding: "0px",
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box style={{ width: '100%', textAlign: isSmallDevice ? 'left' : 'right', display: 'flex', justifyContent: isSmallDevice ? 'flex-start' : 'flex-end' }}>
          <MissionText style={{
              paddingLeft:  !isSmallDevice ? '40px' : '24px',
              paddingRight: !isSmallDevice ? '40px' : '24px',
              paddingBottom: !isSmallDevice ? '40px' : '24px',
              width: isSmallDevice ? '100%' : '80%'
          }}>
            Transforming how students think and feel about math, helping them 
            <span style={{ fontWeight: 400 }}> see mistakes as learning opportunities</span>
          </MissionText>
        </Box>
        <img
          src={monster}
          style={{ position: isSmallDevice ? 'static' : 'relative', width: "220px", marginLeft: "10px", marginTop: isSmallDevice ?  "15px" : "-120px", transform: isSmallDevice ? "translateX(20%)" : ''}}
        />
      </CardContent>
      
    </Card >
  );
}


export default AboutTopMission;