import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Card, CardContent, Typography } from "@material-ui/core";
import image from '../../images/students-pointing-at-screen.jpg'

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


function OurVision () {
  const styles = useStyles()
    return (
      <Box components="section">
        <Paper elevation={2} className={styles.bannerImage}>
          <img  src={image} alt='right-on-education-vision' width='100%' align='top' />
        </Paper>
        <Card className={styles.cardIntro}>
          <CardContent>
            <Typography variant="h4">Our Vision</Typography>
            <Typography variant="h6" className={styles.cardContent}>
              In the future, we envision <b><em>RightOn!</em></b> to become a multi-channel learning platform (spanning mobile apps and livestream video), one that eventually helps connect students of all ages and backgrounds to learn new subjects – from math today to others in the future.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    )
}

export default OurVision;