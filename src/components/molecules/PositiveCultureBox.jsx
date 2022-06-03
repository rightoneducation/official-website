import React from 'react';
import { Card, CardContent, Typography, Grid, Hidden, Box } from "@material-ui/core";
import quote from '../../images/ted-and-quote.png'

function PositiveCultureBox(props) {
  const { styles } = props
  return (
    <Box component="section">
      <Grid container style={{ margin: "100px" }}>
        <Grid item style={{ marginLeft: "-100px" }}>
          <h4 className='crmt-header'>
            Teach Like a Champion
            <hr className='error-analysis-underline' />
          </h4>
          <h6 className='crmt-description'>
            In his book, <a href="https://www.amazon.com/Teach-Like-Champion-Doug-Lemov/dp/1119712610/" style={{ color: "#E87DA6", fontStyle: "italic" }}><u>Teach Like a Champion</u></a>, veteran <br /> educator Doug Lemov talks about creating a <br /> classroom environment where “...students feel<br />  safe making and discussing mistakes, so you <br /> can spend less time hunting for errors and more<br />  time fixing them...” He outlines four key <br /> methods:
            <br />
            <br />
            <li>Expect error</li>
            <li>Withhold answers</li>
            <li>Manage your tell</li>
            <li>Praise risk-taking</li>
          </h6>
        </Grid>
        <Hidden smDown='true'>
          <Grid item xs={12} md={7} lg={5} style={{ marginLeft: "80px", marginTop: "200px", marginRight: "5px" }}>
            <a target="amazon" href="https://www.amazon.com/Rough-Draft-Math-Revising-Learn/dp/1625312067/">
              <img src={quote}></img></a>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
}

export default PositiveCultureBox;