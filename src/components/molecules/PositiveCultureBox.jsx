import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

function PositiveCultureBox(props) {
    const { styles } = props
        return(
          <Card className={styles.cardIntro}>
            <CardContent>
    
              <Grid container justify="space-around" alignItems="center" spacing={2}>
                <Grid xs={7}>
                  <Typography variant="h4">Positive Culture of Error</Typography>
                  <Typography variant="h6">
                  In his book, <a target="amazon" href="https://www.amazon.com/Teach-Like-Champion-Doug-Lemov/dp/1119712610/">Teach Like a Champion</a>, veteran educator Doug Lemov talks about creating a classroom environment where “...students feel safe making and discussing mistakes, so you can spend less time hunting for errors and more time fixing them...” He outlines four key methods:
                    <ul>
                      <li>Expect error</li>
                      <li>Withhold answers</li>
                      <li>Manage your tell</li>
                      <li>Praise risk-taking</li>
                    </ul> 
                  </Typography>
                </Grid>
                <Grid id='quote' item xs={5}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">
                      “Rough draft thinking happens when students share their unfinished, in-progress ideas and remain open to revising those ideas.” <br/> — <a target="amazon" href="https://www.amazon.com/Rough-Draft-Math-Revising-Learn/dp/1625312067/">Rough Draft Math</a>, Dr. Amanda Jansen
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

            </CardContent>
          </Card>
        );
}

export default PositiveCultureBox;