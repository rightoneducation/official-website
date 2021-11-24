import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  positiveCultureofErrorCardContent:{
    marginTop: "20px",
    fontWeight: "300",
    lineHeight: "1.4",
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em'
    }
  }
}))

function PositiveCultureofErrorText() {
  const styles = useStyles()
  return (
    <Box>
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item xs={7}>
          <Typography variant="h4">Positive Culture of Error</Typography>
          <Typography variant="h6" className={styles.positiveCultureofErrorCardContent}>
          In his book, Teach Like a Champion, veteran educator Doug Lemov talks about creating a classroom environment where “...students feel safe making and discussing mistakes, so you can spend less time hunting for errors and more time fixing them...” He outlines four key methods:
            <ul>
              <li>Expect error</li>
              <li>Withhold answers</li>
              <li>Manage your tell</li>
              <li>Praise risk-taking</li>
            </ul> 
          </Typography>
        </Grid>
        <Grid id='quote' item xs={5}>
          <Card className={styles.cardContent} style={{"background": "white"}}>
            <CardContent>
              <Typography variant="h5">
              “Rough draft thinking happens when students share their unfinished, in-progress ideas and remain open to revising those ideas.” <br/> — Rough Draft Math, Dr. Amanda Jansen
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PositiveCultureofErrorText;
