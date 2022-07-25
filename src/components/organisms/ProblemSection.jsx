import React from 'react'
import { Box, Grid } from "@material-ui/core";
import chromebook from '../../images/chromebook-mockup-1.png'
import block from '../../images/landing-block.png'
import topBackground from '../../images/math-symbol-bg-bottom.png'
import monster from '../../images/home-monster.png'


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
        <p className='problem-section-landing-block-header2'>
          Explore how  <i>RightOn!</i>  inspires <br /> learning by embracing mistakes.
        </p>
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
        {/* <div container style={{ marginTop: "460px" }}>
          <div >
            {/* <a href="#productFeatures" >
              <img
                src={staticButton}
                className="product-features-button"
                onMouseOver={e => e.currentTarget.src = hoverButton}
                onMouseOut={e => e.currentTarget.src = staticButton}
              />
            </a> */}
            {/* <button onClick={scrollToElement}>
              <img
                src={staticButton}
                className="product-features-button"
                onMouseOver={e => e.currentTarget.src = hoverButton}
                onMouseOut={e => e.currentTarget.src = staticButton}
              />
            </button>
          </div>
          <div
            container
            alignItems="center"
            justify="center"
          >
            <img
              src={monster}
              alt="product-features-monster"
              className='problem-section-monster'
            />
          </div>
        </div>  */}
      </Grid>

    </Box>
  );
}

export default ProblemSection;