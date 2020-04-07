import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Card, CardContent, Typography } from "@material-ui/core";
import placeholder from 'images/diversity-placeholder-image.jpg'

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

function OurMission () {
  const styles = useStyles()
    return (
      <Box components="section">
          <Paper elevation={2} className={styles.bannerImage}>
            <img src={placeholder} width="100%" />
          </Paper>
          <Card className={styles.cardIntro}>
            <CardContent>
              <Typography variant="h4">Mission</Typography>
              <Typography variant="h6" className={styles.cardContent}>
                Our mission is to make math more fun for middle and high school
                students, increasing both motivation and self-confidence. Not a
                big fan of math? Great,
                {" "}<b><em>RightOn!</em></b>{" "}
                is the game for you. Already like math? That’s cool too, you’ll
                like it even more!
              </Typography>
            </CardContent>
          </Card>
      </Box>
    );
}

export default OurMission;