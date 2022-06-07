import React from "react";
import { Box, Grid } from "@material-ui/core";
import redMonster from '../../images/red-monster.png'
import blueMonster from '../../images/blue-monster.png'

function RightOnVideo() {
  return (
    <Grid xs={12} sm={12} md={8}
      alignItems="center"
      justify="center"
      style={{
        top: "0px",
        left: "0px",
        marginTop: "250px",
        marginBottom: "300px",
        position: "relative",
        width: "100%"
      }}
    >
      <div container className="right-on-video-container">
        <iframe
          width="100%"
          height="483"
          src="https://www.youtube.com/embed/k_GEcWXJABM"
          title="RightOn! Beta overview"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="right-on-video"
        ></iframe>
        <div style={{marginLeft: "20px"}}>
          <img
            src={redMonster}
            alt="red-monster"
            className='red-monster'
          />
        </div>
        <div>
          <img
            src={blueMonster}
            alt="blue-monster"
            className='blue-monster'
          />
        </div>
      </div>

    </Grid>
  );
}

export default RightOnVideo;
