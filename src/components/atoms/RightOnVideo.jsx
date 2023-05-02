import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";
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
        marginTop: "0px",
        marginBottom: "93.52px",
        position: "relative",
        width: "100%"
      }}
    ><div >
      <div container className="right-on-video-container">
        <iframe
          width="100%"
          height="315"
          src='https://www.nbcnews.com/news/embedded-video/mmvo160212037562' 
          title="RightOn! Beta overview"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="right-on-video"
        ></iframe>
        
      </div>
      <div style={{marginLeft: "20px"}} className="">
      <Card style={{
  backgroundImage: "linear-gradient(to bottom,  #322759, #40216F, #591796)",
  boxShadow: "5px 15px 15px rgba(0, 0, 0, 0.25)", borderRadius:"20px"
}} className='video-cards'>
  <Grid container alignItems="center" justify="center" spacing={1}>
    <Grid>
      <CardContent>
        <h3 className='video-comment' style={{ marginTop: "20px" }}>
          We’re featured on 
          <br /> NBC Nightly News!
        </h3>
      </CardContent>
    </Grid>
  </Grid>
</Card>

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
