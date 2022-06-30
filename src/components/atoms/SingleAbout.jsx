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
          <CardContent style={{ paddingBottom: "15px" }}>
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
            className="about-card-img-desktop"
            src={featureImage}
            //alt="right-on-education-about-cards"
            width="80%"
            style={{
              marginLeft: "40px"
            }}
          />
          <img
            className="about-card-img-tablet"
            src={featureImage}
            //alt="right-on-education-about-cards"
            width="93%"
            style={{
              marginLeft: "20px"
            }}
          />
          <img
            className="about-card-img-mobile"
            src={featureImage}
            //alt="right-on-education-about-cards"
            width="100%"
            style={{
              transform: "rotate(353deg)",
              marginLeft: "10px",
              marginTop: "20px"
            }}
          />
          <iframe
            className="about-card-vid-desktop"
            width="100%"
            height="270px"
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
          <iframe
            className="about-card-vid-tablet"
            width="100%"
            height="295px"
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
          <iframe
            className="about-card-vid-mobile"
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