import React, { useState } from "react";
import { Grid, Card } from "@material-ui/core";
import SingleAdvisor from "../atoms/SingleAdvisor";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Carousel from 'react-material-ui-carousel'

function Advisors({ advisorProfiles }) {
  const decks = [[0, 1, 2], [3, 4, 5], [6, 0, 1], [2, 3, 4], [5, 6, 0], [1, 2, 3], [4, 5, 6]]
  return (
    <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <Carousel className="arrows" animation="slide" autoPlay={false} duration={1500} navButtonsAlwaysVisible={true}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        navButtonsProps={{
          style: {
            width: "110px",
            height: "110px"
          }
        }} >
        {advisorProfiles.map((advisor, index) => {

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
      <Carousel className="no-arrows" animation="slide" autoPlay={false} duration={1500} navButtonsAlwaysInvisible={true}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        navButtonsProps={{
          style: {
            width: "110px",
            height: "110px"
          }
        }} >
        {advisorProfiles.map((advisor, index) => {

          var deck = decks[(index % 7)]
          console.log(deck)
          var first = deck[0]
          var second = deck[1]
          var third = deck[2]
          var advisorOne = advisorProfiles[first]
          var advisorTwo = advisorProfiles[second]
          var advisorThree = advisorProfiles[third]
          return (
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
          );
        })}
      </Carousel>
    </Grid>
  )
}
export default Advisors;
