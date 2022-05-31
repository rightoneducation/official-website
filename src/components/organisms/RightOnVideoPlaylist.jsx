import React from "react";
import { Box, Grid } from "@material-ui/core";
import GameShowHeading from "../molecules/GameShowHeading";
import OverviewVideo from "../atoms/OverviewVideo"
import GameShowDescription from '../molecules/GameShowDescription';
import OverviewVideoHeading from "../molecules/OverviewVideoHeading";
import triangle from "../../images/background-triangle.png"
import AboutBannerImage from "../molecules/AboutBannerImage";

export default function RightOnVideoPlaylist(props) {
    const { styles } = props;
    return (
        <Box >
            <AboutBannerImage/>
            <Grid container style={{ justifyContent: "center" }}>
                <OverviewVideoHeading />
                <OverviewVideo />
            </Grid>
            {/* <GameShowDescription styles={ styles } /> */}
            <img
                src={triangle}
                width="100%"
                alt="triangle background"
                className="about-page-triangle"
            />
        </Box>
    );
};