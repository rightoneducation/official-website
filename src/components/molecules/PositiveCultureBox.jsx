import React from 'react';
import { Card, CardContent, Typography, Grid, Hidden } from "@material-ui/core";
import quote from '../../images/Resources_Quote.png'

function PositiveCultureBox(props) {
    const { styles } = props
        return(
          <Card className={styles.positiveCultureofErrorCardIntro} style={{background: 'linear-gradient(232.63deg, rgba(102, 42, 175, 0.93), rgba(255, 51, 105, 0.83))',}}> {/*background: 'rgba(41, 0, 83, 0.8)'; linear-gradient(52.63deg, #FF3369 0%, #662AAF 73.19%); */}
              <CardContent>
              <Grid container justify="center" alignItems="center" spacing={3}>
                  <Grid item xs={12} md={5} lg={7} style={{padding: 'initial'}}>
                    <Typography variant="h4">Positive Culture of Error</Typography>
                    <Typography variant="h6" className={styles.positiveCultureofErrorCardContent}>
                    In his book, <u>Teach Like a Champion</u>, veteran educator Doug Lemov talks about creating a classroom environment where “...students feel safe making and discussing mistakes, so you can spend less time hunting for errors and more time fixing them...” He outlines four key methods:
                    </Typography>
                    <Typography variant="h6" className={styles.positiveCultureofErrorCardContent}>
                      <ul>
                        <li>Expect error</li>
                        <li>Withhold answers</li>
                        <li>Manage your tell</li>
                        <li>Praise risk-taking</li>
                      </ul> 
                    </Typography>
                  </Grid>
                  <Hidden smDown='true'>
                  <Grid item xs={12} md={7} lg={5} style={{padding: 'initial'}}>
                    <a target="amazon" href="https://www.amazon.com/Rough-Draft-Math-Revising-Learn/dp/1625312067/"><img src={quote} width="100%"></img></a>
                    {/* <Card className={styles.cardContent} style={{"background": "white"}}>
                        <Typography variant="h5">
                        “Rough draft thinking happens when students share their unfinished, in-progress ideas and remain open to revising those ideas.” <br/> — Rough Draft Math, Dr. Amanda Jansen
                        </Typography>
                    </Card> */}
                  </Grid>
                  </Hidden>
                </Grid>
              </CardContent>
          </Card>
        );
}

export default PositiveCultureBox;