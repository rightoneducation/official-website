import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, Typography, Grid } from "@material-ui/core";
import bored from 'images/student-looking-bored.jpg'

const useStyles = makeStyles( theme => ({
  cardContent: {
    alignSelf: 'center',
    padding: '3%',
  },
  boxOverLap: {
    marginLeft: '-20px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-20px',
      marginLeft: '0px'
    }
  }
}))

function ProblemSection () {
  const styles = useStyles()
    return (
      <Box component="section">
        <Grid container justify="center" alignItems="center" spacing={1}>
          <Grid xs={10} sm={10} md={4}>
            <img src={bored} alt="right-on-education-stockphoto" width="100%" />
          </Grid>
          <Grid xs={10} sm={10} md={6} className={styles.boxOverLap}>
            <Card className={styles.cardContent}>
              <CardContent>
                <Typography variant="h5" style={{ marginBottom: "20px" }}>
                  The Problem
                </Typography>
                <Typography variant="body2">
                  Math, ugh! Many students feel that math is all about tests,
                  grades, homework, and getting correct answers... What if we
                  could flip things around and make math more about learning
                  from mistakes and even having fun? Give
                  {" "}<b><em>RightOn!</em></b>{" "}
                  a try and find out how!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
}

export default ProblemSection;