import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  mainNav: {
  fontWeight: '500',
  borderBottom: '5px solid rgb(216, 0, 83)',
  '&:hover':{
    borderBottom: '1px solid rgb(255, 255, 255)'
  }
}
})

function Header () {
  const styles = useStyles()
    return (
      <Box component="nav">
        <Grid container spacing={5}>
          <Grid item>
            <Link to='/'><Typography variant="h6" className={styles.mainNav}>Home</Typography></Link>
            </Grid>
          <Grid item>
            <Link to='/about'><Typography variant="h6" className={styles.mainNav}>About</Typography></Link>
          </Grid>
          <Grid item>
            <Link to='/team'><Typography variant="h6" className={styles.mainNav}>Team</Typography></Link>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Header