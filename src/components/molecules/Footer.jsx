import React from 'react'
import righton from '../../righton.svg'
import { makeStyles } from "@material-ui/core/styles";
import { Box,Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
  footer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
      textAlign: "center"
    },
    
  },
  logo: {
  marginTop: "20px",
  width: "300px"
  },
  footerMsg: {
    margin: "15px"
  },
  copyRight: {
    fontSize: "0.8rem",
    textAlign: "right",
    margin: "10px 0",
    color: "lightslategray"
  },
  email: {
    '&:hover': {
      textDecoration: "underline"
    }
  }
}))


function Footer () {
  const styles = useStyles()
    return (
      <Box component="footer" >
        <Grid container justify="space-around"  alignItems="center" className={styles.footer}>
          <Grid item xs={12} sm={12} md={7} > 
            <Typography variant="h5" className={styles.footerMsg}>
              Interested in learning more? Email us at <br/> <a href="mailto:info@rightoneducation.com" className={styles.email}><b>info@rightoneducation.com</b></a>
              </Typography>
          </Grid>
          <Grid container item xs={12} sm={8} md={4} lg={3} justify="center" spacing={1} className={styles.logo}>
            <Grid item md={10}>
            <img src={righton} width='100%' alt='RightOn-Logo' />
            </Grid>
            <Grid item>
            <p className={styles.copyRight}>RightOn Education &copy; {new Date().getFullYear()} All Rights Reserved</p>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Footer;