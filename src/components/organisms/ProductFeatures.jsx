import React,{useRef} from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import SingleFeature from '../atoms/SingleFeature'
import placeholder from '../../images/background-triangle.png'
import monster from '../../images/home-monster.png'

function ProductFeatures (props) {
  const { productFeatures } = props
  const testRef = useRef(null);
  const scrollToElement = () => testRef.current.scrollIntoView();
    return (
      // <div id="productFeatures">
      
      <Grid container justify="center" style={{marginTop: "350px"}}>
        <div container style={{ marginTop: "460px" }}>
          <div >
            {/* <a href="#productFeatures" >
              <img
                src={staticButton}
                className="product-features-button"
                onMouseOver={e => e.currentTarget.src = hoverButton}
                onMouseOut={e => e.currentTarget.src = staticButton}
              />
            </a> */}
            <button onClick={scrollToElement}>
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
        </div>
        <Grid container justify="space-around" style={{zIndex: "1"}} 
        // id="productFeatures"
        ref={testRef}
        >
          {productFeatures.map((feature, key) => {
            return (
              <Grid item >
                <SingleFeature key={key} feature={feature} />
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
      // </div>
    );
}

export default ProductFeatures;