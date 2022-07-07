import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import logo from '../../images/right-on-logo-circle.png'
import mobileLogo from '../../images/mobile-logo.png'

import MainNav from './MainNav'

const useStyles = makeStyles((theme) => ({
  linkOptions: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center"
    },
  }
}));

function PageHeader() {
  const styles = useStyles()
  return (
    <Box component="header" className="page-header">
      <div className="header-elements">
      </div>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        spacing={8}
        className="page-header-links"
      >
        <Grid item sm={4} md={5}>
          <a href="/">
            <img src={logo} alt="right on education logo" className='logo' />
            <img src={mobileLogo} alt="right on education logo" className='mobile-logo'/>
          </a>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          justify="flex-end"
          md={7}
          spacing={5}
          className="nav-bar"
        >
          <Grid item>
            <MainNav />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PageHeader; 