import React from 'react'
import righton from 'righton.svg'
// import { makeStyles } from "@material-ui/core/styles";
import { Box,Typography, Grid } from "@material-ui/core";

function Footer () {
    return (
      <Box component="footer">
        <Grid container justify="space-around"  alignItems="center">
          <Grid item xs={12} sm={12} md={7}> 
            <Typography variant="h5" className="footer-msg">
              Interested in learning more? Email us at <br/> <a href="mailto:info@rightoneducation.com" className='email-us'><b>info@rightoneducation.com</b></a>
              </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={4} className="footer-logo">
            <a href='/'><img src={righton} width='100%' alt='RightOn logo' /></a>
            <div>
            <p className='copyright-msg'>RightOn Education &copy; 2020 All Rights Reserved</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Footer;