import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import teamIcon from "../../images/team-icon.svg";
import SingleValue from '../atoms/SingleValue'

function AboutValues(props) {
  const { ourValues} = props
  return (
    <Grid
          item
          container
          // xs={12}
          // sm={8}
          // md={10}
          // spacing={4}
          // justify="space-around"
        >
          {ourValues.map((singleValue, key) => {
            return (
              <Grid item md={4}>
                <SingleValue key={key} singleValue={singleValue} />
              </Grid>
            );
          })}
        </Grid>
    // <Card className={styles.cardIntro}>
    //   <CardContent>
    //     <Grid container justify="space-around" alignItems="center" spacing={2}>
    //       <Grid xs={6} sm={3} md={3} lg={2}>
    //         <img src={teamIcon} alt="right-on-education" width="100%" />
    //       </Grid>
    //       <Grid md={9}>
    //         <Typography variant="h4">Our Values</Typography>
    //         <Typography variant="h6" className={styles.cardContent}>
    //           We’re a team that sometimes falls down, always gets back up, and
    //           never stops having fun.
    //           <br />
    //           <b>Trust and open communication:</b> seeking to understand, then
    //           to be understood
    //           <br />
    //           <b>Rising together:</b> lifting ourselves up by lifting others
    //           <br />
    //           <b>Humble perseverance:</b> falling down seven times, getting up eight
    //           <br />
    //           <b>Gratitude:</b> keeping a grateful mindset through ups and downs
    //           <br />
    //           <b>Positive culture of error:</b> learning from mistakes, iterating, and improving
    //           <br />
    //           <b>Beginner’s mindset:</b> embarking on all journeys with an open mind
    //           <br />
    //           <b>Fun:</b> having fun along the way!
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </CardContent>
    // </Card>
  );
}

export default AboutValues;
