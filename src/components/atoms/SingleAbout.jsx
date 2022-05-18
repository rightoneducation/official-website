import React from 'react'
import {
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";

function SingleAbout(props) {
  const { title, featureImage, description } = props.aboutCards
  return (
    <Card
        style={{
            width: "658px",
            height: "733px",
            background: "#3E226C",
            borderRadius: "30px",
            filter: "drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25))"
        }}
    >
        <Grid>
        {/* <Grid container alignItems="center" justify="space-around" spacing={1}> */}
          
          <Grid>
          <CardContent>
            <h3
              style={{
                fontFamily: 'filson-pro',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "48px",
                lineHeight: "48px",
                textAlign: "center",
                marginBottom: "20px",
                paddingBottom: "5px",
                borderBottom: "7px solid #E29B5D",
                color: "white"
              }}
            >
              {title}
            </h3>
            <p 
                style={{
                    padding: "12px",
                    fontFamily: 'Roboto',
                    fontWeight: "400",
                    fontSize: "29px",
                    lineHeight: "38px",
                    color: "white"
                }}
                dangerouslySetInnerHTML={{__html : description}}
            />
          </CardContent>
          </Grid>
          <Grid>
            <img
              src={featureImage}
              alt="right-on-education-about-cards"
              width="100%"
              style={{
                  marginBottom: "-400px"
              }}
              />
          </Grid>
        </Grid>
    </Card>
  );
}

export default SingleAbout;