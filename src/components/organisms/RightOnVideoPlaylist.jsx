import React from "react";
import { Box, Grid } from "@material-ui/core";
import GameShowHeading from "../molecules/GameShowHeading";
import OverviewVideo from "../atoms/OverviewVideo"
import GameShowDescription from '../molecules/GameShowDescription';
import OverviewVideoHeading from "../molecules/OverviewVideoHeading";
import triangle from "../../images/background-triangle.png"
import AboutBannerImage from "../molecules/AboutBannerImage";
import TutorialVideos from "../molecules/TutorialVideosSection";

export default function RightOnVideoPlaylist(props) {

    console.log(props)
    console.log(props.videoSrc[0].src)
    return (
        <Box >
            <AboutBannerImage />
            <Grid container justify="space-evenly" alignItems="top" spacing={1}>
                <Grid>
                    <TutorialVideos {...props} />
                </Grid>
                <Grid>
                    <OverviewVideoHeading />
                    <Grid xs={12} sm={12} md={8} style={{ marginBottom: "70px" }}>
                        <div>
                            <iframe
                                width="860"
                                height="483"
                                src={props.videoSrc[0].src}
                                title="RighOn! Overview"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            {/* <GameShowDescription styles={ styles } /> */}
            {/* <img
                src={triangle}
                width="100%"
                alt="triangle background"
                className="about-page-triangle"
            /> */}
        </Box>
    );
};