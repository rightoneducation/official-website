import React from "react";
import { Paper, Grid } from "@material-ui/core";
import placeholder from "../../images/Banner.png";

function LandingBannerImage(props) {
  const { styles } = props;

  return (
    <Paper elevation={2} className={styles.bannerImage}>
      <Grid container alignItems="center" justify="space-around">
            <img src={placeholder} alt='right-on-education-team-banner' width= '100%' max-width= '756.4px'/>
            </Grid>
    </Paper>
  );
}

export default LandingBannerImage;
