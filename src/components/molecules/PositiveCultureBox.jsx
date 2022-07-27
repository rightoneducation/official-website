import React from 'react';
import { Card, CardContent, Typography, Grid, Hidden, Box } from "@material-ui/core";
import quote from '../../images/ted-and-quote.png'
import monster from "../../images/Ted.png"

function PositiveCultureBox(props) {
  const { styles } = props
  return (
    <Box component="section">
      <Grid container className="teach-like-a-champ-section">
        <Grid item >
          <h4 className='teach-like-champ-header'>
            Teach Like a <br className="mobile-break" /> Champion
            <hr className='teach-like-champ-underline' />
          </h4>
          <h6 className='teach-like-champ-description' style={{ marginLeft: "30px", marginTop: "30px" }}>
            In his book, <a href="https://www.amazon.com/Teach-Like-Champion-Doug-Lemov/dp/1119712610/" className='teach-like-champ-link' target="/"><u>Teach Like a Champion</u></a>, veteran <br className="desktop-break" /> educator Doug Lemov talks about creating a <br className="desktop-break" /> classroom environment where “...students feel<br className="desktop-break" />  safe making and discussing mistakes, so you <br className="desktop-break" /> can spend less time hunting for errors and more<br className="desktop-break" />  time fixing them...” He outlines four key <br className="desktop-break" /> methods:
            <br />
            <br />
            <div style={{ marginLeft: "30px" }}>
              <li>Expect error</li>
              <li>Withhold answers</li>
              <li>Manage your tell</li>
              <li>Praise risk-taking</li>

            </div>
          </h6>

        </Grid>
        <Card style={{ background: "#712773", borderRadius: "20px" }} className='rough-draft-card'>
          <CardContent>
            <p className='rough-draft-card-content'>
              “Rough draft thinking happens <br className='desktop-break' /> when students share their <br className='desktop-break' /> unfinished, in-progress ideas <br className='desktop-break' /> and remain open to revising <br className='desktop-break' /> those ideas.”
            </p>
            <br /> <br />
            <p className='rough-draft-card-content-bold'>
              -<a href="https://www.amazon.com/Rough-Draft-Math-Revising-Learn/dp/1625312067/" target="/" className='rough-draft-link'><u> Rough Draft Math</u></a>,
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
      </Grid>
    </Box >
  );
}

export default PositiveCultureBox;