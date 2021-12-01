import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import quote from '../../images/Resources_Quote.png'

function PositiveCultureBox(props) {
    const { styles } = props
        return(
          <Card className={styles.cardIntro} style={{background: 'rgba(41, 0, 83, 0.8)', mixBlendMode: 'initial'}}>
              <CardContent>
              <Grid container justify="center" alignItems="center" spacing={3}>
                  <Grid item xs={6} md={5} lg={7} style={{padding: 'initial'}}>
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
                  <Grid item xs={6} md={7} lg={5} style={{padding: 'initial'}}>
                    <img src={quote} width="100%"></img>
                    {/* <Card className={styles.cardContent} style={{"background": "white"}}>
                        <Typography variant="h5">
                        “Rough draft thinking happens when students share their unfinished, in-progress ideas and remain open to revising those ideas.” <br/> — Rough Draft Math, Dr. Amanda Jansen
                        </Typography>
                    </Card> */}
                  </Grid>
                </Grid>
              </CardContent>
          </Card>
        );
}

export default PositiveCultureBox;