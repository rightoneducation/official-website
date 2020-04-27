import React from "react";
import { Paper } from "@material-ui/core";
import image from "../../images/students-pointing-at-screen.jpg";

function AboutBannerImage(props) {
  const { styles } = props;
 
  return (
      <Paper elevation={2} className={styles.bannerImage}>
        <img
          src={image}
          alt="right-on-education-vision"
          width="100%"
          align="top"
        />
      </Paper>
  );
}

export default AboutBannerImage;
