import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import monster from "../../images/hamburger-monster.png";

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
            <MdClose className="hamburger-close" />
          ) : (
            <FiMenu className="hamburger-open" />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <NavLink
            exact to='/' 
            className="nav-tabs"
            activeStyle={{ color: '#E87DA6' }} 
            activeClassName="active-link"
            onClick={() => closeMenu()}
          >
            <p style={{fontFamily:"roboto", fontSize: "30px", fontWeight: "700", lineHeight: "18px", letterSpacing: "0.15px", padding: "17px"}}>
              Home
            </p>
          </NavLink>
          <NavLink
            exact to='/about'
            className="nav-tabs"
            activeStyle={{ color: '#E87DA6' }} 
            activeClassName="active-link"
            onClick={() => closeMenu()}
          >
           <p style={{fontFamily:"roboto", fontSize: "30px", fontWeight: "700", lineHeight: "18px", letterSpacing: "0.15px", padding: "17px"}}>
              About
            </p>
          </NavLink>
          <NavLink
            exact to='/team'
            className="nav-tabs"
            activeStyle={{ color: '#E87DA6' }} 
            activeClassName="active-link"
            onClick={() => closeMenu()}
          >
            <p style={{fontFamily:"roboto", fontSize: "30px", fontWeight: "700", lineHeight: "18px", letterSpacing: "0.15px", padding: "17px"}}>
              Team
            </p>
          </NavLink>
          <NavLink
            exact to='/resources'
            className="nav-tabs"
            activeStyle={{ color: '#E87DA6' }} 
            activeClassName="active-link"
            onClick={() => closeMenu()}
          >
            <p style={{fontFamily:"roboto", fontSize: "30px", fontWeight: "700", lineHeight: "18px", letterSpacing: "0.15px", padding: "17px"}}>
              Resources
            </p>
          </NavLink>
          <img
            src={monster}
            alt="blue-monster"
            className="mobile-nav-monster"
            
            />
        </ul>
      </nav>
      <Grid container spacing={5} wrap="nowrap" style={{marginRight: "20px"}}>
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
      </Grid>
    </Box>
  )
}

export default Header