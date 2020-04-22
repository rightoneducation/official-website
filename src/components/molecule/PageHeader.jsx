import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import logo from 'righton.svg'

import MainNav from './MainNav'

const useStyles = makeStyles((theme) => ({
  linkOptions: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center"
    },
  },
  subTitle: {
    textAlign: "right",
    fontStyle: "italic",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "1.2em",
    },
  },
}));

function PageHeader () {
  const styles = useStyles()
    return (
      <Box component="header" className="page-header">
        <div className="header-elements">
          <div id="header-element-1"></div>
          <div id="header-element-2"></div>
          <div id="header-element-3"></div>
        </div>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          spacing={8}
          className="header-element-4"
        >
          <Grid item md={5}>
            <a href="/">
              <img src={logo} alt="right on education logo" width="100%" />
            </a>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="flex-end"
            justify="flex-end"
            md={7}
            spacing={8}
            className={styles.linkOptions}
          >
            <Grid item>
              <Typography variant="h4" className={styles.subTitle}>
                Unlocking every student’s potential in math!
              </Typography>
            </Grid>
            <Grid item>
              <MainNav />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
}
  
export default PageHeader; 