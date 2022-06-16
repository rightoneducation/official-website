import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import logo from '../../images/right-on-logo-circle.png'
<<<<<<< HEAD
=======
import triangle from '../../images/triangle.png'
>>>>>>> origin/main

import MainNav from './MainNav'

const useStyles = makeStyles((theme) => ({
  linkOptions: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center"
    },
  },
  // subTitle: {
  //   textAlign: "right",
  //   fontStyle: "italic",
  //   [theme.breakpoints.down("xs")]: {
  //     fontSize: "1.1em",
  //     textAlign: "center"
  //   },
  // },
}));

function PageHeader() {
  const styles = useStyles()
  return (
    <Box component="header" className="page-header">
      <div className="header-elements">
        
        {/* <div id="header-element-1"></div> */}
        {/* <div id="header-element-2"></div> */}
        {/* <div id="header-element-3"></div> */}
      </div>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        spacing={8}
        className="header-element-4"
      >
        <Grid item sm={4} md={5}>
          <a href="/">
            <img src={logo} alt="right on education logo" className='logo' />
          </a>
        </Grid>
        <Grid
          container
<<<<<<< HEAD
          justify="space-between"
          alignItems="bottom"
          spacing={8}
          className="header-element-4"
        >
          <Grid item sm={4} md={5}>
            <a href="/">
              <img src={logo} alt="right on education logo" width="30%" />
            </a>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="flex-end"
            justify="flex-end"
            md={7}
            spacing={5}
            className={styles.linkOptions}
          >
            {/* <Grid item>
=======
          direction="column"
          alignItems="flex-end"
          justify="flex-end"
          md={7}
          spacing={5}
          className="nav-bar"
        >
          {/* <Grid item>
>>>>>>> origin/main
              <h4 className="sub-title">
                Inspiring learning by embracing mistakes
              </h4>
            </Grid> */}
<<<<<<< HEAD
            <Grid item>
              <MainNav />
            </Grid>
=======
          <Grid item>
            <MainNav />
>>>>>>> origin/main
          </Grid>
          {/* <Grid container>
              <Grid item>
                <img src={triangle} alt="right education triangle" />
              </Grid>
            </Grid> */}
        </Grid>
        {/* <Grid container
        //direction="column"
        //alignItems="end"
        //justifyContent="right"
        >
          <Grid item>
            <img src={triangle} alt="right education triangle" className='header-triangle'/>
          </Grid>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default PageHeader; 