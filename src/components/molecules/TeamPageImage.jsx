import React from "react";
import { Paper } from "@material-ui/core";
import placeholder from "../../images/Banner.png";

function LandingBannerImage(props) {
  const { styles } = props;

  return (
    <Paper elevation={2} className={styles.bannerImage}>
      <img
        src={placeholder}
        alt="right-on-education-vision"
        width="100%"
        align="center"
      />
    </Paper>
  );
}

export default LandingBannerImage;
