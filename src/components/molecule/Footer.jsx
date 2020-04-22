import React from 'react'
import righton from 'righton.svg'
import { makeStyles } from "@material-ui/core/styles";
import { Box,Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
  footer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
      textAlign: "center"
    }
  }
}))


function Footer () {
  const styles = useStyles()
    return (
      <Box component="footer">
        <Grid container justify="space-around"  alignItems="center" className={styles.footer}>
          <Grid item xs={12} sm={12} md={7}> 
            <Typography variant="h5" className="footer-msg">
              Interested in learning more? Email us at <br/> <a href="mailto:info@rightoneducation.com" className='email-us'><b>info@rightoneducation.com</b></a>
              </Typography>
          </Grid>
          <Grid container item xs={10} sm={8} md={2} lg={3} justify="center" spacing={1} className="footer-logo">
            <Grid item md={10}>
            <img src={righton} width='100%' alt='RightOn logo' />
            </Grid>
            <Grid item>
            <p className='copyright-msg'>RightOn Education &copy; 2020 All Rights Reserved</p>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Footer;