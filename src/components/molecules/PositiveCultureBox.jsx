import React from 'react';
import { Card, CardContent, Typography, Grid, Hidden, Box } from "@material-ui/core";
import quote from '../../images/ted-and-quote.png'
import monster from "../../images/Ted.png"

function PositiveCultureBox(props) {
  const { styles } = props
  return (
    <Box component="section">
      <Grid container style={{ margin: "100px" }}>
        <Grid item style={{ marginLeft: "-10px" }}>
          <h4 className='crmt-header'>
            Teach Like a Champion
            <hr className='error-analysis-underline' />
          </h4>
          <h6 className='crmt-description'>
            In his book, <a href="https://www.amazon.com/Teach-Like-Champion-Doug-Lemov/dp/1119712610/" className="teach-like-champion-text"><u>Teach Like a Champion</u></a>, veteran <br /> educator Doug Lemov talks about creating a <br /> classroom environment where “...students feel<br />  safe making and discussing mistakes, so you <br /> can spend less time hunting for errors and more<br />  time fixing them...” He outlines four key <br /> methods:
            <br />
            <br />
            <li>Expect error</li>
            <li>Withhold answers</li>
            <li>Manage your tell</li>
            <li>Praise risk-taking</li>
          </h6>
        </Grid>
        <Hidden smDown='true'>
          {/* <Grid item xs={12} md={7} lg={5} style={{ marginLeft: "80px", marginTop: "200px", marginRight: "5px" }}>
            <a target="amazon" href="https://www.amazon.com/Rough-Draft-Math-Revising-Learn/dp/1625312067/">
              <img src={quote}></img></a>
          </Grid> */}
          <Card style={{ background: "#712773", borderRadius: "20px", marginTop: "150px", padding: "20px" }} className='rough-draft-card'>
            <CardContent>
              <p className='rough-draft-card-content'>
                “Rough draft thinking happens <br /> when students share their <br /> unfinished, in-progress ideas <br /> and remain open to revising <br /> those ideas.”
              </p>
              <br /> <br />
              <p className='rough-draft-card-content-bold'>
                <a href="https://www.amazon.com/Rough-Draft-Math-Revising-Learn/dp/1625312067/" className="rough-draft-math-text"><u>- Rough Draft Math</u></a>,
                <br />
                Dr. Amanda Jansen
              </p>
            </CardContent>
          </Card>
          <img
            src={monster}
            alt='ted-the-monster'
            className='rough-draft-monster'
          />
        </Hidden>
      </Grid>
    </Box>
  );
}

export default PositiveCultureBox;