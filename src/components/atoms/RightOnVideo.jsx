import React from "react";
import { Box, Grid } from "@material-ui/core";
import redMonster from '../../images/red-monster.png'
import blueMonster from '../../images/blue-monster.png'

function RightOnVideo() {
  return (
    <Grid xs={12} sm={12} md={8} style={{ marginBottom: "70px"}}>
      <Grid style={{zIndex: "2"}}>
        <iframe
          width="100%"
          height="483"
          src="https://www.youtube.com/embed/k_GEcWXJABM"
          title="RightOn! Beta overview"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Grid>
      <div style={{zIndex: "1"}}>
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
    </Grid>
  );
}

export default RightOnVideo;
