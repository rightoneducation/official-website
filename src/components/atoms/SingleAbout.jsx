import React from 'react'
import {
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";


function SingleAbout(props) {
  const { title, featureImage, src, description } = props.aboutCards
  return (
    <Card
      style={{ backgroundColor: "#3E226C", filter: "drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25))", borderRadius: "15px" }}
      className='about-cards'
    >
      <Grid>
        {/* <Grid container alignItems="center" justify="space-around" spacing={1}> */}

        <Grid>
          <CardContent>
            <h3 className='about-cards-title'>
              {title}
            </h3>
            <p className='about-cards-description'
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </CardContent>
        </Grid>
        <Grid>
          <img
            src={featureImage}
            //alt="right-on-education-about-cards"
            width="75%"
            style={{
              marginLeft: "50px"
            }}
          />
          <iframe
            width="100%"
            height="235px"
            src={src}
            title="My Fav No"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{
              marginLeft: "0px",
              borderRadius: "0px"
            }}
          >
          </iframe>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SingleAbout;