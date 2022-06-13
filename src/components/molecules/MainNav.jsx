import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  return (
    <Box component="nav">
      <nav className="nav-bar-mobile">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu style={{ color: "#FFFFFF", width: "50px", height: "40px" }} />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <NavLink
            exact to='/'
            activeClassName="active-link"
            onClick={() => closeMenu()}
          >
            <Typography variant="h6">
              Home
            </Typography>
          </NavLink>
          <NavLink
            exact to='/about'
            activeClassName="active-link"
            onClick={() => closeMenu()}
          >
            <Typography variant="h6">
              About
            </Typography>
          </NavLink>
          <NavLink
            exact to='/team'
            activeClassName="active-link"
            onClick={() => closeMenu()}
          >
            <Typography variant="h6">
              Team
            </Typography>
          </NavLink>
          <NavLink
            exact to='/resources'
            activeClassName="active-link"
            onClick={() => closeMenu()}
          >
            <Typography variant="h6">
              Resources
            </Typography>
          </NavLink>
        </ul>
      </nav>
      <Grid container spacing={5} wrap="nowrap">
        {/* <div className="nav-bar-desktop"> */}
        <Grid item>
          <NavLink exact to='/' className="mainNav" activeStyle={{ color: 'white' }} activeClassName="activeRoute">
            <Typography variant="h6">
              Home
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to='/about' className="mainNav" activeStyle={{ color: 'white' }} activeClassName="activeRoute">
            <Typography variant="h6">
              About
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to='/team' className="mainNav" activeStyle={{ color: 'white' }} activeClassName="activeRoute">
            <Typography variant="h6">
              Team
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to='/resources' className="mainNav" activeStyle={{ color: 'white' }} activeClassName="activeRoute">
            <Typography variant="h6">
              Resources
            </Typography>
          </NavLink>
        </Grid>
        {/* </div> */}
      </Grid>
    </Box>
  )
}

export default Header