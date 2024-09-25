import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Button, Typography, useMediaQuery } from "@material-ui/core";
import logo from '../../images/logos/RightOn-WithSlogan-512x500.png'
import mobileLogo from '../../images/logos/RightOn-Circle-128x128.png'
import MainNav from './MainNav'

const useStyles = makeStyles((theme) => ({
  linkOptions: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center"
    },
  },
  centralButton: {
    borderRadius: '40px',
    textTransform: 'none',
    background: `#08458F`,
    '&:hover': {
      background: `#08458F`,
    },
  },
  playButton: {
    borderRadius: '40px',
    textTransform: 'none',
    background: `#B2315E`,
    '&:hover': {
      background: `#B2315E`,
    },
  }
}));

function PageHeader() {
  const classes = useStyles();
  const isSmall = useMediaQuery('(max-width:700px)');
  const isMedium = useMediaQuery('(max-width:900px)');
  const getHeaderBackground = () => {
    if (isSmall)
      return 'linear-gradient(160deg, #28214d 50%, #783899 50%)';
    if (isMedium)
      return 'linear-gradient(160deg, #28214d 50%, #783899 50%)';
    return 'linear-gradient(168deg, #28214d 50%, #783899 50%)';
  }
  return (
    <Box component="header" className="page-header" style={{ 
        background: getHeaderBackground(),
      }}>
      <div className="header-elements">
      </div>
      <Grid
        container
        alignItems="center"
        className="page-header-links"
      >
        <Grid item sm={4} md={5}>
          <a href="/">
            <img src={logo} alt="right on education logo" className='logo' style={{filter: 'drop-shadow(5px 5px 10px rgba(0,0,0,0.3))'}}/>
            <img src={logo} alt="right on education logo" className='mobile-logo' style={{transform: 'scale(0.9)', filter: 'drop-shadow(5px 5px 10px rgba(0,0,0,0.3))'}}/>
          </a>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          justifyContent="cemter"
          md={7}
          spacing={2}
          className="nav-bar"
        >
          <Grid item>
            <Box style={{width: '100%', display: 'flex', justifyContent: 'flex-end', gap: '32px' }}> 
              <Button 
                className={classes.centralButton} 
                style={{
                  minWidth: isMedium ?  '106px': '180px',
                  height: isMedium ?  '38px' : '62px'
                }}
                onClick={() => { window.location.href = 'https://central.rightoneducation.com'}}
                >
                <Typography style={{fontSize: isMedium ? 18 : 30, color: 'white', fontWeight: 'bold'}}>
                  Central
                </Typography>
              </Button>
              <Button 
                className={classes.playButton} 
                style={{
                  minWidth: isMedium ?  '106px': '180px',
                  height: isMedium ?  '38px' : '62px'
                }}
                onClick={() => { window.location.href = 'https://play.rightoneducation.com'}}
              >
                <Typography style={{fontSize: isMedium ? 18 : 30, color: 'white', fontWeight: 'bold'}}>
                  Play
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <MainNav isMedium={isMedium}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PageHeader; 