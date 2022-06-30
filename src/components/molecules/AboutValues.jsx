import React from "react";
import { Grid } from "@material-ui/core";
import SingleValue from '../atoms/SingleValue'
import placeholder from '../../images/background-triangle.png'

function AboutValues(props) {
  const { ourValues } = props
  return (
    <Grid container justify="center">
      <div className="about-values">
        <h1
          className='team-page-banners'>
          Our Values
          <hr className='about-page-banners-underline' />
        </h1>
        <p className="about-values-quote">
          "We're a team that <br className="mobile-break"/> sometimes <span className="about-values-quote-bold">falls down</span>,<br className="mobile-break"/> <br className="desktop-break"/>
          always <span className="about-values-quote-bold">gets back up</span>, and <br className="mobile-break"/> never stops <span className="about-values-quote-bold">having fun</span>."
        </p>
      </div>
      <Grid item container
        style={{ alignItems: "right", justifyItems: "center", zIndex: "1" }}
      >
        {ourValues.map((singleValue, key) => {
          return (
            <Grid container xs={16} sm={6} md={4} lg={4} spacing={12} alignItems="center" justifyContent="center">
              <SingleValue key={key} singleValue={singleValue} />
            </Grid>
          );
        })}
      </Grid>
      <img
        src={placeholder}
        width="100%"
        alt="triangle background"
        className="about-page-triangle"
      />
    </Grid>
  );
}

export default AboutValues;