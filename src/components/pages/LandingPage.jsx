import React from 'react'

import ProductFeatures from '../organisms/ProductFeatures'
import WhyRightOn from '../organisms/WhyRightOn'
import ProblemSection from '../organisms/ProblemSection'

import featureData from '../../_localDb/features'

import GoToTop from '../../GoToTop'

function LandingPage (props) { 
    const {styles} = props
    const { whyRightOn, productFeatures } = featureData
    return (
        <div style={{background: "linear-gradient(180deg, #322759 -2.67%, #40216F 64.71%, #591796 100%)"}}>
        {/* <OurMission styles={styles}/> */}
        <ProblemSection /> 
        <ProductFeatures productFeatures={productFeatures}/>          
        <WhyRightOn whyRightOn={whyRightOn}/>
        <GoToTop/>
        </div>
    )
}

export default LandingPage;