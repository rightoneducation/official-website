import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import teamIcon from "../../images/team-icon.svg";

function TeamPageIntro(props) {
  const { styles } = props;
  return (
    <Card className={styles.cardIntro}>
      <CardContent>
        <Grid container justify="space-around" alignItems="center" spacing={2}>
          <Grid xs={6} sm={3} md={3} lg={2}>
            <img src={teamIcon} alt="right-on-education" width="100%" />
          </Grid>
          <Grid md={9}>
            <Typography variant="h4">Our Values</Typography>
            <Typography variant="h6" className={styles.cardContent}>
              We’re a team that sometimes falls down, always gets back up, and
              never stops having fun.
              <br />
              <b>Trust and open communication:</b> seeking to understand, then
              to be understood
              <br />
              <b>Integrity:</b> doing the right thing
              <br />
              <b>Compassion:</b> lending a hand to others, giving back,
              expressing gratitude
              <br />
              <b>Humility:</b> working together on something bigger than
              ourselves
              <br />
              <b>Beginner’s mindset:</b> going into things with an open mind,
              always learning and making new mistakes
              <br />
              <b>Fun:</b> having fun along the way!
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TeamPageIntro;
