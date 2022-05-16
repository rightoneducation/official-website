import React from 'react'

import ProductFeatures from '../organisms/ProductFeatures'
import OurMission from '../organisms/OurMission'
import WhyRightOn from '../organisms/WhyRightOn'
import ProblemSection from '../organisms/ProblemSection'

import featureData from '../../_localDb/features'

function LandingPage (props) { 
    const {styles} = props
    const { whyRightOn, productFeatures } = featureData
    return (
        <div>
        {/* <OurMission styles={styles}/> */}
        <ProblemSection />           
        <WhyRightOn whyRightOn={whyRightOn}/>
        <ProductFeatures productFeatures={productFeatures}/>
        </div>
    )
}

export default LandingPage;