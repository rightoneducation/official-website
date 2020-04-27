import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function AboutTopIntro(props) {
  const { styles } = props;
  return (
      <Card className={styles.cardIntro}>
        <CardContent>
          <Typography variant="h4">Our Vision</Typography>
          <Typography variant="h6" className={styles.cardContent}>
            In the future, we envision{" "}
            <b>
              <em>RightOn!</em>
            </b>{" "}
            to become a multi-channel learning platform (spanning mobile apps
            and livestream video), one that eventually helps connect students of
            all ages and backgrounds to learn new subjects – from math today to
            others in the future.
          </Typography>
        </CardContent>
      </Card>
  );
}

export default AboutTopIntro;
