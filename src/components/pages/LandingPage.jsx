import React from 'react'

import ProductFeatures from '../organisms/ProductFeatures'
import WhyRightOn from '../organisms/WhyRightOn'
import ProblemSection from '../organisms/ProblemSection'
import Supporters from '../organisms/Supporters'

import featureData from '../../_localDb/features'

import GoToTop from '../../GoToTop'

function LandingPage (props) { 
    const {styles} = props
    const { whyRightOn, productFeatures, supporters } = featureData
    return (
        <div style={{background: "linear-gradient(180deg, #322759 -2.67%, #40216F 64.71%, #591796 100%)"}}>
        <ProblemSection /> 
        <ProductFeatures productFeatures={productFeatures}/>          
        <WhyRightOn whyRightOn={whyRightOn}/>
        <Supporters supporters={supporters}/>
        {/* <GoToTop/> */}
        </div>
    )
}

export default LandingPage;