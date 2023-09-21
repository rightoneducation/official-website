import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import preview from '../../images/landingPagePreview.svg'
import block from '../../images/landing-block.png'
import numbers from '../../images/background-numbers.svg'
import monster from '../../images/home-monster.png'
import staticButton from '../../images/product-features-static.png'
import hoverButton from '../../images/product-features-hover.png'


function ProblemSection() {
  return (
    <Box component="section" className='problem-section'>
      <Grid className='top-container'>
        <Grid item sm={6}>
          <div>
            <Grid className='title-container'>
              <div className='title-style'>
                Everyone can be<br />a math person!

              </div>
              <hr className='problem-section-landing-block-underline' />
              <div className='subtitle-style'>
                Explore how  <i>RightOn!</i>  inspires <br /> learning by embracing <br />  mistakes.
              </div>
            </Grid>
            <Grid className='block-container'>
              <img
                src={block}
                className='block'
                alt="landing-block"
              />
            </Grid>
          </div>
        </Grid>
        <Grid item sm={6} className='right-container'>
          <Grid className='preview-container'>
            <img
              src={preview}
              className='problem-section-preview'
              alt='game-preview'
            />
          </Grid>
          <Grid className='numbers-container'>
            <img
              src={numbers}
              className='problem-section-top-background'
              alt="math-background"
            />
          </Grid>
        </Grid>
      </Grid>
      <div container >
          <div>
            <a href="#productFeatures">
              <img
                src={staticButton}
                className="product-features-button"
                onMouseOver={e => e.currentTarget.src = hoverButton}
                onMouseOut={e => e.currentTarget.src = staticButton}
              />
            </a>
          </div>
          <div
            container
            alignItems="center"
            justify="center"
            id="productFeatures"
          >
            <img
              src={monster}
              alt="product-features-monster"
              className='problem-section-monster'
            />
          </div >
        </div>
    </Box>
  );
}

export default ProblemSection;