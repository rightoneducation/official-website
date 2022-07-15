import React, { useState } from "react";
import { Grid, Card } from "@material-ui/core";
import SingleAdvisor from "../atoms/SingleAdvisor";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Carousel from 'react-material-ui-carousel'

function Advisors({ advisorProfiles }) {
  const decks = [[0, 1, 2], [3, 4, 5], [6, 0, 1], [2, 3, 4], [5, 6, 0], [1, 2, 3], [4, 5, 6]]
  return (
    <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <Carousel animation="slide" autoPlay={false} duration={1500}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {advisorProfiles.map((advisor, index) => {
          /*var left = ((index === 0) ? 6 : index - 1)
        var leftmost = ((left === 0) ? 6 : left - 1)
        var right = ((index === 6) ? 0 : index + 1)
        var rightmost = ((right === 6) ? 0 : right + 1)

        var first = advisorProfiles[leftmost]
        var second = advisorProfiles[left]
        var fourth = advisorProfiles[right]
        var fifth = advisorProfiles[rightmost]*/

          //console.log(index + 3)
          var deck = decks[(index % 7)]
          console.log(deck)
          var first = deck[0]
          var second = deck[1]
          var third = deck[2]
          var advisorOne = advisorProfiles[first]
          var advisorTwo = advisorProfiles[second]
          var advisorThree = advisorProfiles[third]
          return (
            <div>
              <div className="desktop-advisors">
                < Grid container style={{
                  display: "flex",
                  alignItems: "center", justifyContent: "center",
                  width: "100%", height: "700px"
                }}>
                  <SingleAdvisor
                    key={index}
                    advisor={advisorOne} />

                  <SingleAdvisor
                    key={index}
                    advisor={advisorTwo} />

                  <SingleAdvisor
                    key={index}
                    advisor={advisorThree} />

                </Grid>
              </div>
              <div className="mobile-advisors">
                < Grid container style={{
                  display: "flex",
                  alignItems: "center", justifyContent: "center",
                  width: "400", height: "700px"
                }}>
                  <SingleAdvisor
                    key={index}
                    advisor={advisorOne} />

                </Grid>
              </div>
            </div>
          );
        })}
      </Carousel>
    </Grid>
  )
}
export default Advisors;
