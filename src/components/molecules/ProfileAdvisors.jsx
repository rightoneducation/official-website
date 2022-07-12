import React, { useState } from "react";
import { Grid, Card } from "@material-ui/core";
import SingleAdvisor from "../atoms/SingleAdvisor";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Carousel from 'react-material-ui-carousel'

function Advisors({ advisorProfiles }) {

  return (
    <Grid container justify="center" >
      <Carousel animation="slide" autoPlay={false} duration={1500}>
        {advisorProfiles.map((advisor, index) => {
          var left = ((index === 0) ? 6 : index - 1)
          var leftmost = ((left === 0) ? 6 : left - 1)
          var right = ((index === 6) ? 0 : index + 1)
          var rightmost = ((right === 6) ? 0 : right + 1)

          var first = advisorProfiles[leftmost]
          var second = advisorProfiles[left]
          var fourth = advisorProfiles[right]
          var fifth = advisorProfiles[rightmost]
          return (
            < Grid container style={{
              alignItems: "center", justifyContent: "center",
              width: "1500px"
            }}>
              <Card className="advisor-card-edge"
                style={{ background: "rgb(50, 39, 89)", boxShadow: "none" }} >
                <SingleAdvisor
                  key={index}
                  advisor={first}
                  position={"edge"} />
              </Card>
              <Card className="advisor-card-side"
                style={{ background: "rgb(50, 39, 89)", boxShadow: "none" }}>
                <SingleAdvisor

                  key={index}
                  advisor={second}
                  position={"side"} />
              </Card>
              <Card className="advisor-card-center"
                style={{ background: "rgb(50, 39, 89)", boxShadow: "none" }}>
                <SingleAdvisor
                  key={index}
                  advisor={advisor}
                  position={"center"} />
              </Card>
              <Card className="advisor-card-side"
                style={{ background: "rgb(50, 39, 89)", boxShadow: "none" }}>
                <SingleAdvisor
                  key={index}
                  advisor={fourth}
                  position={"side"}
                />
              </Card>
              <Card className="advisor-card-edge"
                style={{ background: "rgb(50, 39, 89)", boxShadow: "none" }}>
                <SingleAdvisor
                  key={index}
                  advisor={fifth}
                  position={"edge"} />
              </Card>
            </Grid>
          );
        })}
      </Carousel>
    </Grid>
  )
}
export default Advisors;
