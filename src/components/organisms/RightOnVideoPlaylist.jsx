import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import GameShowHeading from "../molecules/GameShowHeading";
import OverviewVideo from "../atoms/OverviewVideo"
import GameShowDescription from '../molecules/GameShowDescription';
import OverviewVideoHeading from "../molecules/OverviewVideoHeading";
import triangle from "../../images/background-triangle.png"
import AboutBannerImage from "../molecules/AboutBannerImage";
import TutorialVideos from "../molecules/TutorialVideosSection";

//take id of clicked video link - set src and title based off current/clicked id

export default function RightOnVideoPlaylist(props) {
    const [currentVideo, setCurrentVideo] = useState()

    //mapping over tutorial videos objects from features.db - returning list of video titles
    const videoLink = props.videoSrc.map((video) => (
        <p key={video.id}> {video.title}</p>

    ))

    return (
        <Box >
            <AboutBannerImage />
            <Grid container justify="space-evenly" alignItems="top" spacing={1}>
                <Grid >
                    <Box components="section">
                        <div className="tutorial-video-panel">
                            <h4 className="tutorial-videos-header-text">Tutorial Videos</h4>
                            <div className="tutorial-videos-panel">
                                <button onClick={() => console.log("CLICKED:", props.video.id)} className="tutorial-videos-text">{videoLink}<br></br></button>
                            </div>
                        </div>
                    </Box>
                    {/*<TutorialVideos {...props} /> */}
                </Grid>
                <Grid>
                    <Grid container justify="left">z
                        <Grid item>
                            <h4 className="overview-video-heading">
                                {props.videoSrc[0].title}
                            </h4>
                            <br />
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={12} md={8} style={{ marginBottom: "70px" }}>
                        <div>
                            <iframe
                                width="860"
                                height="483"
                                src={props.videoSrc[0].src}
                                title={props.videoSrc[0].title}
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