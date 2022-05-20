import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, Typography, Grid } from "@material-ui/core";
import bored from '../../images/student-looking-bored.jpg'
import chromebook from '../../images/chromebook_mockup.png'

const useStyles = makeStyles( theme => ({
  cardContent: {
    alignSelf: 'center',
    padding: '1%',
  },
  boxOverLap: {
    marginLeft: '-20px',
    [theme.breakpoints.down('sm')]: {
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
        <Grid align="center" xs={12} sm={12} md={8}>
            <img
              src={chromebook}
              width="100%"
              alt="right-on-education-chromebook-app"
            />
          </Grid>
          <Grid xs={10} sm={10} md={5} className={styles.boxOverLap}>
            <Card className={styles.cardContent}>
              <CardContent>
                <Typography variant="h5" style={{ marginBottom: "10px" }}>
                  The Problem
                </Typography>
                <Typography variant="body1" style={{fontWeight: "300", lineHeight: "1.4"}}>
                  Many people think that STEM learning is all about homework, tests, and correct answers.
                  We flip that idea on its head, enabling students to learn from mistakes while having fun.
                  Give {""}<b><em>RightOn!</em></b>{""} a try and find out how!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
}

export default ProblemSection;