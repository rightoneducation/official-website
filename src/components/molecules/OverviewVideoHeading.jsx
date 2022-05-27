import React from "react";
import { Grid, Typography } from "@material-ui/core"; //Card, CardContent
import banner from "../../images/banner-background.png"

export default function OverviewVideoHeading(props) {
    //   const { styles } = props;
    return (
        <Grid container justify="center">
            <Grid item>
                <h4 className="crmt-header">
                    RightOn! Overview
                </h4>
                <br/>
            </Grid>
        </Grid>
    );
}