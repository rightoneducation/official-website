import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, Typography, Grid } from "@material-ui/core";
import bored from '../../images/student-looking-bored.jpg'
import chromebook from '../../images/chromebook-mockup-1.png'
import block from '../../images/landing-block.png'
import topBackground from '../../images/math-symbol-bg-bottom.png'
import staticMonster from '../../images/product-features-monster-static.png'
import ProductFeatures from '../organisms/ProductFeatures'


function ProblemSection() {
  return (
    <Box component="section" className='problem-section'>
      <Grid container>
        <img
          src={topBackground}
          className='problem-section-top-background'
          // width="100%"
          alt="math-background"
        />
        <h4 className='problem-section-landing-block-header1'>
          Everyone can be <br /> a math person!
          <hr className='problem-section-landing-block-underline' />
        </h4>
        <h4 className='problem-section-landing-block-header2'>
          Explore how  <i>RightOn!</i>  inspires <br/> learning by embracing mistakes.
        </h4>
        <img
          src={block}
          alt="landing-page-block"
          className='problem-section-landing-block'
        />
        <img
          src={chromebook}
          alt="right-on-education-chromebook-app"
          className='problem-section-chromebook'
        />
        <a href="#productFeatures">
          <img
            src={staticMonster}
            alt="product-features-monster"
            className='problem-section-monster-static'
          />
        </a>
      </Grid>
    </Box>
  );
}

export default ProblemSection;