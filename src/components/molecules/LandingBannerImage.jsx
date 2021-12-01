import React from "react";
import { Paper } from "@material-ui/core";
import placeholder from "../../images/diversity-placeholder-image.jpg";

function LandingBannerImage(props) {
  const { styles } = props;

  return (
    <Paper elevation={2} className={styles.bannerImage}>
      <img src={placeholder} width="100%" alt="vision-banner" />
    </Paper>
  );
}

export default LandingBannerImage;
