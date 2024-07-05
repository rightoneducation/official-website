import React from "react";
import { Grid, Typography } from "@material-ui/core"; //Card, CardContent
import banner from "../../images/banner-background.png"

export default function OverviewVideoHeading(props) {
    //   const { styles } = props;
    return (
        <Grid container justify="left">
            <Grid item>
                <h4 className="overview-video-heading">
                    Intro
                </h4>
                <br />
            </Grid>
        </Grid>
    );
}