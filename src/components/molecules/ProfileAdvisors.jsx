import React, { useState } from "react";
import { Grid, Card } from "@material-ui/core";
import SingleAdvisor from "../atoms/SingleAdvisor";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Carousel from 'react-material-ui-carousel'

function Advisors({ advisorProfiles }) {

  return (
    <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <Carousel animation="slide" autoPlay={false} duration={1500}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
              display: "flex",
              alignItems: "center", justifyContent: "center",
              width: "1450px", height: "700px"
            }}>

              <SingleAdvisor
                key={index}
                advisor={first}
                position={"edge"} />

              <SingleAdvisor

                key={index}
                advisor={second}
                position={"side"} />

              <SingleAdvisor
                key={index}
                advisor={advisor}
                position={"center"} />

              <SingleAdvisor
                key={index}
                advisor={fourth}
                position={"side"}
              />

              <SingleAdvisor
                key={index}
                advisor={fifth}
                position={"edge"} />

            </Grid>
          );
        })}
      </Carousel>
    </Grid>
  )
}
export default Advisors;
