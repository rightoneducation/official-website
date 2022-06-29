import React from 'react';
import { Card, CardContent, Typography, Grid, Hidden, Box } from "@material-ui/core";
import quote from '../../images/ted-and-quote.png'
import monster from "../../images/Ted.png"

function PositiveCultureBox(props) {
  const { styles } = props
  return (
    <Box component="section">
      <Grid container style={{ margin: "100px" }}>
        <Grid item style={{ marginLeft: "-100px" }}>
          <h4 className='crmt-header'>
            Teach Like a <br className="error-analysis-mobile-break"/> Champion
            <hr className='error-analysis-underline' />
          </h4>
          <h6 className='error-analysis-description'>
            In his book, <a href="https://www.amazon.com/Teach-Like-Champion-Doug-Lemov/dp/1119712610/" className='teach-like-champ-link'><u>Teach Like a Champion</u></a>, veteran <br className="error-analysis-desktop-break"/> educator Doug Lemov talks about creating a <br className="error-analysis-desktop-break"/> classroom environment where “...students feel<br className="error-analysis-desktop-break"/>  safe making and discussing mistakes, so you <br className="error-analysis-desktop-break"/> can spend less time hunting for errors and more<br className="error-analysis-desktop-break"/>  time fixing them...” He outlines four key <br className="error-analysis-desktop-break"/> methods:
            <br />
            <br />
            <li>Expect error</li>
            <li>Withhold answers</li>
            <li>Manage your tell</li>
            <li>Praise risk-taking</li>
          </h6>
        </Grid>
        <Hidden smDown='true'>
          <Card style={{ background: "#712773", borderRadius: "20px", marginTop: "150px", padding: "20px" }} className='rough-draft-card'>
            <CardContent>
              <p className='rough-draft-card-content'>
              “Rough draft thinking happens <br/> when students share their <br/> unfinished, in-progress ideas <br/> and remain open to revising <br/> those ideas.”
              </p>
              <br/> <br/>
              <p className='rough-draft-card-content-bold'>
                -<a href="https://www.amazon.com/Rough-Draft-Math-Revising-Learn/dp/1625312067/" className='rough-draft-link'><u> Rough Draft Math</u></a>,
              <br/>
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