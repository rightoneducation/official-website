import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";

function TutorialVideos({ videoSrc }) {
  const videoLink = videoSrc.map((video, index) => (
    <p key={index}> {video.title} </p>
  ))

  return (
    <Box components="section">
      <div className="tutorial-video-panel">
        <h4 className="tutorial-videos-header-text">Tutorial Videos</h4>
        <div className="tutorial-videos-panel">
          <p className="tutorial-videos-text">{videoLink}<br></br></p>
        </div>
      </div>
    </Box>
  )
}

export default TutorialVideos





