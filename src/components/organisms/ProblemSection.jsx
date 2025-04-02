import React from 'react'
import { Box, Grid, useMediaQuery } from "@material-ui/core";
import chromebook from '../../images/HomeBanner.png'
import mainImage from '../../images/mainimage/RightOn-MainImage.png'
import block from '../../images/landing-block.png'
import topBackground from '../../images/math-symbol-bg-bottom.png'
import monster from '../../images/home-monster.png'
import staticButton from '../../images/product-features-static.png'
import hoverButton from '../../images/product-features-hover.png'


function ProblemSection() {
  const isSmall = useMediaQuery('(max-width:700px)');
  const isMedium = useMediaQuery('(max-width:900px)');
  return (
    <Box component="section" className='problem-section'>
      <Grid container>
        <img
          src={topBackground}
          className='problem-section-top-background'
          alt="math-background"
        />
        <h4 className='problem-section-landing-block-header1' style={{ paddingTop: (!isSmall && isMedium) ? '200px' : 0 }}>
          Everyone can be <br /> a math person!
          <hr className='problem-section-landing-block-underline' />
        </h4>
        <p className='problem-section-landing-block-header2' style={{ paddingTop: (!isSmall && isMedium) ? '200px' : 0 }}>
          Explore how  <i>RightOn!</i> <sup style={{fontSize: '10px', position: 'relative', top: '-1em', marginLeft: '-4px', marginRight: '4px'}}> ® </sup> inspires <br /> learning by embracing mistakes.
        </p>
        <img
          src={block}
          alt="landing-page-block"
          className='problem-section-landing-block'
          style={{ top: (!isSmall && isMedium) && '400px' }}
        />
        <img
          src={mainImage}
          alt="right-on-education"
          className='problem-section-chromebook'
        />
        <div container style={{ marginTop: "460px" }}>
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
       
      </Grid>

    </Box>
  );
}

export default ProblemSection;