import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import AboutBannerImage from "../molecules/AboutBannerImage";

//take id of clicked video link - set src and title based off current/clicked id
const data = {
    tutorialVideos: [
        {
            id: 1,
            title: "RightOn! Overview",
            src: "https://www.youtube.com/embed/VUS0sEPWhOM",
        },
        {
            id: 2,
            title: "Host & Display Overview",
            src: "https://www.youtube.com/embed/InYO4PECgqk",
        },
        {
            id: 3,
            title: "Basic vs. Advanced",
            src: "https://www.youtube.com/embed/HXrMCa4rdF4"
        }
    ],
};

export default function RightOnVideoPlaylist(props) {
    const { tutorialVideos } = data;

    const handleVideoClick = (vid) => {
        setCurrentVideo(vid);
    };

    const [currentVideo, setCurrentVideo] = useState(
        data.tutorialVideos[0]
    );

    {/*const handleClick1 = () => {
        setCurrentVideo(data.tutorialVideos[0]);
    };
    const handleClick2 = () => {
        setCurrentVideo(data.tutorialVideos[1]);
    };
    const handleClick3 = () => {
        setCurrentVideo(data.tutorialVideos[2]);
    };*/}

    const videoLink = tutorialVideos.map((video, index) => (
        <button
            className="tutorial-videos-text"
            onClick={() => handleVideoClick(video)}
            key={index}
        >
            {video.title}
        </button>
    ));

    return (
        <Box >
            <AboutBannerImage />
            <Grid container justify="space-evenly" alignItems="top" spacing={1}>
                <Grid >
                    <Box components="section">
                        <div className="tutorial-video-panel">
                            <h4 className="tutorial-videos-header-text">Tutorial Videos</h4>
                            <div className="tutorial-videos-panel"> {videoLink}
                                {/*<button onClick={() => handleClick1()} className="tutorial-videos-text">{data.tutorialVideos[0].title}</button>
                                <br></br>
                                <button onClick={() => handleClick2()} className="tutorial-videos-text">{data.tutorialVideos[1].title}</button>
                                <br></br>
                                <button onClick={() => handleClick3()} className="tutorial-videos-text">{data.tutorialVideos[2].title}</button>
    <br></br>*/}
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid>
                    <Grid container justify="left">
                        <Grid item>
                            <h4 className="overview-video-heading">
                                {currentVideo.title}
                            </h4>
                            <br />
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={12} md={8} >
                        <div>
                            <iframe
                                className="overview-video"
                                src={currentVideo.src}
                                title={currentVideo.title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            />
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            {/* <img
                src={triangle}
                width="100%"
                alt="triangle background"
                className="about-page-triangle"
    /> */}
        </Box>
    );
};

