import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <Box component="nav" marginRight={15}>
      <Grid container spacing={5} wrap="nowrap" >
        <Grid item>
          <NavLink exact to='/' className="mainNav" activeStyle={{ color: 'white' }} activeClassName="activeRoute"><Typography variant="h6">Home</Typography></NavLink>
        </Grid>
        <Grid item>
          <NavLink to='/about' className="mainNav" activeStyle={{ color: 'white' }} activeClassName="activeRoute"><Typography variant="h6">About</Typography></NavLink>
        </Grid>
        <Grid item>
          <NavLink to='/team' className="mainNav" activeStyle={{ color: 'white' }} activeClassName="activeRoute"><Typography variant="h6">Team</Typography></NavLink>
        </Grid>
        <Grid item>
          <NavLink to='/resources' className="mainNav" activeStyle={{ color: 'white' }} activeClassName="activeRoute"><Typography variant="h6">Resources</Typography></NavLink>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header