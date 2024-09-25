import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import monster from "../../images/hamburger-monster.png";


const useStyles = makeStyles((theme) => ({
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

function Header({isMedium}) {
  const classes = useStyles();
  const [navbarOpen, setNavbarOpen] = useState(false)
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  //go to top of page when nav link is clicked
  const handleNavLinkClick = () => {
    window.scrollTo(0, 0)
    closeMenu()
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
          <Box style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20}}>
            <Box
              className={classes.centralButton} 
              style={{
                width: '166px',
                height: '58px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => { window.location.href = 'https://central.rightoneducation.com'}}
              >
              <Typography style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                Central
              </Typography>
            </Box>
            <Box 
              className={classes.playButton} 
              style={{
                width: '166px',
                height: '58px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => { window.location.href = 'https://play.rightoneducation.com'}}
            >
              <Typography style={{fontSize: 30,  color: 'white', fontWeight: 'bold'}}>
                Play
              </Typography>
            </Box>
          </Box>
          <NavLink
            exact to='/' 
            className="nav-tabs"
            activeStyle={{ color: '#E87DA6' }} 
            activeClassName="active-link"
            onClick={() =>  handleNavLinkClick()}
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
            onClick={() =>  handleNavLinkClick()}
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
            onClick={() =>  handleNavLinkClick()}
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
            onClick={() =>  handleNavLinkClick()}
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
      <Grid container spacing={5} wrap="nowrap">
        <Grid item>
          <NavLink exact to='/' className="mainNav" activeStyle={{ color: '#E87DA6' }} activeClassName="activeRoute">
            <Typography variant="h6" style={{fontSize: isMedium ? 18 : 30}}>
              Home
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to='/about' className="mainNav" activeStyle={{ color: '#E87DA6' }} activeClassName="activeRoute">
            <Typography variant="h6" style={{fontSize: isMedium ? 18 : 30}}>
              About
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to='/team' className="mainNav" activeStyle={{ color: '#E87DA6' }} activeClassName="activeRoute">
            <Typography variant="h6" style={{fontSize: isMedium ? 18 : 30}}>
              Team
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to='/resources' className="mainNav" activeStyle={{ color: '#E87DA6' }} activeClassName="activeRoute">
            <Typography variant="h6" style={{fontSize: isMedium ? 18 : 30}}>
              Resources
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header