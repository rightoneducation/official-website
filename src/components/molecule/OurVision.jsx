import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Card, CardContent, Typography } from "@material-ui/core";
import image from '../../images/students-pointing-at-screen.jpg'


function OurVision (props) {
  const {styles} = props
    return (
      <Box components="section">
        <Paper elevation={2} className={styles.bannerImage}>
          <img
            src={image}
            alt="right-on-education-vision"
            width="100%"
            align="top"
          />
        </Paper>
        <Card className={styles.cardIntro}>
          <CardContent>
            <Typography variant="h4">Our Vision</Typography>
            <Typography variant="h6" className={styles.cardContent}>
              In the future, we envision{" "}
              <b>
                <em>RightOn!</em>
              </b>{" "}
              to become a multi-channel learning platform (spanning mobile apps
              and livestream video), one that eventually helps connect students
              of all ages and backgrounds to learn new subjects – from math
              today to others in the future.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
}

export default OurVision;