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
            <div>
              <div className="largest-advisors">
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
              </div>
              <div className="large-advisors">
                < Grid container style={{
                  display: "flex",
                  alignItems: "center", justifyContent: "center",
                  width: "1300px", height: "700px"
                }}>
                  <SingleAdvisor
                    key={index}
                    advisor={first}
                    position={"side"} />
                  <SingleAdvisor
                    key={index}
                    advisor={second}
                    position={"center"} />
                  <SingleAdvisor
                    key={index}
                    advisor={advisor}
                    position={"center"} />
                  <SingleAdvisor
                    key={index}
                    advisor={fourth}
                    position={"side"}
                  />
                </Grid>
              </div>
              <div className="medium-advisors">
                < Grid container style={{
                  display: "flex",
                  alignItems: "center", justifyContent: "center",
                  width: "1000px", height: "700px"
                }}>
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
                </Grid>
              </div>
              <div className="small-advisors">
                < Grid container style={{
                  display: "flex",
                  alignItems: "center", justifyContent: "center",
                  width: "700px", height: "700px"
                }}>
                  <SingleAdvisor
                    key={index}
                    advisor={second}
                    position={"center"} />
                  <SingleAdvisor
                    key={index}
                    advisor={advisor}
                    position={"center"} />
                </Grid>
              </div>
              <div className="smallest-advisors">
                < Grid container style={{
                  display: "flex",
                  alignItems: "center", justifyContent: "center",
                  width: "100%", height: "100%", padding: "5%"
                }}>
                  <SingleAdvisor
                    key={index}
                    advisor={advisor}
                    position={"center"} />
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
