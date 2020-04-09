import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'

function Header () {
    return (
      <Box component="nav">
        <Grid container spacing={5}>
          <Grid item>
            <Link to='/'><Typography variant="h5" className="main-navigation">Home</Typography></Link>
            </Grid>
          <Grid item>
            <Link to='/about'><Typography variant="h5" className="main-navigation">About</Typography></Link>
          </Grid>
          <Grid item>
            <Link to='/team'><Typography variant="h5" className="main-navigation">Team</Typography></Link>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Header