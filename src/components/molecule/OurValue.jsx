import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Card, CardContent, Grid, Typography } from "@material-ui/core";
import teamIcon from '../../images/team-icon.svg'
import placeholder from 'images/team-photo.jpg'

const useStyles = makeStyles({
  bannerImage: {
    background: "lightgrey",
    marginBottom: "-5%",
    overflow: "hidden",
    objectFit: "contain",
    objectPosition: "center"
  },
  cardIntro: {
    justifyContent: 'center',
    color: 'white',
    width: '85%',
    position: "relative",
    padding: "8% 5%",
    margin: 'auto',
    mixBlendMode: 'multiply',
    background: 'linear-gradient(201.84deg, #B443CC 0%, #662AAF 73.19%)'
  },
  cardContent: {
    borderLeft: "8px solid #d80053",
    paddingLeft: "20px",
    fontWeight: "300",
    lineHeight: "1.4"
  }
});

function OurValue () {
  const styles = useStyles()
    return (
      <Box>
        <Paper elevation={2} className={styles.bannerImage}>
          <img src={placeholder} alt='right-on-education-vision' width='100%' align='top' />
        </Paper>
        <Card className={styles.cardIntro}>
          <CardContent>
          <Grid container justify="space-around" alignItems="center" spacing={2}>
            <Grid sm={4} md={3} lg={2}>
              <img src={teamIcon} alt='right-on-education' width= '100%' />
            </Grid>
            <Grid md={7}>
              <Typography variant="h4">Our Values</Typography>
              <Typography variant="h6" className={styles.cardContent}>
                  We’re a team that sometimes falls down, always gets back up, and never stops having fun.<br/>
                  <b>Trust and open communication:</b> seeking to understand, then to be understood<br/>
                  <b>Integrity:</b> doing the right thing<br />
                  <b>Compassion:</b> lending a hand to others, giving back, expressing gratitude<br />
                  <b>Humility:</b> working together on something bigger than ourselves<br />
                  <b>Beginner’s mindset:</b> going into things with an open mind, always learning and making new mistakes<br />
                  <b>Fun:</b> having fun along the way!
            </Typography>
            </Grid>
          </Grid>
          </CardContent>
        </Card>
      </Box>
    )
}

export default OurValue;