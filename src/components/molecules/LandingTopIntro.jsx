import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function LandingTopIntro(props) {
  const { styles } = props;
  return (
    <Card className={styles.cardIntro}>
      <CardContent>
        <Typography variant="h4">Mission</Typography>
        <Typography variant="h6" className={styles.cardContent}>
          Our mission is to make math more fun for middle and high school
          students, increasing both motivation and self-confidence. Not a big
          fan of math? Great,{" "}
          <b>
            <em>RightOn!</em>
          </b>{" "}
          is the game for you. Already like math? That’s cool too, you’ll like
          it even more!
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LandingTopIntro;
