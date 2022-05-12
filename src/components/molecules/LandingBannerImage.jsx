import React from "react";
import { Paper } from "@material-ui/core";
import placeholder from "../../images/chromebook_mockup.png";

function LandingBannerImage(props) {
  const { styles } = props;

  return (
    <Paper elevation={2} 
    className={styles.bannerImage}
    >
      <img src={placeholder} width="70%" alt="chromebook-mockup" />
    </Paper>
  );
}

export default LandingBannerImage;
